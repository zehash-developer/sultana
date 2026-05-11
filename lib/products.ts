export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  gallery: string[];
  benefits: string[];
  howToUse: string[];
};

export const products: Product[] = [
  {
    slug: "beldi-black-soap",
    name: "Beldi Black Soap",
    tagline: "Steam-softened paste for deep, gentle purification.",
    description:
      "Authentic Moroccan beldi soap, rich in olive oil and eucalyptus, crafted for the hammam ritual. It softens the skin under steam and prepares it for exfoliation without stripping.",
    price: "From $28",
    image: "/images/Moroccan-black-soap.jpg",
    gallery: [
      "/images/Moroccan-black-soap.jpg",
      "/images/authentic-black-soap-img-article.webp",
      "/images/moroccan-bath-model-1.jpeg",
    ],
    benefits: [
      "Melts into skin under steam for a sensorial cleanse",
      "Prepares skin for kessa exfoliation",
      "Olive oil base helps maintain comfortable moisture",
    ],
    howToUse: [
      "Apply to damp skin after 5–10 minutes in steam.",
      "Massage gently, then exfoliate with a kessa glove.",
      "Rinse thoroughly and follow with argan oil or lotion.",
    ],
  },
  {
    slug: "cold-pressed-argan-oil",
    name: "Cold-Pressed Argan Oil",
    tagline: "Silky finishing oil for face, body, and hair ends.",
    description:
      "Lightweight, nutrient-dense argan oil—your post-hammam seal. Use sparingly to soften dry areas and add a natural glow without a heavy feel.",
    price: "From $42",
    image: "/images/Does-argan-oil-grow-hair.jpg",
    gallery: [
      "/images/Does-argan-oil-grow-hair.jpg",
      "/images/Argan-Oil-Gillette-UK_1630938333.jpg",
      "/images/images.jpeg",
    ],
    benefits: [
      "Fast-absorbing for daily use",
      "Ideal after exfoliation to comfort the skin barrier",
      "Multi-use for skin and dry hair ends (demo labels only)",
    ],
    howToUse: [
      "Apply 2–4 drops to palms, press onto face or body.",
      "Smooth through ends of hair when damp.",
      "Store away from direct heat; patch test before first use.",
    ],
  },
  {
    slug: "volcanic-ghassoul",
    name: "Volcanic Ghassoul",
    tagline: "Mineral-rich clay paste for hair and body.",
    description:
      "Fine Atlas ghassoul mixed to a creamy mask—perfect for a weekly reset. Rinses clean, leaving skin and hair feeling fresh and light.",
    price: "From $22",
    image: "/images/morrocan-bath-2.jpeg",
    gallery: [
      "/images/morrocan-bath-2.jpeg",
      "/images/moroccan-bath-Jumeirah-Village-Triangle.jpg",
    ],
    benefits: [
      "Versatile mask for scalp, lengths, or body",
      "Helps lift excess oil without harsh surfactants",
      "Pairs beautifully with steam sessions",
    ],
    howToUse: [
      "Blend clay with rose or orange blossom water to a spreadable cream.",
      "Apply, relax 8–12 minutes, then rinse with lukewarm water.",
      "Follow with argan oil on dry areas if needed.",
    ],
  },
  {
    slug: "silk-kessa-glove",
    name: "Silk Kessa Glove",
    tagline: "Traditional texture for visible exfoliation.",
    description:
      "A classic hammam accessory—firm yet forgiving weave to lift dull cells after beldi soap and steam. Demo site copy; treat skin gently.",
    price: "From $16",
    image:
      "/images/rn-image_picker_lib_temp_aa6a150b-b084-44d5-91ce-1dd96aec3b99_530x@2x.webp",
    gallery: [
      "/images/rn-image_picker_lib_temp_aa6a150b-b084-44d5-91ce-1dd96aec3b99_530x@2x.webp",
      "/images/istockphoto-136246319-612x612.jpg",
    ],
    benefits: [
      "Designed for weekly hammam exfoliation",
      "Pairs with beldi soap under steam",
      "Rinse and air-dry after each use",
    ],
    howToUse: [
      "After beldi has softened skin, glide kessa with light pressure.",
      "Use long, even strokes—avoid irritated or broken skin.",
      "Moisturize generously afterward.",
    ],
  },
  {
    slug: "hammam-atlas-mist",
    name: "Hammam Atlas Mist",
    tagline: "Aromatic veil inspired by rose and neroli steam.",
    description:
      "A room and linen mist for setting the mood—evokes tiled hammams and cooling mint tea. For ambiance; not a therapeutic claim.",
    price: "From $34",
    image: "/images/moroccan-hammam.webp",
    gallery: [
      "/images/moroccan-hammam.webp",
      "/images/sport-city-Moroccan-bath-1.jpg",
      "/images/360_F_1133533000_WoiW6pE3gk6Rfc1rdBEYWHVmYMNgPmMN.jpg",
    ],
    benefits: [
      "Instant atmosphere for baths and quiet evenings",
      "Layer-friendly with unscented body care",
      "Travel-friendly glass-style demo presentation",
    ],
    howToUse: [
      "Mist from arm’s length onto linens or air.",
      "Avoid eyes and polished stone if slippery.",
      "Shake gently before use (conceptual demo).",
    ],
  },
  {
    slug: "nila-radiance-clay",
    name: "Nila Radiance Clay",
    tagline: "Ceremonial blue-toned clay for brightening baths.",
    description:
      "Finely milled clay inspired by Moroccan nila traditions. Blend a small amount into masks or bath soaks for a spa-like ritual at home.",
    price: "From $26",
    image:
      "/images/360_F_1308813333_iQHuhT57vczISv6tNNcrCinIctpe6Bov.jpg",
    gallery: [
      "/images/360_F_1308813333_iQHuhT57vczISv6tNNcrCinIctpe6Bov.jpg",
      "/images/360_F_1133533000_WoiW6pE3gk6Rfc1rdBEYWHVmYMNgPmMN.jpg",
    ],
    benefits: [
      "Customizable strength when mixed with hydrosols",
      "Complements weekly exfoliation routines",
      "A little goes a long way",
    ],
    howToUse: [
      "Patch test on inner arm 24 hours before broader use.",
      "Mix to a smooth paste; do not let mask fully dry on skin.",
      "Rinse well and apply moisturizer.",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
