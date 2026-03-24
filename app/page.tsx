const heroTitle = "em breve";
const contactEmail = "mejicode@gmail.com";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a342b] text-(--foreground)">
      <section className="relative isolate min-h-screen overflow-hidden bg-[#0a342b]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-background.png')" }}
        />

        <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
          <div className="max-w-2xl">
            <div
              className="mb-6 inline-flex h-58 w-64 items-center bg-contain bg-left bg-no-repeat sm:bg-center"
              style={{ backgroundImage: "url('/logo.png')" }}
            />

            {/* <h1 className="hero-title max-w-2xl text-5xl  leading-none sm:text-6xl lg:text-7xl">
              {heroTitle}
            </h1> */}

            <p className="hero-copy max-w-xl text-base leading-7 sm:text-lg">
              Uma empresa de desenvolvimento de software com um propósito{" "}
              <span className="hero-copy-highlight">ancestral</span>:
              acessibilizar a tecnologia e a comunicação para pessoas pretas e
              LGBTQIA+.
            </p>

            <div className="mt-8">
              <a
                className="inline-flex items-center justify-center rounded-full border text-white border-[#D69900]/80 bg-[#D69900] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-[#ffd36d]"
                href={`mailto:${contactEmail}`}
              >
                enviar email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
