import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";

export default function LandingApp() {
  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="grid gap-4">
          <span className="text-xs tracking-wider uppercase text-[#666]">
            Introducing
          </span>
          <H1 className="text-left">Acme Launch — Build. Iterate. Ship.</H1>
          <P className="text-left max-w-[640px]">
            Acme Launch helps teams move from idea to impact faster. Collaborate
            on content, preview instantly, and publish when it feels right.
          </P>
          <div className="flex gap-3 pt-2">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 text-sm hover:bg-blue-700"
            >
              Get started
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm hover:bg-black/5"
            >
              Learn more
            </a>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 pt-4">
            <li className="flex items-start gap-2">
              <span aria-hidden className="text-green-600">
                ✓
              </span>
              <span>Instant previews for every edit</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="text-green-600">
                ✓
              </span>
              <span>Write, design, and ship together</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="text-green-600">
                ✓
              </span>
              <span>SEO‑friendly by default</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="text-green-600">
                ✓
              </span>
              <span>No code changes required</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border p-4 bg-black/5 grid place-items-center min-h-[260px]">
          <div className="text-[#666] text-sm">
            Hero image / product screenshot
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {["Collaborative", "Performant", "Reliable"].map((title) => (
          <div key={title} className="rounded-xl border p-5 bg-white">
            <div className="font-medium mb-1">{title}</div>
            <div className="text-sm text-[#666]">
              Short supporting copy that explains the benefit in one sentence.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
