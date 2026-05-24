import { useEffect, useState } from "react";
import touskiLogo from "./assets/touski-logo.jpeg";

const heroSlides = [
  {
    eyebrow: "Trekking & nature",
    title: "Terrain, altitude et liberté de mouvement.",
    text: "Slide prévu pour photo trekking/randonnée en plein écran.",
    accent: "Trekking • Randonnée • Nature",
    image: "/slider/Gemini_Generated_Image_9sfdnd9sfdnd9sfd.png",
    fallback:
      "bg-[linear-gradient(180deg,#8ca58f_0%,#5b725f_20%,#24322a_52%,#0c1411_100%)]",
    mountainA: "bg-[#16221c]",
    mountainB: "bg-[#0a120f]",
    glass: "bg-black/25",
    tag1: "Randonnée & trekking",
    tag2: "Outdoor premium",
  },
  {
    eyebrow: "Altitude & sécurité",
    title: "High-altitude GPS and real autonomy.",
    text: "Slide prévu pour photo GPS/alpinisme en conditions extrêmes.",
    accent: "GPS • Sécurité • Autonomie • Altitude",
    image: "/slider/Gemini_Generated_Image_g5vfyfg5vfyfg5vf.png",
    fallback:
      "bg-[linear-gradient(180deg,#b4bfc8_0%,#738693_20%,#303f48_52%,#0c1318_100%)]",
    mountainA: "bg-[#17222a]",
    mountainB: "bg-[#0c141a]",
    glass: "bg-black/25",
    tag1: "GPS high mountains",
    tag2: "Orientation & confiance",
  },
  {
    eyebrow: "Alpinisme & équipement",
    title: "Technical apparel and high-mountain protection.",
    text: "Slide prévu pour photo vêtements techniques/alpinisme.",
    accent: "Alpinisme • Vêtements • Sécurité",
    image: "/slider/Gemini_Generated_Image_846e9h846e9h846e.png",
    fallback:
      "bg-[linear-gradient(180deg,#c5a57a_0%,#886a4d_22%,#3c2f27_52%,#100d0c_100%)]",
    mountainA: "bg-[#241b16]",
    mountainB: "bg-[#110d0b]",
    glass: "bg-black/25",
    tag1: "Alpinisme technique",
    tag2: "Protection & performance",
  },
  {
    eyebrow: "Exploration & sécurité",
    title: "Repérage terrain et autonomie en conditions réelles.",
    text: "Designed for real exploration and outdoor safety imagery.",
    accent: "Exploration • Mission • Sécurité",
    image: "/slider/Gemini_Generated_Image_j97qjj97qjj97qjj.png",
    fallback:
      "bg-[linear-gradient(180deg,#b6b9ad_0%,#6a705f_24%,#2d3228_54%,#0f120f_100%)]",
    mountainA: "bg-[#1a1f18]",
    mountainB: "bg-[#0d100d]",
    glass: "bg-black/25",
    tag1: "Sécurité outdoor",
    tag2: "Terrain & autonomie",
  },
];

const pillars = [
  {
    title: "Trekking & expédition",
    text: "Équipement utile pour partir plus loin, plus léger, plus sûr.",
  },
  {
    title: "GPS & high mountains",
    text: "Solutions de localisation, orientation et sécurité pour terrains exigeants.",
  },
  {
    title: "Drones de sécurité",
    text: "Vision, repérage et surveillance outdoor pour missions, chalet et nature.",
  },
  {
    title: "Maison essentielle",
    text: "Les indispensables solides et intelligents pour la vie quotidienne.",
  },
];

const categories = [
  "Trekking",
  "GPS high mountains",
  "Drones sécurité",
  "Maison",
  "Randonnée",
  "Alpinisme",
  "Survie douce",
  "Accessoires nature",
];

const featured = [
  {
    name: "Traceur GPS Altitude Pro",
    tag: "Sécurité montagne",
    desc: "Pour randonnée engagée, alpinisme, trekking et repérage hors réseau.",
  },
  {
    name: "Drone Sentinel Alpine",
    tag: "Vision & assistance",
    desc: "Repérage visuel, sécurité de parcours, surveillance nature et propriété isolée.",
  },
  {
    name: "Kit Chalet & Maison Indispensable",
    tag: "Essentiels robustes",
    desc: "Produits pratiques, durables et bien choisis pour la maison et la vie réelle.",
  },
];

