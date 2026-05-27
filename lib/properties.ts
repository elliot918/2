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

function buildImageUrl(id: string, w: number, h?: number, q = 85): string {
  const base = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}`;
  return h ? `${base}&h=${h}&q=${q}` : `${base}&q=${q}`;
}

function buildImages(id: string): string[] {
  return [
    buildImageUrl(id, 1200, 800),
    buildImageUrl(id, 800, 600),
    buildImageUrl(id, 1920, 1080),
  ];
}

const PHOTO_IDS = {
  california: "photo-1680287296835-0424869199ae",
  villasolea: "photo-1690832307571-d78b5d346651",
  lephoenix: "photo-1757264119016-7e6b568b810d",
  tahiti: "photo-1728926533519-7d18177c177f",
  bayview: "photo-1760681556931-52ee66c4d88f",
  belvedere: "photo-1729881769765-c341bd1262a6",
  pinetrees: "photo-1603033825246-53b4d1e5c509",
  californienne: "photo-1665575471924-f7356d8e85a6",
  tamaris: "photo-1765999906700-2d4dfd392966",
  figuaniere: "photo-1596178067639-5c6e68aea6dc",
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
    imageUrl: buildImageUrl(PHOTO_IDS.california, 1920, undefined),
    images: buildImages(PHOTO_IDS.california),
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
    imageUrl: buildImageUrl(PHOTO_IDS.villasolea, 1920, undefined),
    images: buildImages(PHOTO_IDS.villasolea),
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
    imageUrl: buildImageUrl(PHOTO_IDS.lephoenix, 1920, undefined),
    images: buildImages(PHOTO_IDS.lephoenix),
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
    imageUrl: buildImageUrl(PHOTO_IDS.tahiti, 1920, undefined),
    images: buildImages(PHOTO_IDS.tahiti),
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
    imageUrl: buildImageUrl(PHOTO_IDS.bayview, 1920, undefined),
    images: buildImages(PHOTO_IDS.bayview),
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
    imageUrl: buildImageUrl(PHOTO_IDS.belvedere, 1920, undefined),
    images: buildImages(PHOTO_IDS.belvedere),
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
    imageUrl: buildImageUrl(PHOTO_IDS.pinetrees, 1920, undefined),
    images: buildImages(PHOTO_IDS.pinetrees),
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
    imageUrl: buildImageUrl(PHOTO_IDS.californienne, 1920, undefined),
    images: buildImages(PHOTO_IDS.californienne),
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
    imageUrl: buildImageUrl(PHOTO_IDS.tamaris, 1920, undefined),
    images: buildImages(PHOTO_IDS.tamaris),
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
    imageUrl: buildImageUrl(PHOTO_IDS.figuaniere, 1920, undefined),
    images: buildImages(PHOTO_IDS.figuaniere),
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
