export default function Engine() {
  return (
    <main className="min-h-screen grid place-items-stretch">
      <section className="min-h-screen grid content-start justify-items-center gap-6 p-8">
        <h2>Instant landing page engine</h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-[1200px] items-start">
          <div>
            <h3>Unlimited landing pages</h3>
            <ul className="list-disc pl-6">
              <li>Your brand styles — reuse your existing components</li>
              <li>Create different offers per campaign</li>
              <li>Specialized components other builders can’t provide</li>
            </ul>
          </div>
          <div>
            <div className="w-full h-[420px] border-2 border-dashed border-[#bbb] grid place-items-center text-[#777] bg-black/5">
              <span>Product mock</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
