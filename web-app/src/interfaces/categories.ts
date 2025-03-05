export interface Category {
  category: CategoryKeys;
  subCategories: Subcategory[];
}

export interface Subcategory {
  subcategory: SubcategoryKeys;
  types: TypeKeys[];
}

const tShirtSubcategory: Subcategory = {
  subcategory: 'tShirt',
  types: [
    'graphicTees',
    'poloTees',
    'tankTops',
    'shortSleeveTees',
    'longSleeveTees',
    'buttonUps',
    'croppedTees'
  ]
};

const jerseySubcategory: Subcategory = {
  subcategory: 'jersey',
  types: [
    'basketballJerseys',
    'footballJerseys',
    'baseballJerseys',
    'hockeyJerseys',
    'soccerJerseys',
    'rugbyJerseys'
  ]
};

const outerwearSubcategory: Subcategory = {
  subcategory: 'outerwear',
  types: [
    'hoodiesJackets',
    'sweatshirts',
    'coats',
    'vests',
    'pufferJackets',
    'bomberJackets',
    'windbreakers',
    'fur',
    'leather'
  ]
};

const topsCategory: Category = {
  category: 'tops',
  subCategories: [tShirtSubcategory, jerseySubcategory, outerwearSubcategory]
};

const shortsSubcategory: Subcategory = {
  subcategory: 'shorts',
  types: [
    'denimShorts',
    'athleticShorts',
    'regularShorts',
    'shortShorts',
    'cargoShorts'
  ]
};

const pantsSubcategory: Subcategory = {
  subcategory: 'pants',
  types: ['cargoPants', 'sweatpantsJoggers', 'trackPants']
};

const jeansSubcategory: Subcategory = {
  subcategory: 'jeans',
  types: [
    'baggyJeans',
    'flareJeans',
    'rippedJeans',
    'stackedJeans',
    'skinnyJeans'
  ]
};

const bottomsCategory: Category = {
  category: 'bottoms',
  subCategories: [shortsSubcategory, pantsSubcategory, jeansSubcategory]
};

const sneakersSubcategory: Subcategory = {
  subcategory: 'sneakers',
  types: [
    'lowTops',
    'midTops',
    'highTops',
    'runningShoes',
    'basketballShoes',
    'skateShoes',
    'designerSneakers'
  ]
};

const bootsSubcategory: Subcategory = {
  subcategory: 'boots',
  types: [
    'westernBoots',
    'bikerBoots',
    'chelseaBoots',
    'desertBoots',
    'combatBoots'
  ]
};

const slidesSlippersSubcategory: Subcategory = {
  subcategory: 'slides',
  types: ['slides', 'sandals', 'mules', 'clogs']
};

const shoesCategory: Category = {
  category: 'shoes',
  subCategories: [
    sneakersSubcategory,
    bootsSubcategory,
    slidesSlippersSubcategory
  ]
};

const hatsSubcategory: Subcategory = {
  subcategory: 'hats',
  types: [
    'fittedHats',
    'baseballHats',
    'snapbacks',
    'bucketHats',
    'truckerHats'
  ]
};

const headwearSubcategory: Subcategory = {
  subcategory: 'headwear',
  types: ['durags', 'beanies', 'skiMasks', 'knitted', 'bandanas', 'headbands']
};

const bagsSubcategory: Subcategory = {
  subcategory: 'bags',
  types: [
    'backpacks',
    'duffleBags',
    'travelBags',
    'toteBags',
    'fannyPacks',
    'drawstringBags'
  ]
};

const jewelrySubcategory: Subcategory = {
  subcategory: 'jewelry',
  types: [
    'chainsNecklaces',
    'pendants',
    'bracelets',
    'rings',
    'earrings',
    'beltChains'
  ]
};

const socksSubcategory: Subcategory = {
  subcategory: 'socks',
  types: ['noShowSocks', 'ankleSocks', 'crewSocks', 'highSocks']
};

const glassesSubcategory: Subcategory = {
  subcategory: 'glasses',
  types: ['sunglasses', 'eyeglasses']
};

const otherAccessoriesSubcategory: Subcategory = {
  subcategory: 'other',
  types: ['gloves', 'sleeves', 'belts']
};

const accessoriesCategory: Category = {
  category: 'accessories',
  subCategories: [
    hatsSubcategory,
    headwearSubcategory,
    bagsSubcategory,
    jewelrySubcategory,
    socksSubcategory,
    glassesSubcategory,
    otherAccessoriesSubcategory
  ]
};

export const categoryLabels = {
  tops: 'Tops',
  bottoms: 'Bottoms',
  shoes: 'Shoes',
  accessories: 'Accessories'
};

export type CategoryKeys = keyof typeof categoryLabels;

export const categories: Record<CategoryKeys, Category> = {
  tops: topsCategory,
  bottoms: bottomsCategory,
  shoes: shoesCategory,
  accessories: accessoriesCategory
};

