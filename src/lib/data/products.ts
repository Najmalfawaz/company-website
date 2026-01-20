export interface Product {
  id: string;
  sku: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: number;
  originalPrice: number;
  image: string;
  badge?: "new" | "sale" | "hot";
  inStock: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    sku: "10-1/1",
    name: {
      en: "RATIONAL Electric iCombi Pro 10-1/1 Electric",
      ar: "راشيونال كومبي برو كهربائي 10-1/1",
    },
    description: {
      en: "Professional combi oven for commercial kitchens",
      ar: "فرن كومبي احترافي للمطابخ التجارية",
    },
    price: 49385.0,
    originalPrice: 49385.0,
    image: "/images/products/rational-combi.jpg",
    badge: "sale",
    inStock: true,
    category: "cooking",
  },
  {
    id: "2",
    sku: "10-1/2",
    name: {
      en: "RATIONAL Electric iCombi Pro 10-1/1 Electric",
      ar: "راشيونال كومبي برو كهربائي 10-1/1",
    },
    description: {
      en: "Professional combi oven for commercial kitchens",
      ar: "فرن كومبي احترافي للمطابخ التجارية",
    },
    price: 49385.0,
    originalPrice: 49385.0,
    image: "/images/products/rational-combi.jpg",
    badge: "new",
    inStock: true,
    category: "cooking",
  },
  {
    id: "3",
    sku: "10-1/3",
    name: {
      en: "RATIONAL Electric iCombi Pro 10-1/1 Electric",
      ar: "راشيونال كومبي برو كهربائي 10-1/1",
    },
    description: {
      en: "Professional combi oven for commercial kitchens",
      ar: "فرن كومبي احترافي للمطابخ التجارية",
    },
    price: 49385.0,
    originalPrice: 49385.0,
    image: "/images/products/rational-combi.jpg",
    inStock: true,
    category: "cooking",
  },
  {
    id: "4",
    sku: "10-1/4",
    name: {
      en: "RATIONAL Electric iCombi Pro 10-1/1 Electric",
      ar: "راشيونال كومبي برو كهربائي 10-1/1",
    },
    description: {
      en: "Professional combi oven for commercial kitchens",
      ar: "فرن كومبي احترافي للمطابخ التجارية",
    },
    price: 49385.0,
    originalPrice: 49385.0,
    image: "/images/products/rational-combi.jpg",
    badge: "sale",
    inStock: true,
    category: "cooking",
  },
  {
    id: "5",
    sku: "10-1/5",
    name: {
      en: "RATIONAL Electric iCombi Pro 10-1/1 Electric",
      ar: "راشيونال كومبي برو كهربائي 10-1/1",
    },
    description: {
      en: "Professional combi oven for commercial kitchens",
      ar: "فرن كومبي احترافي للمطابخ التجارية",
    },
    price: 49385.0,
    originalPrice: 49385.0,
    image: "/images/products/rational-combi.jpg",
    inStock: true,
    category: "cooking",
  },
  {
    id: "6",
    sku: "10-1/6",
    name: {
      en: "RATIONAL Electric iCombi Pro 10-1/1 Electric",
      ar: "راشيونال كومبي برو كهربائي 10-1/1",
    },
    description: {
      en: "Professional combi oven for commercial kitchens",
      ar: "فرن كومبي احترافي للمطابخ التجارية",
    },
    price: 49385.0,
    originalPrice: 49385.0,
    image: "/images/products/rational-combi.jpg",
    badge: "hot",
    inStock: true,
    category: "cooking",
  },
];

export const brands = [
  { id: "rational", name: "RATIONAL", logo: "/images/brands/rational.png" },
  { id: "mbm", name: "MBM", logo: "/images/brands/mbm.png" },
  { id: "brema", name: "BREMA", logo: "/images/brands/brema.png" },
  { id: "pitco", name: "PITCO", logo: "/images/brands/pitco.png" },
];

export const shopBrands = [
  { id: "mariot", name: "MARIOT", logo: "/images/brands/mariot-brand.png" },
  { id: "foodtech", name: "Food Technology", logo: "/images/brands/foodtech.png" },
  { id: "monolith", name: "MONOLITH", logo: "/images/brands/monolith.png" },
  { id: "pitco", name: "PITCO", logo: "/images/brands/pitco.png" },
  { id: "rational", name: "RATIONAL", logo: "/images/brands/rational.png" },
  { id: "grill", name: "Grill", logo: "/images/brands/grill.png" },
];

export interface Category {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  icon: string;
}

export const categories: Category[] = [
  { id: "accessories", name: { en: "Accessories", ar: "إكسسوارات" }, icon: "wrench" },
  { id: "bakery", name: { en: "Bakery Line", ar: "خط المخابز" }, icon: "cake" },
  { id: "coffee", name: { en: "Coffee & Bar Line", ar: "خط القهوة والبار" }, icon: "coffee" },
  { id: "cooking", name: { en: "Cooking Line", ar: "خط الطهي" }, icon: "flame" },
  { id: "dishwasher", name: { en: "Dish Washer Machine", ar: "غسالة الأطباق" }, icon: "sparkles" },
  { id: "food-processing", name: { en: "Food Processing", ar: "معالجة الأغذية" }, icon: "utensils" },
  { id: "grease", name: { en: "Grease Separator", ar: "فاصل الشحوم" }, icon: "droplet" },
  { id: "ice", name: { en: "Ice & Water Machines", ar: "آلات الثلج والماء" }, icon: "snowflake" },
  { id: "refrigeration", name: { en: "Refrigeration Line", ar: "خط التبريد" }, icon: "thermometer" },
  { id: "sink", name: { en: "Sink", ar: "حوض" }, icon: "droplets" },
];
