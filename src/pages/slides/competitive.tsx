export default function Competitive() {
  return (
    <main className="min-h-screen grid place-items-stretch">
      <section className="min-h-screen grid content-start justify-items-center gap-6 p-8">
        <h2>Competitive Landscape</h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-[1200px] items-start">
          <div>
            <ul className="list-disc pl-6">
              <li>
                No Code Marketing Builders — Squarespace, Webflow, Unbounce,
                Framer
              </li>
              <li>AI Coding Agents — Cursor, Claude Code, Replit</li>
              <li>AI Landing Page Builders — Lovable, Bolt</li>
            </ul>
          </div>
          <div>
            <h3>We blend all 3</h3>
            <ul className="list-disc pl-6">
              <li>Ease of no code UI/UX</li>
              <li>Flexibility + power of real code and AI agents</li>
              <li>Sits in your codebase; in your brand</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
