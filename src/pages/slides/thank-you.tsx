import H1 from "@/components/typography/H1";

export default function ThankYou() {
  return (
    <main className="min-h-screen grid place-items-stretch">
      <section className="min-h-screen grid content-start justify-items-center gap-6 p-8">
        <img
          src="/deck/codepress-logo.svg"
          alt="CodePress logo"
          width={220}
          height={93}
        />
        <H1>Thank you!</H1>
      </section>
    </main>
  );
}