export const subcategoryLabels = {
  tShirt: 'T-Shirt',
  jersey: 'Jersey',
  outerwear: 'Outerwear',
  shorts: 'Shorts',
  pants: 'Pants',
  jeans: 'Jeans',
  sneakers: 'Sneakers',
  boots: 'Boots',
  slides: 'Slides',
  hats: 'Hats',
  headwear: 'Headwear',
  bags: 'Bags',
  jewelry: 'Jewelry',
  socks: 'Socks',
  glasses: 'Glasses',
  other: 'Other'
};

export type SubcategoryKeys = keyof typeof subcategoryLabels;

export const subCategories: Record<SubcategoryKeys, Subcategory> = {
  tShirt: tShirtSubcategory,
  jersey: jerseySubcategory,
  outerwear: outerwearSubcategory,
  shorts: shortsSubcategory,
  pants: pantsSubcategory,
  jeans: jeansSubcategory,
  sneakers: sneakersSubcategory,
  boots: bootsSubcategory,
  slides: slidesSlippersSubcategory,
  hats: hatsSubcategory,
  headwear: headwearSubcategory,
  bags: bagsSubcategory,
  jewelry: jewelrySubcategory,
  socks: socksSubcategory,
  glasses: glassesSubcategory,
  other: otherAccessoriesSubcategory
};

export type TypeKeys = keyof typeof typeLabels;

export const typeLabels = {
  // T-Shirts
  graphicTees: 'Graphic Tees',
  poloTees: 'Polo Tees',
  tankTops: 'Tank Tops',
  shortSleeveTees: 'Short Sleeve Tees',
  longSleeveTees: 'Long Sleeve Tees',
  buttonUps: 'Button Ups',
  croppedTees: 'Cropped Tees',

  // Jerseys
  basketballJerseys: 'Basketball Jerseys',
  footballJerseys: 'Football Jerseys',
  baseballJerseys: 'Baseball Jerseys',
  hockeyJerseys: 'Hockey Jerseys',
  soccerJerseys: 'Soccer Jerseys',
  rugbyJerseys: 'Rugby Jerseys',

  // Outerwear
  hoodiesJackets: 'Hoodies & Jackets',
  sweatshirts: 'Sweatshirts',
  coats: 'Coats',
  vests: 'Vests',
  pufferJackets: 'Puffer Jackets',
  bomberJackets: 'Bomber Jackets',
  windbreakers: 'Windbreakers',
  fur: 'Fur',
  leather: 'Leather',

  // Shorts
  denimShorts: 'Denim Shorts',
  athleticShorts: 'Athletic Shorts',
  regularShorts: 'Regular Shorts',
  shortShorts: 'Short Shorts',
  cargoShorts: 'Cargo Shorts',

  // Pants
  cargoPants: 'Cargo Pants',
  sweatpantsJoggers: 'Sweatpants & Joggers',
  trackPants: 'Track Pants',

  // Jeans
  baggyJeans: 'Baggy Jeans',
  flareJeans: 'Flare Jeans',
  rippedJeans: 'Ripped Jeans',
  stackedJeans: 'Stacked Jeans',
  skinnyJeans: 'Skinny Jeans',

  // Sneakers
  lowTops: 'Low Tops',
  midTops: 'Mid Tops',
  highTops: 'High Tops',
  runningShoes: 'Running Shoes',
  basketballShoes: 'Basketball Shoes',
  skateShoes: 'Skate Shoes',
  designerSneakers: 'Designer Sneakers',

  // Boots
  westernBoots: 'Western Boots',
  bikerBoots: 'Biker Boots',
  chelseaBoots: 'Chelsea Boots',
  desertBoots: 'Desert Boots',
  combatBoots: 'Combat Boots',

  // Slides & Slippers
  slides: 'Slides',
  sandals: 'Sandals',
  mules: 'Mules',
  clogs: 'Clogs',

  // Hats
  fittedHats: 'Fitted Hats',
  baseballHats: 'Baseball Hats',
  snapbacks: 'Snapbacks',
  bucketHats: 'Bucket Hats',
  truckerHats: 'Trucker Hats',

  // Headwear
  durags: 'Durags',
  beanies: 'Beanies',
  skiMasks: 'Ski Masks',
  knitted: 'Knitted',
  bandanas: 'Bandanas',
  headbands: 'Headbands',

  // Bags
  backpacks: 'Backpacks',
  duffleBags: 'Duffle Bags',
  travelBags: 'Travel Bags',
  toteBags: 'Tote Bags',
  fannyPacks: 'Fanny Packs',
  drawstringBags: 'Drawstring Bags',

  // Jewelry
  chainsNecklaces: 'Chains & Necklaces',
  pendants: 'Pendants',
  bracelets: 'Bracelets',
  rings: 'Rings',
  earrings: 'Earrings',
  beltChains: 'Belt Chains',

  // Socks
  noShowSocks: 'No Show Socks',
  ankleSocks: 'Ankle Socks',
  crewSocks: 'Crew Socks',
  highSocks: 'High Socks',

  // Glasses
  sunglasses: 'Sunglasses',
  eyeglasses: 'Eyeglasses',

  // Other Accessories
  gloves: 'Gloves',
  sleeves: 'Sleeves',
  belts: 'Belts'
};
