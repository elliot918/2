export interface Property {
  slug: string;
  name: string;
  location: string;
  type: "vente" | "location";
  surface: number;
  rooms: number;
  bedrooms?: number;
  land?: number;
  price: number;
  priceDisplay: string;
  imageUrl: string;
  images: string[];
  description: string;
  features: string[];
  category: "prestige" | "vacances";
}

function img(id: string, w = 1200, q = 85): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

// Primary cover images (one per property)
const COVER = {
  california:    "photo-1680287296835-0424869199ae",
  villasolea:    "photo-1690832307571-d78b5d346651",
  lephoenix:     "photo-1757264119016-7e6b568b810d",
  tahiti:        "photo-1728926533519-7d18177c177f",
  bayview:       "photo-1760681556931-52ee66c4d88f",
  belvedere:     "photo-1729881769765-c341bd1262a6",
  pinetrees:     "photo-1603033825246-53b4d1e5c509",
  californienne: "photo-1665575471924-f7356d8e85a6",
  tamaris:       "photo-1765999906700-2d4dfd392966",
  figuaniere:    "photo-1596178067639-5c6e68aea6dc",
} as const;

// Shared gallery pool — all distinct from any cover image above
const G = {
  // Pools / luxury exteriors
  poolInfinity:       "photo-1613490493576-4ca1f69cd85c", // Mediterranean infinity pool, lounge chairs
  mansionPool:        "photo-1512917774080-9991f1c4c750", // white mansion with pool
  modernVillaExt:     "photo-1580587771525-78b9dba3b914", // modern white villa exterior
  modernHousePool:    "photo-1600596542815-ffad4c1539a9", // sleek house with lit pool
  poolGarden:         "photo-1566073771259-6a8506099945", // garden pool with sun loungers
  poolLounge:         "photo-1574362848149-11496d93a7c7", // pool chairs & parasols
  villaPoolVeranda:   "photo-1757439402359-aed14d39fc1b", // luxury villa with pool (verified)
  modernHouseLounge:  "photo-1778205063665-23257f2dc408", // modern house, pool+lounge (verified)
  modernHouseGardens: "photo-1778910554261-837b19e25c26", // large modern house, manicured garden (verified)

  // Interiors
  livingWhite:        "photo-1600210492486-724fe5c67fb0", // all-white high-ceiling living room
  livingModern:       "photo-1560185007-cde436f6a4d0",   // contemporary sofa & art
  livingOceanView:    "photo-1772411650649-f88111bcb8a5", // living room, floor-to-ceiling sea view (verified)
  livingIndoorOut:    "photo-1778640331184-dc4c3e2608e1", // indoor/outdoor living room, pool beyond (verified)
  livingComfy:        "photo-1757262798623-a215e869d708", // warm sectional sofa with bar (verified)
  kitchenWhite:       "photo-1567767292278-a4f21aa2d36e", // white marble kitchen
  luxuryLounge:       "photo-1556020685-ae41abfc9365",   // tan velvet sofa, luxury décor
  outdoorDining:      "photo-1502005229762-cf1b2da7c5d6", // alfresco dining terrace
  houseGardenExt:     "photo-1564013799919-ab600027ffc6", // villa exterior with lush garden

  // Sea views & terraces
  terraceGreece:      "photo-1533105079780-92b9be482077", // whitewashed terrace, Aegean
  terraceBalconyMenu: "photo-1693098243367-93320637839e", // balcony breakfast table, sea (verified)
  balconyCoastal:     "photo-1769869173719-997e7be14a56", // balcony overlooking coastal town (verified)
  balconyPanoramic:   "photo-1772902362618-c45e3e804001", // tiered hotel balconies, Monaco (verified)
  patioDubrovnik:     "photo-1694350639569-6706d403a30d", // patio chairs, Adriatic view (verified)

  // Bedrooms
  bedroomClassic:     "photo-1522771739844-6a9f6a868ed8", // white luxury bedroom
  bedroomContempo:    "photo-1618221195710-dd6b41faaea6", // modern bedroom with statement art
  bedroomPoolView:    "photo-1616046229478-9901c5536a45", // bedroom opening to pool terrace
} as const;