const editorialCards = [
  {
    title: "Maison & terrain",
    text: "Une sélection qui fonctionne autant pour un chalet, une maison isolée ou une vie pratique au quotidien.",
  },
  {
    title: "Sécurité & confiance",
    text: "GPS, drones et produits utiles pensés pour rassurer, guider, surveiller et aider réellement.",
  },
  {
    title: "Nature & autonomie",
    text: "L'univers TOUSKI évoque l'air libre, la robustesse, le confort et la liberté de mouvement.",
  },
];

const stats = [
  { value: "6", label: "Strategic worlds" },
  { value: "24/7", label: "Esprit sécurité" },
  { value: "100%", label: "Indispensable" },
];


export default function AppEn() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3700);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <div className="min-h-screen bg-[#08110d] text-white selection:bg-emerald-300/30">
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10">
        {heroSlides.map((item, index) => (
          <div
            key={item.eyebrow}
            className={`absolute inset-0 transition-all duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`absolute inset-0 ${item.fallback}`} />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,9,0.08)_0%,rgba(6,12,10,0.30)_50%,rgba(3,6,6,0.52)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,220,170,0.10),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(200,220,255,0.10),transparent_20%)]" />
            <div className={`absolute inset-x-0 bottom-0 h-[32%] ${item.mountainA} opacity-60 [clip-path:polygon(0_60%,16%_46%,32%_57%,49%_35%,66%_52%,84%_37%,100%_55%,100%_100%,0_100%)]`} />
            <div className={`absolute inset-x-0 bottom-0 h-[20%] ${item.mountainB} opacity-65 [clip-path:polygon(0_72%,18%_56%,35%_66%,51%_49%,67%_60%,82%_44%,100%_58%,100%_100%,0_100%)]`} />
          </div>
        ))}

        <div className="pointer-events-none absolute left-[-4rem] top-24 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />
        <div className="pointer-events-none absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-emerald-200/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 py-6 lg:px-10">
          <header className="relative flex items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-xl shadow-xl shadow-black/30">
            <div className="flex items-center pl-40">
              <div className="absolute -bottom-8 left-5 z-20 h-28 w-28 overflow-hidden rounded-[1.5rem] border border-white/25 bg-white p-1.5 shadow-2xl shadow-black/40">
                <img
                  src={touskiLogo}
                  alt="Logo TOUSKI"
                  className="h-full w-full rounded-[1.2rem] object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-orange-200/85">Logo conservé</p>
                <p className="text-lg font-semibold tracking-[0.35em]">TOUSKI</p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#univers" className="hover:text-white">Universe</a>
              <a href="#categories" className="hover:text-white">Categories</a>
              <a href="#selection" className="hover:text-white">Selection</a>
              <a href="#vision" className="hover:text-white">Vision</a>
              <a
                href="/"
                className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-white/10"
                aria-label="Switch to French"
              >
                FR
              </a>
              <a
                href="/de"
                className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-white/10"
                aria-label="Switch to German"
              >
                DE
              </a>
            </nav>
          </header>

          <div className="relative flex flex-1 items-start py-12 pt-72 lg:py-20 lg:pt-[26rem]">
            <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-4xl">
                <div className="mb-6 inline-flex rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur">
                  Everything that truly matters
                </div>
                <h1 className="text-4xl font-semibold leading-[0.96] tracking-tight sm:text-5xl md:text-6xl xl:text-[5.1rem]">
                  TOUSKI equips <span className="text-orange-200">high mountains</span>, <span className="text-emerald-200">trekking</span>, and <span className="text-sky-200">outdoor safety</span>.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
                  This hero is built for your real fullscreen photos: trekking, GPS, mountaineering, and technical apparel.
                  Each slide image is the main background with a premium overlay to keep text perfectly readable.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#selection" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b1713] shadow-2xl shadow-white/20 transition hover:scale-[1.02]">
                    See mountain collection
                  </a>
                  <a href="#categories" className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                    Explore GPS & mountaineering
                  </a>
                </div>

                <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/15 bg-black/25 px-4 py-4 backdrop-blur shadow-lg shadow-black/20">
                      <p className="text-2xl font-semibold text-orange-200">{item.value}</p>
                      <p className="mt-1 text-sm text-white/68">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className={`w-full max-w-md rounded-[1.8rem] border border-white/20 ${slide.glass} p-6 backdrop-blur-xl shadow-2xl shadow-black/30`}>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-orange-200/90">{slide.eyebrow}</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">{slide.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">{slide.text}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.26em] text-white/65">{slide.accent}</p>
                </div>

                <div className="w-full max-w-md rounded-[1.4rem] border border-white/15 bg-black/30 p-4 backdrop-blur-md">
                  <div className="mb-3 flex gap-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          activeSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/35"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85">{slide.tag1}</span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85">{slide.tag2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {editorialCards.map((card) => (
            <article key={card.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl shadow-2xl shadow-black/20">
              <p className="text-[10px] uppercase tracking-[0.32em] text-amber-200/80">Positionnement premium</p>
              <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="univers" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">The new TOUSKI universe</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">An essentials brand, not just another store.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/68">
            La home raconte une vraie philosophie: ce qui sert vraiment, ce qui protège, ce qui accompagne,
            ce qui dure à la maison, en randonnée, sur les sentiers, en altitude ou en environnement isolé.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <article key={item.title} className="rounded-[1.85rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-300/30 to-white/10" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="categories" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/75">Catalog architecture</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Coherent, premium categories with strong visual identity.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              TOUSKI brings together multiple worlds under one promise: well-chosen essentials.
              This expands the brand without diluting it and elevates perceived quality.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Maison essentielle", "anti-froid, réparation pratique, entretien, accessoires utiles"],
              ["Trekking & randonnée", "sacs, lampes, filtration, orientation, accessoires durables"],
              ["GPS & localisation", "suivi, sécurité, high mountains, expédition, autonomie"],
              ["Drones outdoor", "surveillance, exploration, sécurité chalet et zones isolées"],
              ["Alpinisme", "équipement complémentaire, sécurité, outils de progression"],
              ["Nature & survie douce", "objets fiables pour autonomie, protection et confort"],
            ].map(([title, desc]) => (
              <article key={title} className="rounded-[1.6rem] border border-white/10 bg-[#0c1714] p-5 shadow-lg shadow-black/15 transition hover:bg-[#10201a]">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="selection" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">Featured selection</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Des produits-phares montrés comme un univers lifestyle.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/68">
            Au lieu d'une homepage générique, on met directement en avant les catégories qui renforcent la marque:
            sécurité, altitude, exploration, autonomie et confort utile.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((item, index) => (
            <article key={item.name} className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1">
              <div
                className={`relative h-72 overflow-hidden ${
                  index === 0
                    ? "bg-[linear-gradient(180deg,#95b09d_0%,#516c5a_28%,#203128_75%,#101713_100%)]"
                    : index === 1
                    ? "bg-[linear-gradient(180deg,#b8c7ce_0%,#6a7f88_24%,#26333a_70%,#101517_100%)]"
                    : "bg-[linear-gradient(180deg,#d3c2a4_0%,#9c8363_26%,#4e3d2e_65%,#17110d_100%)]"
                }`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.28))]" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-amber-200/80">{item.tag}</p>
                <h3 className="mt-3 text-2xl font-semibold transition group-hover:translate-x-1">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.desc}</p>
                <a href="#categories" className="mt-6 inline-block rounded-full border border-white/12 px-4 py-2 text-sm text-white/88 transition hover:bg-white/10">
                  View collection
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-2xl shadow-black/20 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-200/80">Brand vision</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                TOUSKI should inspire trust, create desire, and feel ready for both the field and home.
              </h2>
            </div>
            <p className="text-base leading-8 text-white/68">
              The tone moves away from discount or gadget positioning. The brand shifts toward a more editorial,
              premium, outdoor, and aspirational universe while keeping practical utility at the center.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070f0c]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <h2 className="text-2xl font-semibold">TOUSKI in Quebec, Saint Elie de Caxton</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70">
            TOUSKI offers mountain equipment, trekking and hiking gear, high-altitude GPS solutions,
            outdoor safety drones, mountaineering equipment, and practical home essentials in Quebec, Saint-Elie-de-Caxton.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70">
            The selection also covers technical mountain apparel, orientation, outdoor autonomy, exploration,
            expedition, soft survival, and cabin equipment for practical use in the field.
          </p>
        </div>
      </footer>
    </div>
  );
}
