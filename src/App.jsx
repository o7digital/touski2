import { useEffect, useMemo, useState } from "react";
import touskiLogo from "./assets/touski-logo.jpeg";

const heroSlides = [
  {
    eyebrow: "Nature essentielle",
    title: "TOUSKI pour la montagne, la nature et la vraie vie.",
    text: "Une marque premium qui rassemble les indispensables pour la maison, le trekking, la randonnée, l'alpinisme, les GPS de haute montagne et les drones de sécurité.",
    accent: "Maison • Trekking • GPS • Drones",
    palette:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02)),radial-gradient(circle_at_52%_14%,rgba(255,214,140,0.35),transparent_17%),radial-gradient(circle_at_20%_18%,rgba(154,255,199,0.12),transparent_18%),linear-gradient(180deg,#96b89f_0%,#617c67_18%,#2b3b31_46%,#0f1814_78%,#08110d_100%)]",
    mountainA: "bg-[#1a2720]",
    mountainB: "bg-[#0c1511]",
    glass: "bg-emerald-300/10",
    tag1: "Randonnée & trekking",
    tag2: "Design, confiance, autonomie",
  },
  {
    eyebrow: "Altitude & sécurité",
    title: "GPS haute montagne et autonomie en terrain réel.",
    text: "TOUSKI devient une référence pour les produits utiles en altitude: orientation, sécurité, localisation, robustesse et confiance sur le terrain.",
    accent: "GPS • Sécurité • Autonomie • Altitude",
    palette:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02)),radial-gradient(circle_at_60%_13%,rgba(193,221,255,0.32),transparent_18%),radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.08),transparent_16%),linear-gradient(180deg,#aebfcb_0%,#758b98_20%,#374750_46%,#151d21_78%,#091014_100%)]",
    mountainA: "bg-[#1a252d]",
    mountainB: "bg-[#0e171d]",
    glass: "bg-sky-200/10",
    tag1: "GPS haute montagne",
    tag2: "Orientation & confiance",
  },
  {
    eyebrow: "Vision & protection",
    title: "Drones de sécurité, chalet, terrain et exploration nature.",
    text: "La marque intègre un univers drone premium: repérage, surveillance de propriété isolée, observation de terrain et assistance outdoor.",
    accent: "Drone • Observation • Sécurité • Nature",
    palette:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02)),radial-gradient(circle_at_58%_14%,rgba(240,214,163,0.30),transparent_18%),radial-gradient(circle_at_18%_18%,rgba(255,228,198,0.10),transparent_18%),linear-gradient(180deg,#c6ad88_0%,#8a725a_22%,#41342c_50%,#181311_80%,#0c0a09_100%)]",
    mountainA: "bg-[#241c18]",
    mountainB: "bg-[#14100e]",
    glass: "bg-amber-200/10",
    tag1: "Drones sécurité outdoor",
    tag2: "Vision terrain & chalet",
  },
];

