import { useEffect, useState } from "react";
import touskiLogo from "./assets/touski-logo.jpeg";

const heroSlides = [
  {
    image: "/slider/Gemini_Generated_Image_9sfdnd9sfdnd9sfd.png",
    fallback:
      "bg-[linear-gradient(180deg,#8ca58f_0%,#5b725f_20%,#24322a_52%,#0c1411_100%)]",
    mountainA: "bg-[#16221c]",
    mountainB: "bg-[#0a120f]",
  },
  {
    image: "/slider/Gemini_Generated_Image_g5vfyfg5vfyfg5vf.png",
    fallback:
      "bg-[linear-gradient(180deg,#b4bfc8_0%,#738693_20%,#303f48_52%,#0c1318_100%)]",
    mountainA: "bg-[#17222a]",
    mountainB: "bg-[#0c141a]",
  },
  {
    image: "/slider/Gemini_Generated_Image_846e9h846e9h846e.png",
    fallback:
      "bg-[linear-gradient(180deg,#c5a57a_0%,#886a4d_22%,#3c2f27_52%,#100d0c_100%)]",
    mountainA: "bg-[#241b16]",
    mountainB: "bg-[#110d0b]",
  },
  {
    image: "/slider/Gemini_Generated_Image_j97qjj97qjj97qjj.png",
    fallback:
      "bg-[linear-gradient(180deg,#b6b9ad_0%,#6a705f_24%,#2d3228_54%,#0f120f_100%)]",
    mountainA: "bg-[#1a1f18]",
    mountainB: "bg-[#0d100d]",
  },
];

const content = {
  fr: {
    nav: ["Univers", "Categories", "Selection", "Vision"],
    badge: "Tout ce qui est indispensable",
    h1: "TOUSKI equipe la haute montagne, le trekking et la securite outdoor.",
    intro: "Selection premium pour terrain reel: trekking, GPS, alpinisme, exploration et maison.",
    cta1: "Voir la selection montagne",
    cta2: "Explorer GPS et alpinisme",
    seo: [
      "equipement montagne Quebec Mauricie Quebec Saint Elie de Caxton",
      "trekking randonnee Quebec Mauricie Quebec Saint Elie de Caxton",
      "gps haute montagne Quebec Mauricie Quebec Saint Elie de Caxton",
      "alpinisme securite outdoor Quebec Mauricie Quebec Saint Elie de Caxton",
      "drones de securite Quebec Mauricie Quebec Saint Elie de Caxton",
      "essentiels maison chalet Quebec Mauricie Quebec Saint Elie de Caxton",
    ],
  },
  en: {
    nav: ["Universe", "Categories", "Selection", "Vision"],
    badge: "Everything that truly matters",
    h1: "TOUSKI equips high mountains, trekking, and outdoor safety.",
    intro: "Premium essentials for real terrain: trekking, GPS, mountaineering, exploration, and home.",
    cta1: "See mountain selection",
    cta2: "Explore GPS and mountaineering",
    seo: [
      "mountain equipment Quebec Mauricie Quebec Saint Elie de Caxton",
      "trekking hiking Quebec Mauricie Quebec Saint Elie de Caxton",
      "high altitude gps Quebec Mauricie Quebec Saint Elie de Caxton",
      "mountaineering outdoor safety Quebec Mauricie Quebec Saint Elie de Caxton",
      "security drones Quebec Mauricie Quebec Saint Elie de Caxton",
      "home essentials cabin Quebec Mauricie Quebec Saint Elie de Caxton",
    ],
  },
  es: {
    nav: ["Universo", "Categorias", "Seleccion", "Vision"],
    badge: "Todo lo que realmente importa",
    h1: "TOUSKI equipa alta montana, trekking y seguridad outdoor.",
    intro: "Esenciales premium para terreno real: trekking, GPS, alpinismo, exploracion y hogar.",
    cta1: "Ver seleccion de montana",
    cta2: "Explorar GPS y alpinismo",
    seo: [
      "equipamiento de montana Quebec Mauricie Quebec Saint Elie de Caxton",
      "trekking senderismo Quebec Mauricie Quebec Saint Elie de Caxton",
      "gps alta montana Quebec Mauricie Quebec Saint Elie de Caxton",
      "alpinismo seguridad outdoor Quebec Mauricie Quebec Saint Elie de Caxton",
      "drones de seguridad Quebec Mauricie Quebec Saint Elie de Caxton",
      "esenciales hogar cabana Quebec Mauricie Quebec Saint Elie de Caxton",
    ],
  },
  de: {
    nav: ["Universum", "Kategorien", "Auswahl", "Vision"],
    badge: "Alles, was wirklich wichtig ist",
    h1: "TOUSKI stattet Hochgebirge, Trekking und Outdoor-Sicherheit aus.",
    intro: "Premium-Essentials fur echtes Terrain: Trekking, GPS, Alpinismus, Exploration und Zuhause.",
    cta1: "Bergauswahl ansehen",
    cta2: "GPS und Alpinismus entdecken",
    seo: [
      "bergausrustung Quebec Mauricie Quebec Saint Elie de Caxton",
      "trekking wandern Quebec Mauricie Quebec Saint Elie de Caxton",
      "hochgebirge gps Quebec Mauricie Quebec Saint Elie de Caxton",
      "alpinismus outdoor sicherheit Quebec Mauricie Quebec Saint Elie de Caxton",
      "sicherheitsdrohnen Quebec Mauricie Quebec Saint Elie de Caxton",
      "haus essentials chalet Quebec Mauricie Quebec Saint Elie de Caxton",
    ],
  },
};

