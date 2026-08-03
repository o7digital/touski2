export const seoPages = {
  "/equipement-montagne-quebec-mont-iberville": {
    eyebrow: "Équipement montagne Québec Mont d'Iberville",
    title: "Équipement montagne Québec Mont d'Iberville",
    intro:
      "TOUSKI rassemble des essentiels pour préparer la montagne, les sorties exigeantes, les sentiers québécois et l'univers du Mont d'Iberville avec une approche pratique: sécurité, autonomie, orientation et matériel utile.",
    sections: [
      ["Matériel fiable pour le terrain", "Notre sélection met de l'avant l'équipement outdoor, les accessoires de randonnée, les vêtements techniques, les outils d'orientation et les indispensables de sécurité pour les conditions changeantes du Québec."],
      ["Mont d'Iberville et haute montagne", "Le Mont d'Iberville inspire une recherche d'équipement sérieux: GPS haute altitude, autonomie, protection, préparation météo, éclairage et solutions capables d'accompagner les sorties ambitieuses."],
      ["Maison, chalet et expédition", "TOUSKI relie aussi l'équipement de montagne aux besoins réels de la maison et du chalet: réparation, chaleur, organisation, énergie, surveillance et confort utile."],
    ],
    keywords: [
      "équipement montagne Québec Mont d'Iberville",
      "équipement outdoor Québec Mont d'Iberville",
      "équipement alpinisme Québec Mont d'Iberville",
      "vêtements techniques Québec Mont d'Iberville",
    ],
  },
  "/gps-haute-montagne-quebec-mont-iberville": {
    eyebrow: "GPS haute montagne Québec Mont d'Iberville",
    title: "GPS haute montagne Québec Mont d'Iberville",
    intro:
      "Pour les sentiers isolés, les sorties hors réseau et l'imaginaire haute montagne du Mont d'Iberville, TOUSKI met l'accent sur la localisation, l'orientation et la sécurité outdoor.",
    sections: [
      ["Orientation hors réseau", "Un GPS de randonnée, un traceur ou une balise peut compléter le téléphone quand la couverture cellulaire disparaît. L'objectif est de suivre un itinéraire, partager une position et garder une marge de sécurité."],
      ["Sécurité outdoor", "Les solutions de sécurité outdoor couvrent la préparation, la visibilité, l'autonomie énergétique, le repérage et les accessoires utiles quand la météo ou le terrain changent rapidement."],
      ["Préparation Mont d'Iberville", "Le mot-clé Mont d'Iberville permet de positionner TOUSKI sur des recherches de haute montagne, de GPS altitude, de trekking et d'alpinisme liées au Québec."],
    ],
    keywords: [
      "GPS haute montagne Québec Mont d'Iberville",
      "GPS randonnée Québec Mont d'Iberville",
      "sécurité outdoor Québec Mont d'Iberville",
      "autonomie outdoor Québec Mont d'Iberville",
    ],
  },
  "/trekking-randonnee-quebec-mont-iberville": {
    eyebrow: "Trekking randonnée Québec Mont d'Iberville",
    title: "Trekking et randonnée Québec Mont d'Iberville",
    intro:
      "TOUSKI aide à choisir du matériel de trekking, de randonnée et d'autonomie pour les sorties au Québec, les voyages nature, les chemins forestiers et les références haute montagne comme le Mont d'Iberville.",
    sections: [
      ["Randonnée au Québec", "Le bon matériel de randonnée doit rester simple, robuste et utile: sac, lampe, filtration, vêtements, accessoires de sécurité, entretien et outils pratiques."],
      ["Trekking et autonomie", "Pour un trek plus long, les priorités sont le poids, la durabilité, l'eau, l'énergie, la météo et la capacité à résoudre de petits problèmes sans dépendre du réseau."],
      ["Lien avec Mont d'Iberville", "Associer randonnée, trekking, Québec et Mont d'Iberville donne une page claire pour les recherches outdoor ambitieuses et les besoins d'équipement plus spécialisé."],
    ],
    keywords: [
      "trekking Québec Mont d'Iberville",
      "randonnée Québec Mont d'Iberville",
      "matériel trekking Québec Mont d'Iberville",
      "matériel randonnée Québec Mont d'Iberville",
    ],
  },
};

export const seoLandingPaths = Object.keys(seoPages);

export const getSeoLanding = (pathname) => seoPages[pathname] ?? null;