const pillars = [
  {
    title: "Trekking & expédition",
    text: "Équipement utile pour partir plus loin, plus léger, plus sûr.",
  },
  {
    title: "GPS & haute montagne",
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
  "GPS haute montagne",
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
  { value: "6", label: "Univers stratégiques" },
  { value: "24/7", label: "Esprit sécurité" },
  { value: "100%", label: "Indispensable" },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3700);
    return () => clearInterval(interval);
  }, []);

  const slide = useMemo(() => heroSlides[activeSlide], [activeSlide]);

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
            <div className={`absolute inset-0 ${item.palette}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(130,178,147,0.20),transparent_24%),radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.10),transparent_18%),linear-gradient(180deg,rgba(7,15,12,0.10),rgba(7,15,12,0.75)),linear-gradient(135deg,rgba(27,45,36,0.55)_0%,rgba(13,22,18,0.55)_48%,rgba(7,16,13,0.78)_100%)]" />
            <div className={`absolute inset-x-0 bottom-0 h-[54%] ${item.mountainA} opacity-95 [clip-path:polygon(0_56%,16%_37%,34%_52%,52%_28%,68%_46%,82%_32%,100%_14%,100%_100%,0_100%)]`} />
            <div className={`absolute inset-x-0 bottom-0 h-[38%] ${item.mountainB} opacity-95 [clip-path:polygon(0_69%,14%_51%,30%_64%,47%_43%,61%_58%,77%_40%,100%_54%,100%_100%,0_100%)]`} />
          </div>
        ))}

        <div className="pointer-events-none absolute left-[10%] top-[14%] h-28 w-28 rounded-full border border-white/10 bg-white/10 blur-sm" />
        <div className="pointer-events-none absolute right-[12%] top-[16%] h-16 w-28 rounded-full border border-white/10 bg-white/10 blur-sm" />
        <div className="pointer-events-none absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-4rem] top-28 h-72 w-72 rounded-full bg-sky-100/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 py-6 lg:px-10">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md shadow-xl shadow-black/30">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-lg shadow-black/20">
                <img src={touskiLogo} alt="Logo TOUSKI" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-200/65">Logo conservé</p>
                <p className="text-lg font-semibold tracking-[0.35em]">TOUSKI</p>
              </div>
            </div>
            <nav className="hidden gap-8 text-sm text-white/80 md:flex">
              <a href="#univers" className="hover:text-white">Univers</a>
              <a href="#categories" className="hover:text-white">Catégories</a>
              <a href="#selection" className="hover:text-white">Sélection</a>
              <a href="#vision" className="hover:text-white">Vision</a>
            </nav>
          </header>

          <div className="relative flex flex-1 items-center py-10 lg:py-16">
            <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div className="max-w-4xl">
                <div className="mb-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-100 backdrop-blur">
                  Tout ce qui est indispensable
                </div>
                <h1 className="text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl xl:text-[5.2rem]">
                  TOUSKI devient une marque premium pour la <span className="text-emerald-300">nature, la montagne, la sécurité et l'autonomie</span>.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-xl">
                  On garde la marque TOUSKI, mais on élargit l'univers avec une direction plus forte,
                  plus éditoriale et plus haut de gamme: maison essentielle, trekking, randonnée,
                  GPS haute montagne, drones de sécurité, alpinisme et objets fiables pour le terrain réel.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b1713] shadow-2xl shadow-white/20 transition hover:scale-[1.02]">
                    Explorer l'univers TOUSKI
                  </button>
                  <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                    Voir les catégories clés
                  </button>
                </div>

                <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur shadow-lg shadow-black/10">
                      <p className="text-2xl font-semibold text-emerald-300">{item.value}</p>
                      <p className="mt-1 text-sm text-white/68">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className={`max-w-xl rounded-[2rem] border border-white/12 ${slide.glass} p-7 backdrop-blur-xl shadow-2xl shadow-black/30`}>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-emerald-200/75">{slide.eyebrow}</p>
                  <p className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{slide.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/78">{slide.text}</p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <div className="rotate-[-4deg] rounded-2xl border border-white/12 bg-black/25 px-4 py-3 backdrop-blur-md shadow-lg shadow-black/20">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-200/75">{slide.tag1}</p>
                    <p className="mt-1 text-sm font-medium">Sélection robuste & utile</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-md shadow-lg shadow-black/20">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-200/75">{slide.tag2}</p>
                    <p className="mt-1 text-sm font-medium">Orientation & confiance</p>
                  </div>
                </div>

                <div className="w-full max-w-xl rounded-[1.9rem] border border-white/10 bg-black/25 p-5 backdrop-blur-md shadow-2xl shadow-black/30">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.32em] text-emerald-200/70">Nouvelle direction de marque</p>
                      <p className="mt-2 text-2xl font-semibold leading-tight">{slide.accent}</p>
                    </div>
                    <div className="flex gap-2">
                      {heroSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveSlide(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            activeSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/35"
                          }`}
                          aria-label={`Aller au slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {categories.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/82">
                        {item}
                      </span>
                    ))}
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
              <p className="text-[10px] uppercase tracking-[0.32em] text-emerald-200/70">Positionnement premium</p>
              <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="univers" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/60">Le nouvel univers TOUSKI</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Une marque d'indispensables, pas une simple boutique.</h2>
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
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/60">Architecture de catalogue</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Des niches cohérentes, visuellement fortes et premium.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              TOUSKI réunit plusieurs mondes sous une seule promesse: l'indispensable bien choisi.
              Cela élargit la marque sans la diluer et augmente le niveau perçu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Maison essentielle", "anti-froid, réparation pratique, entretien, accessoires utiles"],
              ["Trekking & randonnée", "sacs, lampes, filtration, orientation, accessoires durables"],
              ["GPS & localisation", "suivi, sécurité, haute montagne, expédition, autonomie"],
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
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/60">Sélection mise en avant</p>
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
                <p className="text-xs uppercase tracking-[0.26em] text-emerald-200/65">{item.tag}</p>
                <h3 className="mt-3 text-2xl font-semibold transition group-hover:translate-x-1">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.desc}</p>
                <button className="mt-6 rounded-full border border-white/12 px-4 py-2 text-sm text-white/88 transition hover:bg-white/10">
                  Voir la collection
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-2xl shadow-black/20 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/60">Vision de marque</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                TOUSKI doit donner envie, inspirer confiance et paraître prêt pour le terrain comme pour la maison.
              </h2>
            </div>
            <p className="text-base leading-8 text-white/68">
              Le ton quitte le rendu discount ou gadget. La marque monte vers un univers plus éditorial,
              plus haut de gamme, plus outdoor et plus aspirational, tout en gardant l'utilité réelle au centre.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
