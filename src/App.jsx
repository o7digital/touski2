import { useEffect, useState } from "react";
import touskiLogo from "./assets/touski-logo.jpeg";

const heroSlides = [
  {
    eyebrow: "Trekking & nature",
    title: "Terrain, altitude et liberté de mouvement.",
    text: "Slide prévu pour photo trekking/randonnée en plein écran.",
    accent: "Trekking • Randonnée • Nature",
    image: "/slider/Gemini_Generated_Image_9sfdnd9sfdnd9sfd.webp",
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
    title: "GPS haute montagne et autonomie réelle.",
    text: "Slide prévu pour photo GPS/alpinisme en conditions extrêmes.",
    accent: "GPS • Sécurité • Autonomie • Altitude",
    image: "/slider/Gemini_Generated_Image_g5vfyfg5vfyfg5vf.webp",
    fallback:
      "bg-[linear-gradient(180deg,#b4bfc8_0%,#738693_20%,#303f48_52%,#0c1318_100%)]",
    mountainA: "bg-[#17222a]",
    mountainB: "bg-[#0c141a]",
    glass: "bg-black/25",
    tag1: "GPS haute montagne",
    tag2: "Orientation & confiance",
  },
  {
    eyebrow: "Alpinisme & équipement",
    title: "Vêtements techniques et protection de haute montagne.",
    text: "Slide prévu pour photo vêtements techniques/alpinisme.",
    accent: "Alpinisme • Vêtements • Sécurité",
    image: "/slider/Gemini_Generated_Image_846e9h846e9h846e.webp",
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
    text: "Slide prévu pour photo exploration/sécurité outdoor.",
    accent: "Exploration • Mission • Sécurité",
    image: "/slider/Gemini_Generated_Image_j97qjj97qjj97qjj.webp",
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
    number: "01",
    title: "Trekking & expédition",
    text: "Équipement utile pour partir plus loin, plus léger, plus sûr.",
  },
  {
    number: "02",
    title: "GPS & haute montagne",
    text: "Solutions de localisation, orientation et sécurité pour terrains exigeants.",
  },
  {
    number: "03",
    title: "Drones de sécurité",
    text: "Vision, repérage et surveillance outdoor pour missions, chalet et nature.",
  },
  {
    number: "04",
    title: "Maison essentielle",
    text: "Les indispensables solides et intelligents pour la vie quotidienne.",
  },
];

