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

/** Build a real Les Barrys CDN URL */
function p(folder: string, hash: string, ext = "jpg"): string {
  return `https://barry.staticlbi.com/1600xauto/images/biens/1/${folder}/photo_${hash}.${ext}`;
}

export const properties: Property[] = [

  // ── VENTE ────────────────────────────────────────────────────────────────

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
    imageUrl: p("efea9c4ded7403ad446868428dd18c05", "b44d35a1f5adc447dada7d094aa8502e"),
    images: [
      p("efea9c4ded7403ad446868428dd18c05", "b44d35a1f5adc447dada7d094aa8502e"),
      p("efea9c4ded7403ad446868428dd18c05", "681b9dc9b4cb1d4b56b60e13c1a929dc", "png"),
      p("efea9c4ded7403ad446868428dd18c05", "b8dd7792b151ecbba97b61e4925cf400", "png"),
      p("efea9c4ded7403ad446868428dd18c05", "104ffc30c5bb06b30773a43c4476873d", "png"),
      p("efea9c4ded7403ad446868428dd18c05", "65e9a7886adb3d696feba1d87198403d"),
      p("efea9c4ded7403ad446868428dd18c05", "2a432f7d3e268d95345e94fa34288f8c"),
      p("efea9c4ded7403ad446868428dd18c05", "13390bac3ba065b92205f8c124f62f78"),
      p("efea9c4ded7403ad446868428dd18c05", "09faf959cc6a1568cf9fd6a952518319"),
      p("efea9c4ded7403ad446868428dd18c05", "d64b072cfebb66af2505a00f2759c13c"),
      p("efea9c4ded7403ad446868428dd18c05", "f75493dac64f9a9d0f0ed2151021effb"),
    ],
    description:
      "Villa de prestige sur la commune de Gassin dominant le Golfe de Saint-Tropez avec des vues panoramiques sur la mer. Construction neuve 2025, cette propriété de 500 m² propose un double salon TV, salle à manger lumineuse, cuisine équipée, second salon bar, 5 chambres et une suite parentale avec dressing sur-mesure et salle de bain d'exception vue mer. Appartement invité indépendant, salle de sport privée, sauna, salle de massage, piscine chauffée vue mer.",
    features: [
      "Piscine chauffée vue mer",
      "Suite parentale & dressing",
      "Appartement invité indépendant",
      "Salle de sport · Sauna · Massage",
      "Vue panoramique sur le Golfe",
      "Construction neuve 2025",
      "Parc de 2,5 hectares",
      "Garage",
    ],
    category: "prestige",
  },

  {
    slug: "le-phoenix",
    name: "LE PHOENIX",
    location: "Ramatuelle",
    type: "vente",
    surface: 350,
    rooms: 11,
    bedrooms: 7,
    land: 10200,
    price: 9300000,
    priceDisplay: "9 300 000 €",
    imageUrl: p("f55506af5d97aeac398ec9f30903a083", "8006b907f8ab9bbd6319e5c74584a4c5"),
    images: [
      p("f55506af5d97aeac398ec9f30903a083", "8006b907f8ab9bbd6319e5c74584a4c5"),
      p("f55506af5d97aeac398ec9f30903a083", "9e8579424418e6726da67e419c244f03"),
      p("f55506af5d97aeac398ec9f30903a083", "5a8428cc459e71fdabbb546fa73405b8"),
      p("f55506af5d97aeac398ec9f30903a083", "50a070d846977850ab85f5d7183f5d84"),
      p("f55506af5d97aeac398ec9f30903a083", "379f17440ed1788c3d4dabf2501a088c"),
      p("f55506af5d97aeac398ec9f30903a083", "e6ef28f03876064bfdc960e5c39a326e"),
      p("f55506af5d97aeac398ec9f30903a083", "09d9c19ec8701f0eff01f4b3c21531b1"),
      p("f55506af5d97aeac398ec9f30903a083", "619514ae7bccc58d947dfdd6e7853734"),
      p("f55506af5d97aeac398ec9f30903a083", "21d2a6554bcc2f67f5e3851d90f26af0"),
      p("f55506af5d97aeac398ec9f30903a083", "be3b0fde494787c2bf14a267979db0f5"),
      p("f55506af5d97aeac398ec9f30903a083", "d740b2b5ee3f4beb1ef857ee0b442cd8"),
      p("f55506af5d97aeac398ec9f30903a083", "473aebc5485d29344401bc07a7d62c86"),
    ],
    description:
      "Propriété d'exception à Ramatuelle dans un environnement idyllique et un secteur prisé, à proximité des plages de Pampelonne. Cette villa de plain-pied de plus de 350 m² déploie un salon sud ouvert sur de grandes terrasses donnant sur la pinède, 7 suites, deux piscines dont une pour enfants, une végétation diversifiée et une annexe personnel. Vues dégagées sur la mer et la campagne.",
    features: [
      "2 piscines (dont enfants)",
      "7 suites",
      "Terrain 10 200 m²",
      "Vue mer & campagne",
      "Annexe personnel",
      "Climatisation réversible",
      "Volets électriques · Portail auto",
      "Garage + carport",
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
    bedrooms: 5,
    land: 2935,
    price: 8700000,
    priceDisplay: "8 700 000 €",
    imageUrl: p("61587ad2d65d9e05d767f10146b0adea", "dcc9b546ce3a5958a9acf62ef6854d9d"),
    images: [
      p("61587ad2d65d9e05d767f10146b0adea", "dcc9b546ce3a5958a9acf62ef6854d9d"),
      p("61587ad2d65d9e05d767f10146b0adea", "51df4a0d21abfc728936665123abbbf2"),
      p("61587ad2d65d9e05d767f10146b0adea", "e9f1b272eb4475782d703bb1a0294cbd"),
      p("61587ad2d65d9e05d767f10146b0adea", "2115f48d5b2f6e18576e34f6201d9033"),
      p("61587ad2d65d9e05d767f10146b0adea", "c923c13ddbd9a67b43989dca36e1ec05"),
      p("61587ad2d65d9e05d767f10146b0adea", "aa0c4eb5ffb37e3452863693657a9276"),
      p("61587ad2d65d9e05d767f10146b0adea", "f77870acf49f0fe073aedb3cc3814e40"),
      p("61587ad2d65d9e05d767f10146b0adea", "d2fdb2e53cc6d7c31ba02796280493cf"),
      p("61587ad2d65d9e05d767f10146b0adea", "3000bd31169a30d1968ff72a78bae954"),
      p("61587ad2d65d9e05d767f10146b0adea", "ba728871fa04980dbc86fa38a5db5dd6"),
      p("61587ad2d65d9e05d767f10146b0adea", "6604f7c22931441896f3b942939a6d9d"),
      p("61587ad2d65d9e05d767f10146b0adea", "bcea57334d67d2d400c0a056856e90ba"),
      p("61587ad2d65d9e05d767f10146b0adea", "bb15514d482c6cea6bc6cb7abdf7f4b8"),
      p("61587ad2d65d9e05d767f10146b0adea", "ff658197c4ae476971d41defe1919322"),
    ],
    description:
      "Villa idéalement située à proximité immédiate de la plage de Pampelonne, secteur Tahiti Beach. En deuxième ligne, cette propriété se déploie sur un terrain plat de près de 3 000 m². Elle comprend cinq suites dont une suite parentale avec vue mer partielle à l'étage, et présente un potentiel d'extension. L'accès à la plage à pied en quelques minutes en fait une rare opportunité.",
    features: [
      "Secteur Tahiti Beach",
      "Deuxième ligne plage",
      "5 suites",
      "Terrain plat 2 935 m²",
      "Vue mer partielle",
      "Potentiel d'extension",
    ],
    category: "prestige",
  },

  {
    slug: "ange",
    name: "ANGE",
    location: "Gassin",
    type: "vente",
    surface: 240,
    rooms: 6,
    bedrooms: 5,
    land: 1170,
    price: 0,
    priceDisplay: "Prix sur demande",
    imageUrl: p("dd54dda252a2070fcf7ea86f84943354", "675d2a8ee369d5368b44a9b1b6924d05"),
    images: [
      p("dd54dda252a2070fcf7ea86f84943354", "675d2a8ee369d5368b44a9b1b6924d05"),
      p("dd54dda252a2070fcf7ea86f84943354", "7ce11a37e18da75aa1a267c5a6711522"),
      p("dd54dda252a2070fcf7ea86f84943354", "76b00074f58b0bb96728b3ecbfe2c087"),
      p("dd54dda252a2070fcf7ea86f84943354", "330336c907f90d97911b165cce1d5528"),
      p("dd54dda252a2070fcf7ea86f84943354", "7e875fa90f8de37796d37a7f69131805"),
      p("dd54dda252a2070fcf7ea86f84943354", "8e962f692a2093334b27af9192e9a921"),
      p("dd54dda252a2070fcf7ea86f84943354", "5a64ddb694a0b9da4b01ae9458bfee54"),
      p("dd54dda252a2070fcf7ea86f84943354", "8c2c2ed75dedebb01a86664370b0b1dc"),
      p("dd54dda252a2070fcf7ea86f84943354", "bfb0b3d228e52a58122b41b29c3e8d54"),
      p("dd54dda252a2070fcf7ea86f84943354", "53fde3a5286a022ec8dbef8e92167510"),
      p("dd54dda252a2070fcf7ea86f84943354", "7c2c324031c0d31ee64330e4e4b60476"),
      p("dd54dda252a2070fcf7ea86f84943354", "1cdfc4415669ddbc6b5d9e7577a3220b"),
      p("dd54dda252a2070fcf7ea86f84943354", "08efbce0ab0ae9a7e366d4646cfec27b"),
      p("dd54dda252a2070fcf7ea86f84943354", "b0268cff0ca558906bb1fb5166968d9d"),
      p("dd54dda252a2070fcf7ea86f84943354", "c64b8e36750177fd6c0a23292d6210b6"),
      p("dd54dda252a2070fcf7ea86f84943354", "f8155de233dee3955a15c2661d9268a8"),
    ],
    description:
      "Située dans un quartier prisé et résidentiel de Gassin, cette villa au charme indéniable accueille par un vaste hall d'entrée. La vue mer est omniprésente depuis la suite parentale avec terrasse privative jusqu'aux quatre chambres supplémentaires. Piscine chauffée, salle de massage et sauna indépendants, espaces de vie soignés — une propriété d'exception aux prestations cinq étoiles.",
    features: [
      "Vue mer depuis toutes les chambres",
      "Piscine chauffée",
      "Suite parentale avec terrasse",
      "Salle de massage & sauna indép.",
      "Cuisine américaine équipée",
      "Climatisation · Cheminée · Alarme",
      "Portail auto · Interphone vidéo",
      "3 parkings",
    ],
    category: "prestige",
  },

  {
    slug: "del-mare",
    name: "DEL MARE",
    location: "Saint-Tropez",
    type: "vente",
    surface: 160,
    rooms: 7,
    bedrooms: 5,
    land: 1208,
    price: 5480000,
    priceDisplay: "5 480 000 €",
    imageUrl: p("799f7575439552fea311e41dedac7fbb", "bec5bcbe624952f1f60c47700425004e"),
    images: [
      p("799f7575439552fea311e41dedac7fbb", "bec5bcbe624952f1f60c47700425004e"),
      p("799f7575439552fea311e41dedac7fbb", "0035e3fc6215249bb49d623426994ca3"),
      p("799f7575439552fea311e41dedac7fbb", "311a3735127de9768804fc497ca84258"),
      p("799f7575439552fea311e41dedac7fbb", "cda63ba7a3423433c3c70b89155fd36c"),
      p("799f7575439552fea311e41dedac7fbb", "d1cda14320b33ad7e7a011087f7dd4c0"),
      p("799f7575439552fea311e41dedac7fbb", "7541a0ffe189ebe8f14af3364c036c30"),
    ],
    description:
      "Propriété rare à quelques pas de la plage des Salins, dans une impasse calme au sein d'un domaine sécurisé des Canoubiers à Saint-Tropez. Le permis de construire en cours d'instruction prévoit la création d'une belle villa provençale contemporaine d'environ 350 m² avec piscine — une opportunité unique d'investissement dans l'un des quartiers les plus recherchés.",
    features: [
      "À pied plage des Salins",
      "Domaine sécurisé",
      "Projet villa ~350 m² avec PC",
      "Piscine (projet)",
      "Terrain 1 208 m²",
      "Quartier des Canoubiers",
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
    land: 2400,
    price: 5500000,
    priceDisplay: "5 500 000 €",
    imageUrl: p("7e864b7b5d2d812301e3ed6e20103740", "60146005530c34d86b15bcde5347ee76"),
    images: [
      p("7e864b7b5d2d812301e3ed6e20103740", "60146005530c34d86b15bcde5347ee76"),
      p("7e864b7b5d2d812301e3ed6e20103740", "36e4b7ec81f94b02965e5a6b06a8096d"),
      p("7e864b7b5d2d812301e3ed6e20103740", "b567194ea2137d7f415aedd15b4802e6"),
    ],
    description:
      "Située au bout d'une impasse récemment rénovée, au cœur d'une pinède, cette villa de plus de 220 m² se trouve à moins de 10 minutes à pied de la plage des Canebiers à Saint-Tropez. Cinq chambres en suite, un vaste salon lumineux avec cheminée, terrain plat de 2 400 m² et piscine 10 × 5 m dans un cadre de verdure préservé.",
    features: [
      "5 chambres en suite",
      "À 10 min plage des Canebiers",
      "Piscine 10 × 5 m",
      "Terrain plat 2 400 m²",
      "Salon avec cheminée",
      "Portail auto · Alarme",
      "Climatisation · WiFi",
    ],
    category: "prestige",
  },

  // ── LOCATION ─────────────────────────────────────────────────────────────

  {
    slug: "californienne",
    name: "CALIFORNIENNE",
    location: "Gassin",
    type: "location",
    surface: 500,
    rooms: 9,
    bedrooms: 6,
    land: 25000,
    price: 0,
    priceDisplay: "Prix sur demande",
    imageUrl: p("76fd570c62202ef2f5ccd5e1d43e0829", "b44d35a1f5adc447dada7d094aa8502e"),
    images: [
      p("76fd570c62202ef2f5ccd5e1d43e0829", "b44d35a1f5adc447dada7d094aa8502e"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "681b9dc9b4cb1d4b56b60e13c1a929dc", "png"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "b8dd7792b151ecbba97b61e4925cf400", "png"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "104ffc30c5bb06b30773a43c4476873d", "png"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "65e9a7886adb3d696feba1d87198403d"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "2a432f7d3e268d95345e94fa34288f8c"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "13390bac3ba065b92205f8c124f62f78"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "09faf959cc6a1568cf9fd6a952518319"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "d64b072cfebb66af2505a00f2759c13c"),
      p("76fd570c62202ef2f5ccd5e1d43e0829", "f75493dac64f9a9d0f0ed2151021effb"),
    ],
    description:
      "Nichée dans un domaine privé de Gassin, à quelques minutes de Saint-Tropez et des plages de Pampelonne, cette villa neuve 2025 de 500 m² offre des vues panoramiques spectaculaires sur le Golfe. Double salon, salle à manger, cuisine équipée, salon bar, 5 chambres et suite parentale vue mer, appartement indépendant, salle de sport, sauna, massage, piscine chauffée.",
    features: [
      "500 m² · 6 chambres",
      "Piscine chauffée vue mer",
      "Suite parentale avec vue mer",
      "Salle de sport · Sauna · Massage",
      "Appartement invité indépendant",
      "Service conciergerie",
      "Parc de 2,5 hectares",
      "Garage",
    ],
    category: "vacances",
  },

  {
    slug: "may-flower",
    name: "MAY FLOWER",
    location: "Gassin",
    type: "location",
    surface: 400,
    rooms: 12,
    bedrooms: 8,
    land: 3800,
    price: 0,
    priceDisplay: "Prix sur demande",
    imageUrl: p("40fd4d39d0e47481464a7480dc3ff614", "07bc49b2ad2d968e371607aaced8e5b6"),
    images: [
      p("40fd4d39d0e47481464a7480dc3ff614", "07bc49b2ad2d968e371607aaced8e5b6"),
      p("40fd4d39d0e47481464a7480dc3ff614", "5067980f5283708e07ed38a6ca4c96f5"),
      p("40fd4d39d0e47481464a7480dc3ff614", "a8e5ce0d79ac46ee2d7aa309ff9c8d69"),
      p("40fd4d39d0e47481464a7480dc3ff614", "d1740fd5d619e722d96c4c596c4166b2"),
      p("40fd4d39d0e47481464a7480dc3ff614", "d17bb0257e4fdf6804bec8fb43a6b65e"),
      p("40fd4d39d0e47481464a7480dc3ff614", "8fd8af9fc8db6eb4b3ef43c55c2cb588"),
      p("40fd4d39d0e47481464a7480dc3ff614", "ca14135bb45e70795fb7ed6b4d948d1f"),
      p("40fd4d39d0e47481464a7480dc3ff614", "25046d2da9dbceecb5183650be0a1b93"),
      p("40fd4d39d0e47481464a7480dc3ff614", "7bb0f02936b04d72e280b6b08b0e6cec"),
      p("40fd4d39d0e47481464a7480dc3ff614", "aca92f0bfb79d61233b017d25c23cd57"),
      p("40fd4d39d0e47481464a7480dc3ff614", "e6388efc84407f0a67afe391275c20c1"),
      p("40fd4d39d0e47481464a7480dc3ff614", "763b4c42b8d552a63cf7e1f5cb5031e6"),
    ],
    description:
      "Villa pieds dans l'eau à l'entrée de Saint-Tropez avec accès direct à une plage privée et vues panoramiques sur le village. De plain-pied, 8 chambres en suite, cuisine professionnelle, salle de sport, hammam, piscine chauffée 16 × 8 m avec nage à contre-courant. Pool house avec barbecue. Services inclus : ménage 4h/jour, linge 2×/semaine, sécurité nocturne, gardien 24h/24, paddleboard, kayak, vélos.",
    features: [
      "Accès plage privée",
      "8 chambres en suite",
      "Piscine chauffée 16 × 8 m",
      "Salle de sport · Hammam",
      "Pool house & barbecue",
      "Ménage & linge inclus",
      "Sécurité & gardien 24h/24",
      "Paddleboard · Kayak · Vélos",
    ],
    category: "vacances",
  },

  {
    slug: "calimer",
    name: "CALIMER",
    location: "Gassin",
    type: "location",
    surface: 200,
    rooms: 5,
    bedrooms: 4,
    land: 4000,
    price: 18000,
    priceDisplay: "À partir de 18 000 €/sem.",
    imageUrl: p("c30fb4dc55d801fc7473840b5b161dfa", "bac858c70df016f87d1c86a67eabafcc"),
    images: [
      p("c30fb4dc55d801fc7473840b5b161dfa", "bac858c70df016f87d1c86a67eabafcc"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "d62c9637b99b359bc12723eee051164f"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "4b6f0ac7aa9e7c5eec7a5149729ff203"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "99101f89eb0989e30184e81d8a9a290d"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "c743fc01a3d7705d87efc4916e847fe8"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "3cdeadeb2e5bf84de6ea9c1808dc4d37"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "a94c8e818bbeb12732f32b4b0f7cca4a"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "6bd523c55bb2131278edbd07bc027f1d"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "f91dce8c8995b5be918a4b6da2e2e9df"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "e2b9d003f3468301e09c07b418c7ea2e"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "7e4d5ac80e6521b4d98dd081468a41ef"),
      p("c30fb4dc55d801fc7473840b5b161dfa", "f970cfc877891aa57e0867dbd9565797"),
    ],
    description:
      "Superbe villa à louer à Gassin, au calme et sans vis-à-vis, à proximité du village de Saint-Tropez et des plages de Pampelonne. Style provençal et contemporain harmonieusement mêlés. Piscine chauffée à l'eau salée 14 × 6 m, 4 chambres en suite avec TV LED, dressing et climatisation, salon avec cheminée, cuisine américaine équipée.",
    features: [
      "Piscine chauffée eau salée 14 × 6 m",
      "4 chambres en suite",
      "Salon avec cheminée",
      "Cuisine américaine équipée",
      "Sans vis-à-vis · Au calme",
      "Exposition sud",
      "WiFi · Climatisation",
      "6 parkings",
    ],
    category: "vacances",
  },

  {
    slug: "golf",
    name: "GOLF",
    location: "Gassin",
    type: "location",
    surface: 160,
    rooms: 4,
    bedrooms: 3,
    price: 0,
    priceDisplay: "Prix sur demande",
    imageUrl: p("15923bc998a4d093ba1eddd741d4f0ac", "ccfb29287d79b21c0102c765dbf408af"),
    images: [
      p("15923bc998a4d093ba1eddd741d4f0ac", "ccfb29287d79b21c0102c765dbf408af"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "2ab08f40f5b65856b7472eea77c5b3ec"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "78c980cb7e98b67c4f1abe760250c819"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "dc6438e245a858b690793831c10c37df"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "c7a69d7e7db35761267a99cf70a7bb13"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "3f2d385a4f79db30af493498738b3eab"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "18b3805949ad3673d222d7160443d18c"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "9d507ce99e0ea1651c26f44ba3a57f73"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "178b773215804bd8910472ed5cac34a3"),
      p("15923bc998a4d093ba1eddd741d4f0ac", "bee6cdf10f0c35d23d5b4fb4da86b678"),
    ],
    description:
      "Superbe villa de 160 m² à louer sur le domaine du Golf de Gassin, à deux pas de Saint-Tropez. Cette villa F4 de plain-pied propose 3 chambres avec salle de bains, cuisine américaine équipée, double vitrage, terrasses et jardins privatifs avec exposition ouest sur les collines.",
    features: [
      "Sur le domaine du Golf de Gassin",
      "3 chambres",
      "Cuisine américaine équipée",
      "Terrasses & jardins privatifs",
      "Exposition ouest · Collines",
      "3 parkings",
      "Double vitrage",
      "De plain-pied",
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
