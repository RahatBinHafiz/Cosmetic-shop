import type { CosmeticShop, MallLevel, ShopCategory } from '../types/shop';

export const SHOP_CATEGORIES: ShopCategory[] = [
  'Skincare & Makeup',
  'K-Beauty',
  'Fragrances',
  'Derma & Organic',
  'Personal Care',
];

export const MALL_LEVELS: MallLevel[] = [
  'Level 1',
  'Level 2',
  'Level 3',
  'Level 4',
];

export const MALL_INFO = {
  name: 'Bashundhara City Shopping Complex',
  address: '13/Ka/1 Panthapath, Tejgaon, Dhaka 1215, Bangladesh',
  hours: '10:00 AM – 9:00 PM (Wednesday – Monday)',
  closedDay: 'Tuesdays',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Bashundhara+City+Shopping+Complex+Panthapath+Dhaka',
};

export const INITIAL_SHOPS: CosmeticShop[] = [
  {
    id: 'bd-budget-beauty',
    name: 'BD Budget Beauty',
    category: 'Skincare & Makeup',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Block C',
    shopNumber: 'Shop 86–87 & 97–98',
    websiteUrl: 'https://bdbudgetbeauty.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=BD+Budget+Beauty+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=BD+Budget+Beauty+Bashundhara+City+Dhaka',
    description:
      'Multi-brand cosmetics and authentic Korean skincare store carrying serums, sunscreens, cleansers, and everyday makeup.',
    specialties: ['Korean Skincare', 'Sunscreens', 'Serums', 'Makeup'],
    featuredRank: 1,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'shopaholic',
    name: 'Shopaholic',
    category: 'Skincare & Makeup',
    levels: ['Level 3'],
    primaryLevel: 'Level 3',
    block: 'Block B',
    shopNumber: 'Shop 38',
    websiteUrl: 'https://shopaholic.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Shopaholic+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Shopaholic+Bashundhara+City+Dhaka',
    description:
      'Authentic imported US and UK beauty retailer stocking Huda Beauty, Too Faced, The Ordinary, and Makeup Revolution.',
    specialties: ['US & UK Makeup', 'The Ordinary', 'Huda Beauty', 'Skincare'],
    featuredRank: 2,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'beautysiaa',
    name: 'Beautysiaa',
    category: 'Skincare & Makeup',
    levels: ['Level 3'],
    primaryLevel: 'Level 3',
    block: 'Block B',
    shopNumber: 'Shop 43',
    websiteUrl: 'https://beautysiaa.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Beautysiaa+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Beautysiaa+Bashundhara+City+Dhaka',
    description:
      'Full-range beauty destination featuring authentic global skincare, hair care, body mists, and color cosmetics.',
    specialties: ['Global Skincare', 'Hair Care', 'Body Mists', 'Cosmetics'],
    featuredRank: 3,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'bioxin-cosmeceuticals',
    name: 'Bio-Xin Cosmeceuticals',
    category: 'Derma & Organic',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Block C',
    shopNumber: 'Shop 20',
    websiteUrl: 'https://bioxin.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Bio-Xin+Cosmeceuticals+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Bio-Xin+Cosmeceuticals+Bashundhara+City+Dhaka',
    description:
      'European dermo-cosmetics outlet specializing in clinical cleansers, acne solutions, anti-aging serums, and skin consultation.',
    specialties: ['Dermo-Cosmetics', 'Clinical Skincare', 'Acne Care', 'Serums'],
    featuredRank: 4,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'flormar-bangladesh',
    name: 'Flormar Bangladesh',
    category: 'Skincare & Makeup',
    levels: ['Level 1', 'Level 3'],
    primaryLevel: 'Level 1',
    block: 'Block C & B',
    shopNumber: 'L1: Shop 19 & 93 · L3: Shop 46',
    locationNote: 'Two branches inside the mall (Level 1 Block C and Level 3 Block B).',
    websiteUrl: 'https://flormarbd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Flormar+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Flormar+Bangladesh+Bashundhara+City+Dhaka',
    description:
      'Authorized Turkish color cosmetics boutique offering foundations, matte lipsticks, mascaras, nail enamels, and brushes.',
    specialties: ['Color Cosmetics', 'Foundations', 'Lipsticks', 'Nail Enamels'],
    featuredRank: 5,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'shijang',
    name: 'Shijang',
    category: 'K-Beauty',
    levels: ['Level 3'],
    primaryLevel: 'Level 3',
    block: 'Block B',
    shopNumber: 'Shop 39',
    websiteUrl: 'https://shijang.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Shijang+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Shijang+Korean+Cosmetics+Bashundhara+City',
    description:
      'Dedicated Korean beauty and K-skincare shop featuring authentic sheet masks, snail mucin essences, toners, and lip tints.',
    specialties: ['K-Beauty', 'Korean Toners', 'Sheet Masks', 'Lip Tints'],
    featuredRank: 6,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'perfume-world',
    name: 'Perfume World',
    category: 'Fragrances',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Block C',
    shopNumber: 'Level 1 Corridor',
    websiteUrl: 'https://perfumeworld.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Perfume+World+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Perfume+World+Bashundhara+City+Dhaka',
    description:
      'Authorized luxury fragrance retailer stocking designer and niche Eau de Parfum, colognes, gift sets, and body sprays.',
    specialties: ['Designer Perfumes', 'Niche Fragrances', 'Gift Sets', 'Colognes'],
    featuredRank: 7,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'beauty-hub',
    name: 'Beauty Hub',
    category: 'Skincare & Makeup',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Block C',
    shopNumber: 'Shop 86–87',
    websiteUrl: 'https://beautyhub.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Beauty+Hub+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Beauty+Hub+Bashundhara+City+Dhaka',
    phone: '+880 1755-555572',
    description:
      'Curated cosmetics and skincare shop offering international facial care, makeup staples, hair treatments, and grooming.',
    specialties: ['Skincare', 'Makeup', 'Grooming', 'Hair Treatments'],
    featuredRank: 8,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'al-haramain-perfumes',
    name: 'Al Haramain Perfumes',
    category: 'Fragrances',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Between Zone C & D',
    shopNumber: 'Zone C–D Showroom',
    websiteUrl: 'https://ahp.alharamainperfumes.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Al+Haramain+Perfumes+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Al+Haramain+Perfumes+Bashundhara+City+Dhaka',
    description:
      'Renowned Arabian perfumery offering concentrated attar oils, luxury oud blends, oriental sprays, and bakhoor.',
    specialties: ['Arabian Oud', 'Attar Oils', 'Oriental Perfumes', 'Bakhoor'],
    featuredRank: 9,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'junaid-jamshed-fragrances',
    name: 'J. Fragrances (Junaid Jamshed)',
    category: 'Fragrances',
    levels: ['Level 1', 'Level 3'],
    primaryLevel: 'Level 1',
    block: 'Block C & B',
    shopNumber: 'L1: Shop 19 & 93 · L3: Shop 46',
    locationNote: 'Available across Level 1 Block C and Level 3 Block B counters.',
    websiteUrl: 'https://fragrancesbd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=J.+Fragrances+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Junaid+Jamshed+Fragrances+Bashundhara+City',
    description:
      'Signature J. perfume collection carrying oriental and western Eau de Parfum, alcohol-free roll-ons, and body mists.',
    specialties: ['J. Perfumes', 'Body Mists', 'Roll-on Attars', 'Gift Boxes'],
    featuredRank: 10,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'the-mynt',
    name: 'The Mynt',
    category: 'K-Beauty',
    levels: ['Level 3'],
    primaryLevel: 'Level 3',
    block: 'Block B',
    shopNumber: 'Level 3 Beauty Wing',
    websiteUrl: 'https://themynt.shop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Mynt+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=The+Mynt+Bashundhara+City+cosmetics',
    description:
      'Curated imported beauty boutique stocking trending Asian and Western skincare, lip care, and daily complexion products.',
    specialties: ['Imported Skincare', 'K-Beauty', 'Lip Care', 'Complexion'],
    featuredRank: 11,
    sourceLabel: 'Official Store & Google',
  },
  {
    id: 'herlan-store',
    name: 'Herlan Store',
    category: 'Skincare & Makeup',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Block C',
    shopNumber: 'Level 1 Beauty Zone',
    websiteUrl: 'https://herlan.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Herlan+Store+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Herlan+Store+Bashundhara+City+Dhaka',
    description:
      'Modern cosmetics and personal care chain carrying NIOR, Lily, Blaze O’ Skin, and international makeup lines.',
    specialties: ['NIOR Makeup', 'Lily Skincare', 'Color Cosmetics', 'Personal Care'],
    featuredRank: 12,
    sourceLabel: 'Official Store & Google',
  },
  {
    id: 'aarong-earth',
    name: 'Aarong Earth (Aarong Flagship)',
    category: 'Derma & Organic',
    levels: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
    primaryLevel: 'Level 1',
    block: 'Block B',
    shopNumber: 'Multi-Floor Flagship (L1–L4)',
    websiteUrl: 'https://www.aarong.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Aarong+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Aarong+Earth+Bashundhara+City+Dhaka',
    description:
      'Dedicated Aarong Earth botanical beauty section featuring natural face packs, herbal hair oils, handmade soaps, and scrubs.',
    specialties: ['Botanical Skincare', 'Herbal Hair Oils', 'Natural Soaps', 'Bath Care'],
    featuredRank: 13,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'miniso-bangladesh',
    name: 'Miniso Bangladesh',
    category: 'Personal Care',
    levels: ['Level 4'],
    primaryLevel: 'Level 4',
    block: 'Block B',
    shopNumber: 'Level 4 Outlet',
    websiteUrl: 'https://www.franchise-minisobd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Miniso+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Miniso+Bashundhara+City+Dhaka',
    description:
      'Minimalist lifestyle and beauty outlet offering makeup sponges, brushes, sheet masks, everyday fragrances, and travel kits.',
    specialties: ['Beauty Tools', 'Makeup Brushes', 'Everyday Perfumes', 'Sheet Masks'],
    featuredRank: 14,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'almas-super-shop',
    name: 'Almas Super Shop (Cosmetics Wing)',
    category: 'Personal Care',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Block D',
    shopNumber: 'Shop 101–111',
    locationNote: 'In-store cosmetics and toiletries wing; no standalone e-commerce site.',
    websiteUrl: null,
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Almas+Super+Shop+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Almas+Super+Shop+Bashundhara+City+Dhaka',
    phone: '+880 2-9138866 (Ext: 401101)',
    description:
      'Long-standing Bashundhara City department store housing a large imported cosmetics, toiletries, and family body care wing.',
    specialties: ['Imported Toiletries', 'Body Care', 'Everyday Cosmetics', 'Hair Care'],
    featuredRank: 15,
    sourceLabel: 'Google Maps Listing',
  },
];
