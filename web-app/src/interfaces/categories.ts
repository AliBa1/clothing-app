import { LabelValue } from './other';
import { TypesKey } from './typesEnum';

export interface Category {
  category: LabelValue;
  subCategories: Subcategory[];
}

export interface Subcategory {
  subcategory: LabelValue;
  // types: LabelValue[];
  types: Partial<Record<TypesKey, LabelValue>>;
}

const tShirtSubcategory: Subcategory = {
  subcategory: { label: 'T-Shirts', value: 't_shirts' },
  types: {
    [TypesKey.GraphicTees]: { label: 'Graphic Tees', value: TypesKey.GraphicTees },
    [TypesKey.PoloTees]: { label: 'Polo Tees', value: TypesKey.PoloTees },
    [TypesKey.TankTops]: { label: 'Tank Tops', value: TypesKey.TankTops },
    [TypesKey.ShortSleeveTees]: { label: 'Short Sleeve Tees', value: TypesKey.ShortSleeveTees },
    [TypesKey.LongSleeveTees]: { label: 'Long Sleeve Tees', value: TypesKey.LongSleeveTees },
    [TypesKey.ButtonUps]: { label: 'Button Ups', value: TypesKey.ButtonUps },
    [TypesKey.CroppedTees]: { label: 'Cropped Tees', value: TypesKey.CroppedTees }
  }
};

const jerseySubcategory: Subcategory = {
  subcategory: { label: 'Jerseys', value: 'jerseys' },
  types: {
    [TypesKey.BasketballJerseys]: { label: 'Basketball', value: TypesKey.BasketballJerseys },
    [TypesKey.FootballJerseys]: { label: 'Football', value: TypesKey.FootballJerseys },
    [TypesKey.BaseballJerseys]: { label: 'Baseball', value: TypesKey.BaseballJerseys },
    [TypesKey.HockeyJerseys]: { label: 'Hockey', value: TypesKey.HockeyJerseys },
    [TypesKey.SoccerJerseys]: { label: 'Soccer', value: TypesKey.SoccerJerseys },
    [TypesKey.RugbyJerseys]: { label: 'Rugby', value: TypesKey.RugbyJerseys }
  }
};

const outerwearSubcategory: Subcategory = {
  subcategory: { label: 'Outerwear', value: 'outerwear' },
  types: {
    [TypesKey.HoodiesJackets]: { label: 'Hoodies & Jackets', value: TypesKey.HoodiesJackets },
    [TypesKey.Sweatshirts]: { label: 'Sweatshirts', value: TypesKey.Sweatshirts },
    [TypesKey.Coats]: { label: 'Coats', value: TypesKey.Coats },
    [TypesKey.Vests]: { label: 'Vests', value: TypesKey.Vests },
    [TypesKey.PufferJackets]: { label: 'Puffer Jackets', value: TypesKey.PufferJackets },
    [TypesKey.BomberJackets]: { label: 'Bomber Jackets', value: TypesKey.BomberJackets },
    [TypesKey.Windbreakers]: { label: 'Windbreakers', value: TypesKey.Windbreakers },
    [TypesKey.Fur]: { label: 'Fur', value: TypesKey.Fur },
    [TypesKey.Leather]: { label: 'Leather', value: TypesKey.Leather }
  }
};

const topsCategory: Category = {
  category: { label: 'Tops', value: 'tops' },
  subCategories: [tShirtSubcategory, jerseySubcategory, outerwearSubcategory]
};

const shortsSubcategory: Subcategory = {
  subcategory: { label: 'Shorts', value: 'shorts' },
  types: {
    [TypesKey.DenimShorts]: { label: 'Denim Shorts', value: TypesKey.DenimShorts },
    [TypesKey.AthleticShorts]: { label: 'Athletic Shorts', value: TypesKey.AthleticShorts },
    [TypesKey.RegularShorts]: { label: 'Regular Shorts', value: TypesKey.RegularShorts },
    [TypesKey.ShortShorts]: { label: 'Short Shorts', value: TypesKey.ShortShorts },
    [TypesKey.CargoShorts]: { label: 'Cargo Shorts', value: TypesKey.CargoShorts }
  }
};

const pantsSubcategory: Subcategory = {
  subcategory: { label: 'Pants', value: 'pants' },
  types: {
    [TypesKey.CargoPants]: { label: 'Cargo Pants', value: TypesKey.CargoPants },
    [TypesKey.SweatpantsJoggers]: { label: 'Sweatpants & Joggers', value: TypesKey.SweatpantsJoggers },
    [TypesKey.TrackPants]: { label: 'Track Pants', value: TypesKey.TrackPants }
  }
};

