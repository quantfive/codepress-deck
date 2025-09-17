export default function HowItWorks() {
  return (
    <main className="min-h-screen grid place-items-stretch">
      <section className="min-h-screen grid content-start justify-items-center gap-6 p-8">
        <h2>What took 14 days now ships in 60 seconds</h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-[1200px] items-start">
          <div>
            <h3>How it works</h3>
            <ol className="list-decimal pl-6">
              <li>Integrate CodePress directly to your codebase</li>
              <li>Edit on the live site with our Chrome extension</li>
              <li>Code is committed to GitHub; code is the CMS</li>
              <li>Create/edit pages like SquareSpace</li>
            </ol>
          </div>
          <div>
            <div className="w-full h-[420px] border-2 border-dashed border-[#bbb] grid place-items-center text-[#777] bg-black/5">
              <span>Flow mock</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
