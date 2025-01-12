export interface CategoryOption {
  label: string; // Display name, e.g., "Graphic Tees"
  value: string; // Internal value, e.g., "graphic_tees"
}

export interface Category {
  category: CategoryOption;
  subCategories: Subcategory[];
}

export interface Subcategory {
  subcategory: CategoryOption;
  types: CategoryOption[];
}

const tShirtSubcategory: Subcategory = {
  subcategory: { label: 'T-Shirts', value: 't_shirts' },
  types: [
    { label: 'Graphic Tees', value: 'graphic_tees' },
    { label: 'Polo Tees', value: 'polo_tees' },
    { label: 'Tank Tops', value: 'tank_tops' },
    { label: 'Short Sleeve Tees', value: 'short_sleeve_tees' },
    { label: 'Long Sleeve Tees', value: 'long_sleeve_tees' },
    { label: 'Button Ups', value: 'button_ups' },
    { label: 'Cropped Tees', value: 'cropped_tees' }
  ]
};

const jerseySubcategory: Subcategory = {
  subcategory: { label: 'Jerseys', value: 'jerseys' },
  types: [
    { label: 'Basketball', value: 'basketball_jerseys' },
    { label: 'Football', value: 'football_jerseys' },
    { label: 'Baseball', value: 'baseball_jerseys' },
    { label: 'Hockey', value: 'hockey_jerseys' },
    { label: 'Soccer', value: 'soccer_jerseys' },
    { label: 'Rugby', value: 'rugby_jerseys' }
  ]
};

const outerwearSubcategory: Subcategory = {
  subcategory: { label: 'Outerwear', value: 'outerwear' },
  types: [
    { label: 'Hoodies & Jackets', value: 'hoodies_jackets' },
    { label: 'Sweatshirts', value: 'sweatshirts' },
    { label: 'Coats', value: 'coats' },
    { label: 'Vests', value: 'vests' },
    { label: 'Puffer Jackets', value: 'puffer_jackets' },
    { label: 'Bomber Jackets', value: 'bomber_jackets' },
    { label: 'Windbreakers', value: 'windbreakers' },
    { label: 'Fur', value: 'fur' },
    { label: 'Leather', value: 'leather' }
  ]
};

const topsCategory: Category = {
  category: { label: 'Tops', value: 'tops' },
  subCategories: [tShirtSubcategory, jerseySubcategory, outerwearSubcategory]
};

const shortsSubcategory: Subcategory = {
  subcategory: { label: 'Shorts', value: 'shorts' },
  types: [
    { label: 'Denim Shorts', value: 'denim_shorts' },
    { label: 'Athletic Shorts', value: 'athletic_shorts' },
    { label: 'Regular Shorts', value: 'regular_shorts' },
    { label: 'Short Shorts', value: 'short_shorts' },
    { label: 'Cargo Shorts', value: 'cargo_shorts' }
  ]
};

const pantsSubcategory: Subcategory = {
  subcategory: { label: 'Pants', value: 'pants' },
  types: [
    { label: 'Cargo Pants', value: 'cargo_pants' },
    { label: 'Sweatpants & Joggers', value: 'sweatpants_joggers' },
    { label: 'Track Pants', value: 'track_pants' }
  ]
};

const jeansSubcategory: Subcategory = {
  subcategory: { label: 'Jeans', value: 'jeans' },
  types: [
    { label: 'Baggy Jeans', value: 'baggy_jeans' },
    { label: 'Flare Jeans', value: 'flare_jeans' },
    { label: 'Ripped Jeans', value: 'ripped_jeans' },
    { label: 'Stacked Jeans', value: 'stacked_jeans' },
    { label: 'Skinny Jeans', value: 'skinny_jeans' }
  ]
};

// Maybe pantsCategory?
const bottomsCategory: Category = {
  category: { label: 'Bottoms', value: 'bottoms' },
  subCategories: [shortsSubcategory, pantsSubcategory, jeansSubcategory]
};

const sneakersCategory: Subcategory = {
  subcategory: { label: 'Sneakers', value: 'sneakers' },
  types: [
    { label: 'Low Tops', value: 'low_tops' },
    { label: 'Mid Tops', value: 'mid_tops' },
    { label: 'High Tops', value: 'high_tops' }
  ]
};

