import { useState } from "react";
import touskiLogo from "./assets/touski-logo.jpeg";

const trustItems = [
  "Entreprise québécoise établie à Saint-Élie-de-Caxton",
  "Service client dédié en français et anglais",
  "Produits sélectionnés pour leur qualité",
  "Livraison partout au Canada",
  "Satisfaction client garantie",
];

const localSeoGroups = [
  "contact TOUSKI Québec Mont d'Iberville",
  "service client TOUSKI Québec Mont d'Iberville",
  "TOUSKI Saint-Élie-de-Caxton Québec Mont d'Iberville",
  "contact équipement Québec Mont d'Iberville",
  "support équipement outdoor Québec Mont d'Iberville",
  "livraison TOUSKI Québec Mont d'Iberville",
  "retours TOUSKI 30 jours Québec Mont d'Iberville",
];

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08110d] text-white selection:bg-emerald-300/30">
      <section className="border-b border-white/10 bg-[linear-gradient(180deg,#13251e_0%,#08110d_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <header className="relative flex items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-xl shadow-xl shadow-black/30">
            <a href="/" className="flex items-center pl-40">
              <div className="absolute -bottom-8 left-5 z-20 h-28 w-28 overflow-hidden rounded-[1.5rem] border border-white/25 bg-white p-1.5 shadow-2xl shadow-black/40">
                <img src={touskiLogo} alt="Logo TOUSKI" className="h-full w-full rounded-[1.2rem] object-cover" />
              </div>
              <p className="text-lg font-semibold tracking-[0.35em]">TOUSKI</p>
            </a>
            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="/#univers" className="hover:text-white">Univers</a>
              <a href="/#categories" className="hover:text-white">Catégories</a>
              <a href="/#selection" className="hover:text-white">Sélection</a>
              <a href="/#vision" className="hover:text-white">Vision</a>
              <a href="/contact" className="text-orange-200 hover:text-white">Contact</a>
              <a href="/en" className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-white/10">EN</a>
              <a href="/de" className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-white/10">DE</a>
            </nav>
            <button type="button" className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white md:hidden" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Ouvrir le menu">
              MENU
            </button>
          </header>
          {mobileMenuOpen && (
            <nav className="mt-3 rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur md:hidden">
              <div className="flex flex-col gap-3 text-sm text-white/85">
                <a href="/#univers" onClick={() => setMobileMenuOpen(false)}>Univers</a>
                <a href="/#categories" onClick={() => setMobileMenuOpen(false)}>Catégories</a>
                <a href="/#selection" onClick={() => setMobileMenuOpen(false)}>Sélection</a>
                <a href="/#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
            </nav>
          )}

          <div className="grid gap-10 pb-20 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pt-40">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">Nous contacter</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Service client TOUSKI Canada</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                Une question sur une commande, la livraison, les retours ou le choix d'un produit?
                Contactez TOUSKI à Saint-Élie-de-Caxton. Notre équipe répond en français et en anglais.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/12 bg-white/[0.05] p-7 shadow-2xl shadow-black/20">
              <h2 className="text-2xl font-semibold">TOUSKI Canada</h2>
              <dl className="mt-6 grid gap-5 text-sm leading-7 text-white/72">
                <div><dt className="text-xs uppercase tracking-[0.24em] text-white/42">Adresse / Address</dt><dd className="mt-2">1030, Avenue Muguette<br />Saint-Élie-de-Caxton QC G0X 2N0<br />Canada</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.24em] text-white/42">Contact</dt><dd className="mt-2"><a className="hover:text-white" href="mailto:contact@touski.online">contact@touski.online</a><br /><a className="hover:text-white" href="tel:+18197010378">+1 819-701-0378</a></dd></div>
                <div><dt className="text-xs uppercase tracking-[0.24em] text-white/42">Horaires / Hours</dt><dd className="mt-2">Lundi - Vendredi: 9h - 17h<br />Monday - Friday: 9am - 5pm</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/75">Pourquoi nous faire confiance?</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Une présence locale et un service clair.</h2>
            <div className="mt-8 grid gap-3">
              {trustItems.map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-white/72">✓ {item}</p>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#0c1714] p-6">
              <h3 className="text-xl font-semibold">Informations légales</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                TOUSKI est une entreprise enregistrée au Québec. Nous respectons les normes de commerce en ligne canadiennes
                et les règles applicables à la protection des renseignements personnels.
              </p>
            </div>
          </div>

          <form className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-7 shadow-xl shadow-black/20" onSubmit={(event) => event.preventDefault()}>
            <h2 className="text-2xl font-semibold">Nous contacter / Get In Touch</h2>
            <div className="mt-6 grid gap-4">
              <div>
                <label className="mb-2 block text-sm text-white/70" htmlFor="contact-name">Name *</label>
                <input id="contact-name" name="name" required placeholder="Name *" className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/35" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70" htmlFor="contact-email">Email address *</label>
                <input id="contact-email" name="email" type="email" required placeholder="Email address *" className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/35" />
              </div>
              <button className="mt-2 rounded-xl bg-orange-300 px-5 py-3 text-sm font-semibold text-[#172019] hover:bg-orange-200">Submit</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050a08]">
        <div className="border-b border-white/10"><div className="mx-auto grid max-w-7xl gap-5 px-6 py-9 sm:grid-cols-3 lg:px-10">{[["↗","Livraison rapide et gratuite","Partout au Canada dès 140 $ CAD"],["◎","Support client","Une équipe disponible pour vous guider"],["◇","Satisfait ou remboursé","Retours simples sous 30 jours"]].map(([icon,title,text]) => <div key={title} className="flex gap-4"><span className="text-2xl text-orange-200">{icon}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-white/55">{text}</p></div></div>)}</div></div>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.4fr] lg:px-10">
          <div><p className="text-xl font-semibold tracking-[0.35em]">TOUSKI</p><p className="mt-5 max-w-xs text-sm leading-7 text-white/60">Indispensables maison introuvables au Canada, choisis au Québec pour les réalités d'ici.</p><a className="mt-5 block text-sm text-white/80 hover:text-white" href="mailto:contact@touski.online">contact@touski.online</a><a className="mt-2 block text-sm text-white/70 hover:text-white" href="tel:+18197010378">+1 819-701-0378</a><p className="mt-3 text-sm leading-6 text-white/50">1030, Avenue Muguette, Saint-Élie-de-Caxton QC G0X 2N0, Canada</p></div>
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Compagnie</h3><nav className="mt-6 flex flex-col gap-4 text-sm text-white/70"><a href="/#vision" className="hover:text-white">À propos</a><a href="/contact" className="hover:text-white">Contact</a><a href="/#mentions-legales" className="hover:text-white">Mentions légales</a></nav></div>
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Service client</h3><div className="mt-6 flex flex-col gap-4 text-sm leading-6 text-white/70"><p>Support client disponible 24h/24 et 7j/7.</p><p>Livraison standard Canada: 3 à 7 jours ouvrables.</p><p>Gratuite dès 140 $ CAD. Retours acceptés sous 30 jours.</p></div></div>
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Infolettre</h3><p className="mt-6 text-sm leading-7 text-white/60">Soyez le premier à recevoir les dernières nouvelles sur les tendances, promotions et bien plus encore !</p><form className="mt-5 flex" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="contact-newsletter-email">Votre adresse courriel</label><input id="contact-newsletter-email" type="email" required placeholder="Votre adresse courriel" className="min-w-0 flex-1 rounded-l-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/35"/><button className="rounded-r-xl bg-orange-300 px-5 text-sm font-semibold text-[#172019] hover:bg-orange-200">S'inscrire</button></form></div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between lg:px-10"><p>© {new Date().getFullYear()} TOUSKI — Indispensables maison introuvables au Canada</p><span>créé par <span className="text-orange-200">o7Digital</span></span></div>
          <p className="mx-auto max-w-7xl px-6 pb-7 text-center text-[11px] leading-7 text-white/35 lg:px-10">{localSeoGroups.join(" · ")}</p>
        </div>
      </footer>
    </div>
  );
}
