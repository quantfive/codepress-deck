export default function Problem() {
  return (
    <main className="min-h-screen grid place-items-stretch">
      <section className="min-h-screen grid content-start justify-items-center gap-6 p-8">
        <h2>Design Blocked. PM’s and Marketers stuck.</h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-[1200px] items-start">
          <div>
            <h3>Iteration and changes take too long</h3>
            <ul className="list-disc pl-6">
              <li>PM waits 2 sprints for a copy tweak</li>
              <li>
                Designer wants to tweak the look / feel of website, can’t.
              </li>
              <li>Founder can’t touch frontend without Engineer</li>
              <li>Marketers need separate no-code tools; too much work</li>
            </ul>
          </div>
          <div>
            <div className="w-full h-[420px] border-2 border-dashed border-[#bbb] grid place-items-center text-[#777] bg-black/5">
              <span>Insert screenshots</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