export const properties: Property[] = [
  {
    slug: "california",
    name: "CALIFORNIA",
    location: "Gassin",
    type: "vente",
    surface: 500,
    rooms: 9,
    bedrooms: 6,
    land: 25000,
    price: 19950000,
    priceDisplay: "19 950 000 €",
    imageUrl: img(COVER.california, 1920),
    images: [
      img(G.poolInfinity),        // infinity pool, Mediterranean
      img(G.livingWhite),         // all-white living room
      img(G.terraceBalconyMenu),  // sea-view terrace
      img(G.poolGarden),          // pool & garden
      img(G.bedroomClassic),      // luxury bedroom
    ],
    description:
      "Propriété d'exception dominant le Golfe de Saint-Tropez, cette villa de 500 m² offre des panoramas à couper le souffle sur la mer et les vignes. Architecture contemporaine mêlant pierre locale et volumes généreux, dans un parc arboré de 2,5 hectares.",
    features: [
      "Piscine à débordement",
      "Vue mer panoramique",
      "Parc de 25 000 m²",
      "Dépendances",
      "Cave à vin",
      "Système domotique",
    ],
    category: "prestige",
  },
  {
    slug: "villa-solea",
    name: "Villa Soléa",
    location: "Ramatuelle",
    type: "vente",
    surface: 510,
    rooms: 10,
    price: 15900000,
    priceDisplay: "15 900 000 €",
    imageUrl: img(COVER.villasolea, 1920),
    images: [
      img(G.mansionPool),         // white mansion with pool
      img(G.livingModern),        // contemporary living room
      img(G.balconyCoastal),      // balcony overlooking sea
      img(G.outdoorDining),       // alfresco dining terrace
      img(G.bedroomContempo),     // modern bedroom
    ],
    description:
      "Nichée dans les hauteurs de Ramatuelle, cette villa somptueuse de 510 m² bénéficie d'une situation privilégiée à quelques minutes des plages de Pampelonne. Espaces de vie ouverts sur la terrasse et la piscine à débordement.",
    features: [
      "Vue mer",
      "Piscine à débordement",
      "10 pièces",
      "Terrasses panoramiques",
      "Jardin paysager",
      "Pool-house",
    ],
    category: "prestige",
  },
  {
    slug: "le-phoenix",
    name: "Le Phoenix",
    location: "Ramatuelle",
    type: "vente",
    surface: 350,
    rooms: 11,
    land: 10200,
    price: 9300000,
    priceDisplay: "9 300 000 €",
    imageUrl: img(COVER.lephoenix, 1920),
    images: [
      img(G.modernVillaExt),      // modern white villa exterior
      img(G.livingIndoorOut),     // indoor/outdoor living
      img(G.patioDubrovnik),      // patio with sea view
      img(G.modernHouseGardens),  // manicured garden
      img(G.kitchenWhite),        // white marble kitchen
    ],
    description:
      "Villa d'architecte de 350 m² implantée sur 1 hectare de terrain arboré avec vue dégagée sur le massif des Maures. Lignes épurées et matériaux nobles pour une propriété hors du commun.",
    features: [
      "Terrain 10 200 m²",
      "Vue massif des Maures",
      "Piscine",
      "11 pièces",
      "Garage",
      "Alarme",
    ],
    category: "prestige",
  },
  {
    slug: "tahiti",
    name: "TAHITI",
    location: "Ramatuelle",
    type: "vente",
    surface: 250,
    rooms: 7,
    land: 2935,
    price: 8700000,
    priceDisplay: "8 700 000 €",
    imageUrl: img(COVER.tahiti, 1920),
    images: [
      img(G.villaPoolVeranda),    // villa pool & veranda
      img(G.livingComfy),         // warm, comfy living room
      img(G.terraceGreece),       // whitewashed terrace, sea
      img(G.houseGardenExt),      // villa with lush garden
      img(G.bedroomPoolView),     // bedroom opening to pool
    ],
    description:
      "À deux pas de la mythique plage de Pampelonne, cette villa de charme de 250 m² jouit d'un emplacement rare à Ramatuelle. Esprit méditerranéen, jardin luxuriant et piscine chauffée.",
    features: [
      "Plage à 500m",
      "Piscine chauffée",
      "Terrain 2 935 m²",
      "7 pièces",
      "Terrasse sud",
      "Parking",
    ],
    category: "prestige",
  },
  {
    slug: "bay-view",
    name: "BAY VIEW",
    location: "Gassin",
    type: "vente",
    surface: 300,
    rooms: 7,
    land: 1651,
    price: 7200000,
    priceDisplay: "7 200 000 €",
    imageUrl: img(COVER.bayview, 1920),
    images: [
      img(G.modernHousePool),     // sleek house with pool at night
      img(G.livingOceanView),     // living room with sea panorama
      img(G.balconyPanoramic),    // tiered panoramic balconies
      img(G.poolLounge),          // pool chairs & parasols
    ],
    description:
      "Surplombant la baie de Saint-Tropez, cette villa contemporaine de 300 m² offre une vue époustouflante sur le Golfe. Volumes modernes, terrasses filantes et piscine à débordement.",
    features: [
      "Vue Golfe de Saint-Tropez",
      "Piscine à débordement",
      "7 pièces",
      "Terrain 1 651 m²",
      "Cuisine équipée haut de gamme",
      "Double garage",
    ],
    category: "prestige",
  },
  {
    slug: "belvedere",
    name: "BELVEDERE",
    location: "Gassin",
    type: "vente",
    surface: 350,
    rooms: 11,
    bedrooms: 7,
    price: 7000000,
    priceDisplay: "7 000 000 €",
    imageUrl: img(COVER.belvedere, 1920),
    images: [
      img(G.modernHouseLounge),   // pool + lounge chairs, modern house
      img(G.luxuryLounge),        // tan velvet sofa living room
      img(G.balconyCoastal),      // balcony overlooking coastal town
      img(G.bedroomContempo),     // contemporary bedroom
    ],
    description:
      "Du sommet du village médiéval de Gassin, ce belvédère offre un panorama 180° sur la presqu'île de Saint-Tropez. Villa de 350 m² en parfait état, décoration soignée et espaces extérieurs généreux.",
    features: [
      "Panorama 180°",
      "7 chambres",
      "11 pièces",
      "Piscine",
      "Terrasse panoramique",
      "Village médiéval à pied",
    ],
    category: "prestige",
  },
  {
    slug: "pine-trees",
    name: "PINE TREES",
    location: "Saint-Tropez",
    type: "vente",
    surface: 220,
    rooms: 7,
    bedrooms: 5,
    price: 5500000,
    priceDisplay: "5 500 000 €",
    imageUrl: img(COVER.pinetrees, 1920),
    images: [
      img(G.mansionPool),         // classic mansion with pool
      img(G.livingModern),        // contemporary living room
      img(G.terraceGreece),       // sea-view terrace
      img(G.poolGarden),          // pool in garden
      img(G.bedroomClassic),      // classic white bedroom
    ],
    description:
      "Élégante villa de 220 m² au cœur d'un quartier résidentiel prisé de Saint-Tropez, à proximité immédiate du port et des plages. Architecture tropézienne authentique sublimée par une rénovation contemporaine.",
    features: [
      "À 5 min du port",
      "5 chambres",
      "Piscine",
      "7 pièces",
      "Jardin privatif",
      "Climatisation",
    ],
    category: "prestige",
  },
  {
    slug: "californienne",
    name: "Californienne",
    location: "Gassin",
    type: "location",
    surface: 500,
    rooms: 7,
    price: 50000,
    priceDisplay: "À partir de 50 000 €/sem.",
    imageUrl: img(COVER.californienne, 1920),
    images: [
      img(G.poolInfinity),        // infinity pool Mediterranean
      img(G.livingWhite),         // all-white living room
      img(G.terraceBalconyMenu),  // sea-view breakfast terrace
      img(G.modernHouseGardens),  // manicured garden
      img(G.bedroomPoolView),     // bedroom opening to pool
    ],
    description:
      "Villa de luxe de 500 m² dominant le Golfe, idéale pour des vacances d'exception. Piscine à débordement, nombreuses terrasses et prestations cinq étoiles dans un cadre incomparable.",
    features: [
      "500 m²",
      "7 pièces",
      "Piscine à débordement",
      "Vue mer",
      "Service conciergerie",
      "Climatisation",
    ],
    category: "vacances",
  },
  {
    slug: "tamaris",
    name: "TAMARIS",
    location: "Saint-Tropez",
    type: "location",
    surface: 520,
    rooms: 12,
    bedrooms: 9,
    price: 0,
    priceDisplay: "Prix sur demande",
    imageUrl: img(COVER.tamaris, 1920),
    images: [
      img(G.modernVillaExt),      // modern villa exterior
      img(G.livingIndoorOut),     // indoor/outdoor living
      img(G.patioDubrovnik),      // sea-view patio
      img(G.poolLounge),          // pool lounge chairs
      img(G.bedroomContempo),     // contemporary bedroom
    ],
    description:
      "Demeure d'exception de 520 m² dans l'un des quartiers les plus exclusifs de Saint-Tropez. 9 chambres, piscine, court de tennis et parc pour accueillir famille et amis dans un luxe absolu.",
    features: [
      "520 m²",
      "9 chambres",
      "Piscine",
      "Court de tennis",
      "Parc arboré",
      "Chef privé sur demande",
    ],
    category: "vacances",
  },
  {
    slug: "figuaniere",
    name: "FIGUANIERE",
    location: "Ramatuelle",
    type: "location",
    surface: 440,
    rooms: 8,
    bedrooms: 6,
    price: 0,
    priceDisplay: "Prix sur demande",
    imageUrl: img(COVER.figuaniere, 1920),
    images: [
      img(G.modernHouseLounge),   // pool + lounge, modern house
      img(G.livingComfy),         // warm living room
      img(G.balconyPanoramic),    // panoramic balconies
      img(G.outdoorDining),       // alfresco dining
      img(G.kitchenWhite),        // white kitchen
    ],
    description:
      "Nichée dans la pinède de la Figuanière, cette villa de 440 m² alliant charme provençal et modernité est idéalement située à 10 minutes des plages de Pampelonne.",
    features: [
      "440 m²",
      "6 chambres",
      "Piscine",
      "Jacuzzi",
      "Salle de sport",
      "Proche Pampelonne",
    ],
    category: "vacances",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export const venteProperties: Property[] = properties.filter(
  (p) => p.type === "vente"
);

export const locationProperties: Property[] = properties.filter(
  (p) => p.type === "location"
);

export const allProperties: Property[] = properties;
