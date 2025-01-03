export interface Product {
  name: string;
  price: number;
  coverImg: string;
}

export const mockProducts: Product[] = [
  { name: 'Puffer Jacket', price: 120, coverImg: '/mock/puff_jacket_example.png' },
  { name: 'Statement Hoodie', price: 60, coverImg: '/mock/hoodie_example.jpeg' },
  { name: 'Blank Sweatsuit', price: 110, coverImg: '/mock/blank_sweatsuit.jpeg' },
  { name: 'Perfect T-shirt', price: 35, coverImg: '/mock/blank_tee.png' },
  { name: 'Cargo Pants', price: 90, coverImg: '/mock/cargo_pants.jpg' },
  { name: 'Cargo Shorts', price: 70, coverImg: '/mock/cargo_shorts.png' },
  { name: 'Hunter Hoodie', price: 90, coverImg: '/mock/hunter_hoodie.jpg' },
  { name: 'Nike Oversized Tech Pants', price: 135, coverImg: '/mock/nike_oversize_pants.png' },
  { name: 'Nike Tech Jacket', price: 135, coverImg: '/mock/nike_tech_hoodie.png' },
  { name: 'Parachute Pants', price: 90, coverImg: '/mock/parachute_pants.png' }
];