const bootsCategory: Subcategory = {
  subcategory: { label: 'Boots', value: 'boots' },
  types: [
    { label: 'Western Boots', value: 'western_boots' },
    { label: 'Biker Boots', value: 'biker_boots' },
    { label: 'Chelsea Boots', value: 'chelsea_boots' },
    { label: 'Desert Boots', value: 'desert_boots' },
    { label: 'Combat Boots', value: 'combat_boots' }
  ]
};

const slidesSlippersCategory: Subcategory = {
  subcategory: { label: 'Slides & Slippers', value: 'slides_slippers' },
  types: [
    { label: 'Slides', value: 'slides' },
    { label: 'Sandals', value: 'sandals' },
    { label: 'Mules', value: 'mules' },
    { label: 'Clogs', value: 'clogs' }
  ]
};

const shoesCategory: Category = {
  category: { label: 'Shoes', value: 'shoes' },
  subCategories: [sneakersCategory, bootsCategory, slidesSlippersCategory]
};

const hatsSubcategory: Subcategory = {
  subcategory: { label: 'Hats', value: 'hats' },
  types: [
    { label: 'Fitted Hats', value: 'fitted_hats' },
    { label: 'Baseball Hats', value: 'baseball_hats' },
    { label: 'Snapbacks', value: 'snapbacks' },
    { label: 'Bucket Hats', value: 'bucket_hats' },
    { label: 'Trucker Hats', value: 'trucker_hats' }
  ]
};

const headwearSubcategory: Subcategory = {
  subcategory: { label: 'Headwear', value: 'headwear' },
  types: [
    { label: 'Durags', value: 'durags' },
    { label: 'Beanies', value: 'beanies' },
    { label: 'Ski Masks', value: 'ski_masks' },
    { label: 'Knitted', value: 'knitted' },
    { label: 'Bandanas', value: 'bandanas' },
    { label: 'Headbands', value: 'headbands' }
  ]
};

const bagsSubcategory: Subcategory = {
  subcategory: { label: 'Bags', value: 'bags' },
  types: [
    { label: 'Backpacks', value: 'backpacks' },
    { label: 'Duffle Bags', value: 'duffle_bags' },
    { label: 'Travel Bags', value: 'travel_bags' },
    { label: 'Tote Bags', value: 'tote_bags' },
    { label: 'Fanny Packs', value: 'fanny_packs' },
    { label: 'Drawstring Bags', value: 'drawstring_bags' }
  ]
};

const jewelrySubcategory: Subcategory = {
  subcategory: { label: 'Jewelry', value: 'jewelry' },
  types: [
    { label: 'Chains & Necklaces', value: 'chains_necklaces' },
    { label: 'Pendants', value: 'pendants' },
    { label: 'Bracelets', value: 'bracelets' },
    { label: 'Rings', value: 'rings' },
    { label: 'Earrings', value: 'earrings' },
    { label: 'Belt Chains', value: 'belt_chains' }
  ]
};
const socksSubcategory: Subcategory = {
  subcategory: { label: 'Socks', value: 'socks' },
  types: [
    { label: 'No Show Socks', value: 'no_show_socks' },
    { label: 'Ankle Socks', value: 'ankle_socks' },
    { label: 'Crew Socks', value: 'crew_socks' },
    { label: 'High Socks', value: 'high_socks' }
  ]
};

const glassesSubcategory: Subcategory = {
  subcategory: { label: 'Glasses', value: 'glasses' },
  types: [
    { label: 'Sunglasses', value: 'sunglasses' },
    { label: 'Eyeglasses', value: 'eyeglasses' }
  ]
};

const otherAccessoriesSubcategory: Subcategory = {
  subcategory: { label: 'Other', value: 'other' },
  types: [
    { label: 'Gloves', value: 'gloves' },
    { label: 'Sleeves', value: 'sleeves' },
    { label: 'Belts', value: 'belts' }
  ]
};

const accessoriesCategory: Category = {
  category: { label: 'Accessories', value: 'accessories' },
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

export const categories: Category[] = [
  topsCategory,
  bottomsCategory,
  shoesCategory,
  accessoriesCategory
];