const jeansSubcategory: Subcategory = {
  subcategory: { label: 'Jeans', value: 'jeans' },
  types: {
    [TypesKey.BaggyJeans]: { label: 'Baggy Jeans', value: TypesKey.BaggyJeans },
    [TypesKey.FlareJeans]: { label: 'Flare Jeans', value: TypesKey.FlareJeans },
    [TypesKey.RippedJeans]: { label: 'Ripped Jeans', value: TypesKey.RippedJeans },
    [TypesKey.StackedJeans]: { label: 'Stacked Jeans', value: TypesKey.StackedJeans },
    [TypesKey.SkinnyJeans]: { label: 'Skinny Jeans', value: TypesKey.SkinnyJeans }
  }
};

// Maybe pantsCategory?
const bottomsCategory: Category = {
  category: { label: 'Bottoms', value: 'bottoms' },
  subCategories: [shortsSubcategory, pantsSubcategory, jeansSubcategory]
};

const sneakersCategory: Subcategory = {
  subcategory: { label: 'Sneakers', value: 'sneakers' },
  types: {
    [TypesKey.LowTops]: { label: 'Low-Top Sneakers', value: TypesKey.LowTops },
    [TypesKey.MidTops]: { label: 'High-Top Sneakers', value: TypesKey.MidTops },
    [TypesKey.HighTops]: { label: 'High-Top Sneakers', value: TypesKey.HighTops },
    [TypesKey.RunningShoes]: { label: 'Running Shoes', value: TypesKey.RunningShoes },
    [TypesKey.BasketballShoes]: { label: 'Basketball Shoes', value: TypesKey.BasketballShoes },
    [TypesKey.SkateShoes]: { label: 'Skate Shoes', value: TypesKey.SkateShoes },
    [TypesKey.DesignerSneakers]: { label: 'Designer Sneakers', value: TypesKey.DesignerSneakers }
  }
};

const bootsCategory: Subcategory = {
  subcategory: { label: 'Boots', value: 'boots' },
  types: {
    [TypesKey.WesternBoots]: { label: 'Chelsea Boots', value: TypesKey.WesternBoots },
    [TypesKey.BikerBoots]: { label: 'Chelsea Boots', value: TypesKey.BikerBoots },
    [TypesKey.ChelseaBoots]: { label: 'Chelsea Boots', value: TypesKey.ChelseaBoots },
    [TypesKey.DesertBoots]: { label: 'Chelsea Boots', value: TypesKey.DesertBoots },
    [TypesKey.CombatBoots]: { label: 'Chelsea Boots', value: TypesKey.CombatBoots },
  }
};

const slidesSlippersCategory: Subcategory = {
  subcategory: { label: 'Slides & Slippers', value: 'slides_slippers' },
  types: {
    [TypesKey.Slides]: { label: 'Slides', value: TypesKey.Slides },
    [TypesKey.Sandals]: { label: 'Slides', value: TypesKey.Sandals },
    [TypesKey.Mules]: { label: 'Slides', value: TypesKey.Mules },
    [TypesKey.Clogs]: { label: 'Slides', value: TypesKey.Clogs },
  }
};

const shoesCategory: Category = {
  category: { label: 'Shoes', value: 'shoes' },
  subCategories: [sneakersCategory, bootsCategory, slidesSlippersCategory]
};

const hatsSubcategory: Subcategory = {
  subcategory: { label: 'Hats', value: 'hats' },
  types: {
    [TypesKey.FittedHats]: { label: 'Fitted Hats', value: TypesKey.FittedHats },
    [TypesKey.BaseballHats]: { label: 'Baseball Hats', value: TypesKey.BaseballHats },
    [TypesKey.Snapbacks]: { label: 'Snapbacks', value: TypesKey.Snapbacks },
    [TypesKey.BucketHats]: { label: 'Bucket Hats', value: TypesKey.BucketHats },
    [TypesKey.TruckerHats]: { label: 'Trucker Hats', value: TypesKey.TruckerHats }
  }
};

const headwearSubcategory: Subcategory = {
  subcategory: { label: 'Headwear', value: 'headwear' },
  types: {
    [TypesKey.Durags]: { label: 'Durags', value: TypesKey.Durags },
    [TypesKey.Beanies]: { label: 'Beanies', value: TypesKey.Beanies },
    [TypesKey.SkiMasks]: { label: 'Ski Masks', value: TypesKey.SkiMasks },
    [TypesKey.Knitted]: { label: 'Knitted', value: TypesKey.Knitted },
    [TypesKey.Bandanas]: { label: 'Bandanas', value: TypesKey.Bandanas },
    [TypesKey.Headbands]: { label: 'Headbands', value: TypesKey.Headbands }
  }
};

