#!/usr/bin/env node
/*
  Quick-and-dirty PDF to slides JSON extractor.
  Usage: node scripts/extract-pdf.js "/absolute/path/to/CodePress Deck.pdf" > src/slides/from-pdf.json
*/

const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

async function main() {
  const pdfPath =
    process.argv[2] || path.resolve(process.cwd(), "CodePress Deck.pdf");
  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found: ${pdfPath}`);
    process.exit(1);
  }

  const buffer = fs.readFileSync(pdfPath);
  const data = await pdf(buffer);

  const pages = data.text
    .split("\f")
    .map((p) => p.trim())
    .filter(Boolean);

  const slides = [];
  for (let i = 0; i < pages.length; i++) {
    const rawLines = pages[i]
      .split("\n")
      .map((l) => l.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    if (rawLines.length === 0) continue;

    const title = rawLines[0];
    const bodyLines = rawLines.slice(1);
    const id = `pdf-${String(i + 1).padStart(2, "0")}-${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

    // Heuristic: if there are 2+ body lines, treat as list; one line -> text; none -> section
    if (bodyLines.length >= 2) {
      slides.push({ id, type: "list", title, items: bodyLines.slice(0, 16) });
    } else if (bodyLines.length === 1) {
      slides.push({ id, type: "text", title, body: bodyLines[0] });
    } else {
      slides.push({ id, type: "section", title });
    }
  }

  const out = { source: path.basename(pdfPath), pages: pages.length, slides };
  process.stdout.write(JSON.stringify(out, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