const featured = [
  {
    name: "Traceur GPS Altitude Pro",
    tag: "Sécurité montagne",
    desc: "Pour randonnée engagée, alpinisme, trekking et repérage hors réseau.",
    image: "/slider/Gemini_Generated_Image_g5vfyfg5vfyfg5vf.webp",
  },
  {
    name: "Drone Sentinel Alpine",
    tag: "Vision & assistance",
    desc: "Repérage visuel, sécurité de parcours, surveillance nature et propriété isolée.",
    image: "/slider/Gemini_Generated_Image_j97qjj97qjj97qjj.webp",
  },
  {
    name: "Kit Chalet & Maison Indispensable",
    tag: "Essentiels robustes",
    desc: "Produits pratiques, durables et bien choisis pour la maison et la vie réelle.",
    image: "/slider/Gemini_Generated_Image_846e9h846e9h846e.webp",
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

const fieldNotes = [
  { label: "Guide terrain", title: "Préparer une sortie sans réseau", text: "Avant une randonnée, un trek ou une sortie en haute montagne, TOUSKI aide à penser autonomie, météo, orientation, éclairage, eau et sécurité." },
  { label: "Choisir juste", title: "GPS, balise ou téléphone?", text: "Un téléphone suffit sur certains sentiers, mais un GPS de randonnée, une balise ou un traceur devient utile quand le réseau disparaît ou que l'itinéraire se complique." },
  { label: "Vie au chalet", title: "L'autonomie sans superflu", text: "Au chalet ou dans une maison isolée, les bons essentiels couvrent l'énergie, l'éclairage, les réparations, la chaleur, l'eau et les imprévus." },
];

const buyingGuides = [
  {
    title: "Équipement de trekking et randonnée au Québec",
    text: "Pour marcher longtemps sans se surcharger, la priorité reste l'équilibre entre poids, durabilité et vraie utilité. TOUSKI met de l'avant sacs, lampes, filtration, accessoires d'orientation, vêtements techniques et petits outils qui rendent une sortie plus simple, plus sûre et plus confortable.",
  },
  {
    title: "GPS haute montagne, orientation et sécurité outdoor",
    text: "En montagne, sur des chemins forestiers ou près d'un chalet isolé, la localisation ne doit pas dépendre uniquement du téléphone. Les solutions GPS, traceurs, balises et accessoires de sécurité aident à préparer un itinéraire, suivre une progression, rassurer les proches et réagir si les conditions changent.",
  },
  {
    title: "Drones outdoor, repérage et surveillance de terrain",
    text: "Un drone bien choisi peut servir à observer un accès, inspecter une propriété, repérer un passage, documenter une sortie ou surveiller un environnement difficile d'accès. TOUSKI positionne ces outils comme des aides pratiques pour la sécurité, l'exploration et la vie en zone isolée.",
  },
  {
    title: "Essentiels maison, chalet et autonomie quotidienne",
    text: "Le site ne se limite pas à la montagne: il couvre aussi les indispensables pour la maison, le chalet et la vie réelle. L'objectif est de réunir des produits solides, compréhensibles et utiles pour le froid, l'entretien, les urgences, le confort, l'organisation et les petits problèmes du quotidien.",
  },
];

const faqItems = [
  {
    question: "Que vend TOUSKI?",
    answer: "TOUSKI sélectionne des essentiels pour la montagne, le trekking, la randonnée, le GPS haute altitude, la sécurité outdoor, les drones, le chalet et la maison.",
  },
  {
    question: "TOUSKI est-il basé au Québec?",
    answer: "Oui. La marque est associée au Québec et à Saint-Élie-de-Caxton, avec une sélection pensée pour les saisons, les distances et les réalités du territoire canadien.",
  },
  {
    question: "Pourquoi choisir du matériel outdoor spécialisé?",
    answer: "Un bon équipement réduit l'improvisation: il améliore l'orientation, l'autonomie, le confort et la sécurité quand le réseau, la météo ou le terrain deviennent moins prévisibles.",
  },
  {
    question: "Les produits conviennent-ils aussi pour le chalet et la maison?",
    answer: "Oui. TOUSKI réunit aussi des produits pratiques pour l'éclairage, la chaleur, l'entretien, les réparations, l'organisation et les imprévus à la maison ou au chalet.",
  },
];

const localSeoGroups = [
  "équipement montagne Québec",
  "équipement outdoor Québec",
  "matériel trekking Mauricie",
  "trekking Québec",
  "randonnée Québec",
  "matériel randonnée Mauricie",
  "GPS randonnée Québec",
  "GPS haute montagne",
  "GPS haute altitude",
  "sécurité outdoor Saint-Élie-de-Caxton",
  "drones de sécurité outdoor",
  "drone surveillance chalet",
  "équipement alpinisme",
  "autonomie outdoor",
  "équipement chalet Québec",
  "essentiels maison et chalet Canada",
];


export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <p className="text-lg font-semibold tracking-[0.35em]">TOUSKI</p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#univers" className="hover:text-white">Univers</a>
              <a href="#categories" className="hover:text-white">Catégories</a>
              <a href="#selection" className="hover:text-white">Sélection</a>
              <a href="#vision" className="hover:text-white">Vision</a>
              <a href="/contact" className="hover:text-white">Contact</a>
              <a
                href="/en"
                className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-white/10"
                aria-label="Passer en anglais"
              >
                EN
              </a>
              <a
                href="/de"
                className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-white/10"
                aria-label="Passer en allemand"
              >
                DE
              </a>
            </nav>
            <button
              type="button"
              className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white md:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Ouvrir le menu"
            >
              MENU
            </button>
          </header>
          {mobileMenuOpen && (
            <nav className="mt-3 rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur md:hidden">
              <div className="flex flex-col gap-3 text-sm text-white/85">
                <a href="#univers" onClick={() => setMobileMenuOpen(false)}>Univers</a>
                <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Catégories</a>
                <a href="#selection" onClick={() => setMobileMenuOpen(false)}>Sélection</a>
                <a href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <div className="mt-1 flex gap-2">
                  <a href="/en" className="rounded-full border border-white/30 px-3 py-1 text-xs">EN</a>
                  <a href="/es" className="rounded-full border border-white/30 px-3 py-1 text-xs">ES</a>
                  <a href="/de" className="rounded-full border border-white/30 px-3 py-1 text-xs">DE</a>
                </div>
              </div>
            </nav>
          )}

          <div className="relative flex flex-1 items-start py-12 pt-72 lg:py-20 lg:pt-[26rem]">
            <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-4xl">
                <div className="mb-6 inline-flex rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur">
                  Tout ce qui est indispensable
                </div>
                <h1 className="text-4xl font-semibold leading-[0.96] tracking-tight sm:text-5xl md:text-6xl xl:text-[5.1rem]">
                  TOUSKI équipe la <span className="text-orange-200">haute montagne</span>, le <span className="text-emerald-200">trekking</span> et la <span className="text-sky-200">sécurité outdoor</span>.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
                  Du matériel fiable, choisi pour les conditions réelles du Québec. Moins de gadgets,
                  plus d'autonomie, de sécurité et de liberté — du sentier jusqu'au chalet.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#selection" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b1713] shadow-2xl shadow-white/20 transition hover:scale-[1.02]">
                    Voir la sélection montagne
                  </a>
                  <a href="#categories" className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                    Explorer GPS & alpinisme
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
                        aria-label={`Aller au slide ${index + 1}`}
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
              <p className="text-[10px] uppercase tracking-[0.32em] text-amber-200/80">Pensé pour durer</p>
              <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="univers" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">Le nouvel univers TOUSKI</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Une marque d'indispensables, pas une simple boutique.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/68">
            Notre filtre est simple: chaque objet doit résoudre un vrai problème, résister à son usage
            et mériter sa place dans votre sac, votre véhicule ou votre maison.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <article key={item.title} className="rounded-[1.85rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="mb-8 flex items-center justify-between"><span className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">Univers</span><span className="text-3xl font-light text-white/20">{item.number}</span></div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="categories" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/75">Architecture de catalogue</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Ce qu'il faut, là où ça compte.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              De l'orientation à la protection, notre sélection couvre les moments où la fiabilité
              n'est pas une option. Chaque catégorie reste lisible, pratique et sans remplissage.
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
            <p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">Sélection mise en avant</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Notre sélection pour aller plus loin.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/68">
            Trois points de départ pour mieux s'orienter, observer et rester autonome.
            Des solutions cohérentes, expliquées sans jargon inutile.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1">
              <div className="relative h-72 overflow-hidden">
                <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.28))]" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-amber-200/80">{item.tag}</p>
                <h3 className="mt-3 text-2xl font-semibold transition group-hover:translate-x-1">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.desc}</p>
                <a href="#categories" className="mt-6 inline-block rounded-full border border-white/12 px-4 py-2 text-sm text-white/88 transition hover:bg-white/10">
                  Voir la collection
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#e7dfcf] text-[#132018]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#566d5d]">Le standard TOUSKI</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Choisi pour le terrain. Pas pour remplir une étagère.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#132018]/15 sm:grid-cols-2">
            {[['Utile par nature','Une fonction claire et une vraie valeur dans les situations du quotidien.'],['Fiable dehors','Des matériaux et une autonomie adaptés aux conditions changeantes.'],['Simple à comprendre','Des conseils directs pour choisir sans devenir expert en équipement.'],['Pensé ici','Une sélection sensible aux distances, aux saisons et au territoire québécois.']].map(([title, text]) => (
              <article key={title} className="bg-[#f2ecdf] p-7"><p className="text-xs uppercase tracking-[0.25em] text-[#6d806f]">Notre engagement</p><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#445248]">{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10 max-w-3xl"><p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">Carnets de terrain</p><h2 className="mt-3 text-3xl font-semibold md:text-5xl">Mieux choisir commence par mieux comprendre.</h2></div>
        <div className="grid gap-5 md:grid-cols-3">{fieldNotes.map((note, index) => <article key={note.title} className="group flex min-h-80 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"><div><span className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">{note.label}</span><h3 className="mt-5 text-2xl font-semibold leading-tight">{note.title}</h3><p className="mt-4 leading-7 text-white/65">{note.text}</p></div><div className="flex items-end justify-between"><span className="text-sm text-white/75">Lire bientôt</span><span className="text-5xl font-light text-white/10">0{index + 1}</span></div></article>)}</div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/75">Guides d'achat outdoor</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Du contenu utile pour trouver le bon équipement.</h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              Une page SEO forte doit expliquer les usages, pas seulement nommer des catégories.
              Ces guides donnent aux moteurs de recherche et aux clients un contexte clair sur la montagne,
              le trekking, le GPS, la sécurité outdoor, le chalet et les essentiels de maison.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {buyingGuides.map((guide) => (
              <article key={guide.title} className="rounded-[1.7rem] border border-white/10 bg-[#0c1714] p-7 shadow-xl shadow-black/15">
                <h3 className="text-2xl font-semibold">{guide.title}</h3>
                <p className="mt-4 leading-8 text-white/68">{guide.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-200/75">Questions fréquentes</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Réponses rapides avant d'acheter.</h2>
          </div>
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-white/68">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-2xl shadow-black/20 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-200/80">Vision de marque</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                Dehors, les détails comptent. Nous choisissons ceux qui font la différence.
              </h2>
            </div>
            <p className="text-base leading-8 text-white/68">
              TOUSKI est né à Saint-Élie-de-Caxton avec une conviction: le bon équipement doit rassurer
              avant le départ, se faire oublier pendant l'effort et répondre présent quand les conditions changent.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050a08]">
        <div className="border-b border-white/10"><div className="mx-auto grid max-w-7xl gap-5 px-6 py-9 sm:grid-cols-3 lg:px-10">{[["↗","Livraison rapide et gratuite","Partout au Canada dès 140 $ CAD"],["◎","Support client","Une équipe disponible pour vous guider"],["◇","Satisfait ou remboursé","Retours simples sous 30 jours"]].map(([icon,title,text]) => <div key={title} className="flex gap-4"><span className="text-2xl text-orange-200">{icon}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-white/55">{text}</p></div></div>)}</div></div>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.4fr] lg:px-10">
          <div><p className="text-xl font-semibold tracking-[0.35em]">TOUSKI</p><p className="mt-5 max-w-xs text-sm leading-7 text-white/60">Indispensables maison introuvables au Canada, choisis au Québec pour les réalités d'ici.</p><a className="mt-5 block text-sm text-white/80 hover:text-white" href="mailto:contact@touski.online">contact@touski.online</a><a className="mt-2 block text-sm text-white/70 hover:text-white" href="tel:+18197010378">+1 819-701-0378</a><p className="mt-3 text-sm leading-6 text-white/50">1030, Avenue Muguette, Saint-Élie-de-Caxton QC G0X 2N0, Canada</p></div>
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Compagnie</h3><nav className="mt-6 flex flex-col gap-4 text-sm text-white/70"><a href="#vision" className="hover:text-white">À propos</a><a href="mailto:contact@touski.online" className="hover:text-white">Contact</a><a href="#mentions-legales" className="hover:text-white">Mentions légales</a></nav></div>
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Service client</h3><div className="mt-6 flex flex-col gap-4 text-sm leading-6 text-white/70"><p>Support client disponible 24h/24 et 7j/7.</p><p>Livraison standard Canada: 3 à 7 jours ouvrables.</p><p>Gratuite dès 140 $ CAD. Sous 140 $ CAD, les frais sont calculés automatiquement selon la province.</p><p>Commandes préparées du lundi au vendredi sous 24 à 48 h. Numéro de suivi envoyé par courriel dès l'expédition.</p><p>Retours acceptés sous 30 jours pour les produits non utilisés, dans leur état d'origine.</p></div></div>
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Infolettre</h3><p className="mt-6 text-sm leading-7 text-white/60">Soyez le premier à recevoir les dernières nouvelles sur les tendances, promotions et bien plus encore !</p><form className="mt-5 flex" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="newsletter-email">Votre adresse courriel</label><input id="newsletter-email" type="email" required placeholder="Votre adresse courriel" className="min-w-0 flex-1 rounded-l-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/35"/><button className="rounded-r-xl bg-orange-300 px-5 text-sm font-semibold text-[#172019] hover:bg-orange-200">S'inscrire</button></form><h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Paiements sécurisés</h3><div className="mt-3 flex flex-wrap gap-2">{["DISCOVER","●●","PayPal","AMEX","VISA"].map(name => <span key={name} className="rounded bg-white px-2 py-1 text-[9px] font-bold text-[#142019]">{name}</span>)}</div></div>
        </div>
        <div id="mentions-legales" className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold">Mentions légales et confidentialité</h2>
            <div className="mt-4 grid gap-5 text-sm leading-7 text-white/62 md:grid-cols-2">
              <p>Nom commercial: TOUSKI. Site web: touski.online. Hébergement: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
              <p>Les données collectées peuvent inclure nom, prénom, adresse email, adresse postale et numéro de téléphone. Elles sont utilisées pour traiter les commandes et contacter les clients au sujet des services.</p>
              <p>Conformément aux lois canadiennes sur la protection des renseignements personnels, notamment la LPRPDE, vous pouvez demander l'accès, la rectification ou la suppression de vos données à contact@touski.online.</p>
              <p>Les prix sont affichés en dollars canadiens. Paiements acceptés: cartes de crédit, Visa, Mastercard, American Express et PayPal. Dernière mise à jour: novembre 2025.</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold">TOUSKI au Québec, en Mauricie et à Saint-Élie-de-Caxton</h2>
            <p className="mt-4 max-w-5xl text-sm leading-7 text-white/62">
              TOUSKI aide les clients à trouver de l'équipement de montagne, du matériel de trekking et randonnée,
              des solutions GPS haute altitude, des drones de sécurité outdoor, de l'équipement d'alpinisme
              et des essentiels pour la maison ou le chalet au Québec et au Canada.
            </p>
            <p className="mt-4 max-w-5xl text-sm leading-7 text-white/62">
              Recherches associées: {localSeoGroups.join(" • ")}.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between lg:px-10"><p>© {new Date().getFullYear()} TOUSKI — Indispensables maison introuvables au Canada</p><div className="flex flex-wrap items-center gap-5"><a href="#mentions-legales" className="hover:text-white">Confidentialité</a><select aria-label="Langue" defaultValue="fr" className="rounded-lg border border-white/15 bg-[#0b1410] px-3 py-2 text-white/65"><option value="fr">Canada | Français</option><option value="en">Canada | English</option><option value="de">Canada | Deutsch</option><option value="es">Canada | Español</option></select><span>créé par <span className="text-orange-200">o7Digital</span></span></div></div>
          <p className="mx-auto max-w-7xl px-6 pb-7 text-center text-[11px] leading-7 text-white/35 lg:px-10">
            {localSeoGroups.join(" · ")}
          </p>
        </div>
      </footer>

    </div>
  );
}
