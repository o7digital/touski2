import Contact from "./Contact.jsx";

export default function SeoLanding({ page }) {
  if (!page) return <Contact />;

  return (
    <div className="min-h-screen bg-[#08110d] text-white">
      <header className="border-b border-white/10 bg-[#07100c]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="/" className="text-lg font-semibold tracking-[0.35em]">TOUSKI</a>
          <nav className="flex flex-wrap items-center gap-5 text-sm text-white/75">
            <a href="/#univers" className="hover:text-white">Univers</a>
            <a href="/#categories" className="hover:text-white">Catégories</a>
            <a href="/#selection" className="hover:text-white">Sélection</a>
            <a href="/#vision" className="hover:text-white">Vision</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{page.intro}</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {page.sections.map(([title, text]) => (
              <article key={title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-7">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-4 leading-8 text-white/68">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 rounded-[1.4rem] border border-white/10 bg-[#0c1714] p-6 text-sm leading-7 text-white/55">
            {page.keywords.join(" · ")}
          </p>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-[#050a08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} TOUSKI — Indispensables maison introuvables au Canada</p>
          <a href="mailto:contact@touski.online" className="hover:text-white">contact@touski.online</a>
        </div>
      </footer>
    </div>
  );
}