const bagsSubcategory: Subcategory = {
  subcategory: { label: 'Bags', value: 'bags' },
  types: {
    [TypesKey.Backpacks]: { label: 'Backpacks', value: TypesKey.Backpacks },
    [TypesKey.DuffleBags]: { label: 'Duffle Bags', value: TypesKey.DuffleBags },
    [TypesKey.TravelBags]: { label: 'Travel Bags', value: TypesKey.TravelBags },
    [TypesKey.ToteBags]: { label: 'Tote Bags', value: TypesKey.ToteBags },
    [TypesKey.FannyPacks]: { label: 'Fanny Packs', value: TypesKey.FannyPacks },
    [TypesKey.DrawstringBags]: { label: 'Drawstring Bags', value: TypesKey.DrawstringBags }
  }
};

const jewelrySubcategory: Subcategory = {
  subcategory: { label: 'Jewelry', value: 'jewelry' },
  types: {
    [TypesKey.ChainsNecklaces]: { label: 'Chains & Necklaces', value: TypesKey.ChainsNecklaces },
    [TypesKey.Pendants]: { label: 'Pendants', value: TypesKey.Pendants },
    [TypesKey.Bracelets]: { label: 'Bracelets', value: TypesKey.Bracelets },
    [TypesKey.Rings]: { label: 'Rings', value: TypesKey.Rings },
    [TypesKey.Earrings]: { label: 'Earrings', value: TypesKey.Earrings },
    [TypesKey.BeltChains]: { label: 'Belt Chains', value: TypesKey.BeltChains }
  }
};
const socksSubcategory: Subcategory = {
  subcategory: { label: 'Socks', value: 'socks' },
  types: {
    [TypesKey.NoShowSocks]: { label: 'No Show Socks', value: TypesKey.NoShowSocks },
    [TypesKey.AnkleSocks]: { label: 'Ankle Socks', value: TypesKey.AnkleSocks },
    [TypesKey.CrewSocks]: { label: 'Crew Socks', value: TypesKey.CrewSocks },
    [TypesKey.HighSocks]: { label: 'High Socks', value: TypesKey.HighSocks }
  }
};

const glassesSubcategory: Subcategory = {
  subcategory: { label: 'Glasses', value: 'glasses' },
  types: {
    [TypesKey.Sunglasses]: { label: 'Sunglasses', value: TypesKey.Sunglasses },
    [TypesKey.Eyeglasses]: { label: 'Eyeglasses', value: TypesKey.Eyeglasses }
  }
};

const otherAccessoriesSubcategory: Subcategory = {
  subcategory: { label: 'Other', value: 'other' },
  types: {
    [TypesKey.Gloves]: { label: 'Gloves', value: TypesKey.Gloves },
    [TypesKey.Sleeves]: { label: 'Sleeves', value: TypesKey.Sleeves },
    [TypesKey.Belts]: { label: 'Belts', value: TypesKey.Belts }
  }
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

/**
 * System to categoize items on the site.
 */
// export const categories: Category[] = [
//   topsCategory,
//   bottomsCategory,
//   shoesCategory,
//   accessoriesCategory
// ];

export enum CategoryKey {
  Tops = 'tops',
  Bottoms = 'bottoms',
  Shoes = 'shoes',
  Accessories = 'accessories'
}

export const categories: Record<CategoryKey, Category> = {
  [CategoryKey.Tops]: topsCategory,
  [CategoryKey.Bottoms]: bottomsCategory,
  [CategoryKey.Shoes]: shoesCategory,
  [CategoryKey.Accessories]: accessoriesCategory
};

export enum SubcategoryKey {
  TShirt = 'tShirt',
  Jersey = 'jersey',
  Outerwear = 'outerwear',
  Shorts = 'shorts',
  Pants = 'pants',
  Jeans = 'jeans',
  Sneakers = 'sneakers',
  Boots = 'boots',
  Slides = 'slides',
  Hats = 'hats',
  Headwear = 'headwear',
  Bags = 'bags',
  Jewelry = 'jewelry',
  Socks = 'socks',
  Glasses = 'glasses',
  Other = 'other'
}

export const subCategories: Record<SubcategoryKey, Subcategory> = {
  [SubcategoryKey.TShirt]: tShirtSubcategory,
  [SubcategoryKey.Jersey]: jerseySubcategory,
  [SubcategoryKey.Outerwear]: outerwearSubcategory,
  [SubcategoryKey.Shorts]: shortsSubcategory,
  [SubcategoryKey.Pants]: pantsSubcategory,
  [SubcategoryKey.Jeans]: jeansSubcategory,
  [SubcategoryKey.Sneakers]: sneakersCategory,
  [SubcategoryKey.Boots]: bootsCategory,
  [SubcategoryKey.Slides]: slidesSlippersCategory,
  [SubcategoryKey.Hats]: hatsSubcategory,
  [SubcategoryKey.Headwear]: headwearSubcategory,
  [SubcategoryKey.Bags]: bagsSubcategory,
  [SubcategoryKey.Jewelry]: jewelrySubcategory,
  [SubcategoryKey.Socks]: socksSubcategory,
  [SubcategoryKey.Glasses]: glassesSubcategory,
  [SubcategoryKey.Other]: otherAccessoriesSubcategory
};