export default function App({ locale = "fr" }) {
  const t = content[locale] || content.fr;
  const [activeSlide, setActiveSlide] = useState(0);
  const langLinks = {
    fr: [{ href: "/en", label: "EN" }, { href: "/es", label: "ES" }, { href: "/de", label: "DE" }],
    en: [{ href: "/", label: "FR" }, { href: "/es", label: "ES" }, { href: "/de", label: "DE" }],
    es: [{ href: "/", label: "FR" }, { href: "/en", label: "EN" }, { href: "/de", label: "DE" }],
    de: [{ href: "/", label: "FR" }, { href: "/en", label: "EN" }, { href: "/es", label: "ES" }],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#08110d] text-white selection:bg-emerald-300/30">
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10">
        {heroSlides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-all duration-700 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className={`absolute inset-0 ${item.fallback}`} />
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,9,0.08)_0%,rgba(6,12,10,0.30)_50%,rgba(3,6,6,0.52)_100%)]" />
            <div className={`absolute inset-x-0 bottom-0 h-[32%] ${item.mountainA} opacity-60 [clip-path:polygon(0_60%,16%_46%,32%_57%,49%_35%,66%_52%,84%_37%,100%_55%,100%_100%,0_100%)]`} />
            <div className={`absolute inset-x-0 bottom-0 h-[20%] ${item.mountainB} opacity-65 [clip-path:polygon(0_72%,18%_56%,35%_66%,51%_49%,67%_60%,82%_44%,100%_58%,100%_100%,0_100%)]`} />
          </div>
        ))}

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 py-6 lg:px-10">
          <header className="relative flex items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-xl shadow-xl shadow-black/30">
            <div className="flex items-center pl-40">
              <div className="absolute -bottom-8 left-5 z-20 h-28 w-28 overflow-hidden rounded-[1.5rem] border border-white/25 bg-white p-1.5 shadow-2xl shadow-black/40">
                <img src={touskiLogo} alt="Logo TOUSKI" className="h-full w-full rounded-[1.2rem] object-cover" />
              </div>
              <p className="text-lg font-semibold tracking-[0.35em]">TOUSKI</p>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#univers">{t.nav[0]}</a><a href="#categories">{t.nav[1]}</a><a href="#selection">{t.nav[2]}</a><a href="#vision">{t.nav[3]}</a>
              {langLinks[locale].map((link) => <a key={link.label} href={link.href} className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-white/10">{link.label}</a>)}
            </nav>
          </header>

          <div className="relative flex flex-1 items-start py-12 pt-72 lg:py-20 lg:pt-[26rem]">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur">{t.badge}</div>
              <h1 className="text-4xl font-semibold leading-[0.96] tracking-tight sm:text-5xl md:text-6xl xl:text-[5.1rem]">{t.h1}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl">{t.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#selection" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b1713]">{t.cta1}</a>
                <a href="#categories" className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-medium text-white">{t.cta2}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070f0c]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <h2 className="text-2xl font-semibold">TOUSKI</h2>
          <p className="mt-4 max-w-4xl text-xs leading-7 text-white/60">{t.seo.join(" • ")}</p>
        </div>
      </footer>
    </div>
  );
}
