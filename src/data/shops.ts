import type { CosmeticShop, MallId, MallInfo, MallLevel, ShopCategory } from '../types/shop';

export const SHOP_CATEGORIES: ShopCategory[] = [
  'Skincare & Makeup',
  'K-Beauty',
  'Fragrances',
  'Derma & Organic',
  'Personal Care',
];

export const MALL_LEVELS: MallLevel[] = [
  'Ground Floor',
  'Level 1',
  'Level 2',
  'Level 3',
  'Level 4',
];

export const MALLS: Record<MallId, MallInfo> = {
  'bashundhara-city': {
    id: 'bashundhara-city',
    shortName: 'Bashundhara City',
    name: 'Bashundhara City Shopping Complex',
    area: 'Panthapath, Dhaka',
    address: '13/Ka/1 Panthapath, Tejgaon, Dhaka 1215, Bangladesh',
    hours: '10:00 AM – 9:00 PM (Wednesday – Monday)',
    closedDay: 'Tuesdays',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Bashundhara+City+Shopping+Complex+Panthapath+Dhaka',
  },
  'jamuna-future-park': {
    id: 'jamuna-future-park',
    shortName: 'Jamuna Future Park',
    name: 'Jamuna Future Park',
    area: 'Kuril, Progoti Sarani, Dhaka',
    address: 'KA-244 Kuril, Progoti Sarani, Dhaka 1229, Bangladesh',
    hours: '11:00 AM – 9:00 PM (Thursday – Tuesday)',
    closedDay: 'Wednesdays',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Jamuna+Future+Park+Kuril+Dhaka',
    officialWebsiteUrl: 'https://www.jamunafuturepark.com',
  },
};

export const MALL_LIST: MallInfo[] = [
  MALLS['bashundhara-city'],
  MALLS['jamuna-future-park'],
];

export const INITIAL_SHOPS: CosmeticShop[] = [
  // --- Bashundhara City Shopping Complex ---
  {
    id: 'bd-budget-beauty',
    mall: 'bashundhara-city',
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
    id: 'jfp-sundora-beauty',
    mall: 'jamuna-future-park',
    name: 'Sundora Beauty',
    category: 'Skincare & Makeup',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Zone B',
    shopNumber: 'Shop GB-009',
    websiteUrl: 'https://sundora.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sundora+Beauty+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Sundora+Beauty+Jamuna+Future+Park+Dhaka',
    description:
      'Luxury beauty and fragrance boutique stocking 100% authentic designer perfumes, prestige makeup, and international skincare.',
    specialties: ['Luxury Beauty', 'Designer Perfumes', 'Prestige Makeup', 'Skincare'],
    featuredRank: 2,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'shopaholic',
    mall: 'bashundhara-city',
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
    featuredRank: 3,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-the-body-shop',
    mall: 'jamuna-future-park',
    name: 'The Body Shop Bangladesh',
    category: 'Derma & Organic',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Zone A',
    shopNumber: 'Shop 1A-005',
    websiteUrl: 'https://www.thebodyshop.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Body+Shop+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=The+Body+Shop+Jamuna+Future+Park+Dhaka',
    description:
      'Official flagship outlet offering ethically sourced skincare, iconic Tea Tree routines, body butters, hair care, and mists.',
    specialties: ['Cruelty-Free Skincare', 'Body Butter', 'Tea Tree Care', 'Fragrances'],
    featuredRank: 4,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'beautysiaa',
    mall: 'bashundhara-city',
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
    featuredRank: 5,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-shajgoj',
    mall: 'jamuna-future-park',
    name: 'Shajgoj',
    category: 'Skincare & Makeup',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Main Atrium',
    shopNumber: 'Ground Floor Outlet',
    websiteUrl: 'https://shop.shajgoj.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Shajgoj+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Shajgoj+Jamuna+Future+Park+Dhaka',
    description:
      'Bangladesh’s leading beauty retailer carrying authentic local and international skincare, makeup, hair care, and beauty advice.',
    specialties: ['Skincare', 'Makeup', 'Hair Care', 'Personal Care'],
    featuredRank: 6,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'bioxin-cosmeceuticals',
    mall: 'bashundhara-city',
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
    featuredRank: 7,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-bd-budget-beauty',
    mall: 'jamuna-future-park',
    name: 'BD Budget Beauty (JFP)',
    category: 'Skincare & Makeup',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Zone A',
    shopNumber: 'Shop GA-032',
    locationNote: 'Located on the Ground Floor near the first car drop-in entrance.',
    websiteUrl: 'https://bdbudgetbeauty.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=BD+Budget+Beauty+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=BD+Budget+Beauty+Jamuna+Future+Park+Dhaka',
    description:
      'Jamuna Future Park flagship branch offering authentic Korean skincare, sunscreens, toners, and everyday global makeup.',
    specialties: ['Korean Skincare', 'Sunscreens', 'Serums', 'Budget Makeup'],
    featuredRank: 8,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'flormar-bangladesh',
    mall: 'bashundhara-city',
    name: 'Flormar Bangladesh',
    category: 'Skincare & Makeup',
    levels: ['Level 1', 'Level 3'],
    primaryLevel: 'Level 1',
    block: 'Block C & B',
    shopNumber: 'L1: Shop 19 & 93 · L3: Shop 46',
    locationNote: 'Two branches inside Bashundhara City (Level 1 Block C and Level 3 Block B).',
    websiteUrl: 'https://flormarbd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Flormar+Bashundhara+City+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Flormar+Bangladesh+Bashundhara+City+Dhaka',
    description:
      'Authorized Turkish color cosmetics boutique offering foundations, matte lipsticks, mascaras, nail enamels, and brushes.',
    specialties: ['Color Cosmetics', 'Foundations', 'Lipsticks', 'Nail Enamels'],
    featuredRank: 9,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-shijang',
    mall: 'jamuna-future-park',
    name: 'Shijang (JFP)',
    category: 'K-Beauty',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Zone B',
    shopNumber: 'Shop 1B/32A',
    websiteUrl: 'https://shijang.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Shijang+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Shijang+Korean+Cosmetics+Jamuna+Future+Park',
    description:
      'Dedicated K-Beauty boutique inside Jamuna Future Park stocking authentic Korean skincare, sheet masks, lip tints, and essences.',
    specialties: ['K-Beauty', 'Korean Skincare', 'Sheet Masks', 'Lip Tints'],
    featuredRank: 10,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'shijang',
    mall: 'bashundhara-city',
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
    featuredRank: 11,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-beauty-hub',
    mall: 'jamuna-future-park',
    name: 'Beauty Hub (JFP)',
    category: 'Skincare & Makeup',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Block A',
    shopNumber: 'Shop 33/A',
    websiteUrl: 'https://beautyhub.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Beauty+Hub+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Beauty+Hub+Jamuna+Future+Park+Dhaka',
    phone: '+880 1755-555572',
    description:
      'Authentic global skincare and cosmetics outlet carrying K-Beauty, J-Beauty, CeraVe, Cetaphil, and makeup essentials.',
    specialties: ['K-Beauty & J-Beauty', 'CeraVe & Cetaphil', 'Skincare', 'Makeup'],
    featuredRank: 12,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'perfume-world',
    mall: 'bashundhara-city',
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
    featuredRank: 13,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-perfume-world',
    mall: 'jamuna-future-park',
    name: 'Perfume World (JFP)',
    category: 'Fragrances',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Zone B',
    shopNumber: 'Shop GB-004',
    websiteUrl: 'https://perfumeworld.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Perfume+World+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Perfume+World+Jamuna+Future+Park+Dhaka',
    description:
      'Ground-floor luxury fragrance showroom featuring authentic international Eau de Parfum, designer gift sets, and colognes.',
    specialties: ['Designer Perfumes', 'Eau de Parfum', 'Gift Sets', 'Body Sprays'],
    featuredRank: 14,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'beauty-hub',
    mall: 'bashundhara-city',
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
    featuredRank: 15,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-flormar',
    mall: 'jamuna-future-park',
    name: 'Flormar Bangladesh (JFP)',
    category: 'Skincare & Makeup',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'West Court',
    shopNumber: 'Shop GA-045B',
    websiteUrl: 'https://flormarbd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Flormar+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Flormar+Jamuna+Future+Park+Dhaka',
    description:
      'Official West Court makeup counter offering Turkish foundations, liquid matte lipsticks, mascaras, and nail care.',
    specialties: ['Color Cosmetics', 'Foundations', 'Lipsticks', 'Nail Enamels'],
    featuredRank: 16,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'al-haramain-perfumes',
    mall: 'bashundhara-city',
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
    featuredRank: 17,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-al-haramain-perfumes',
    mall: 'jamuna-future-park',
    name: 'Al Haramain Perfumes (JFP)',
    category: 'Fragrances',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Zone B & C',
    shopNumber: 'Shop GB-001, GC-008 & GC-009',
    locationNote: 'Multiple Ground Floor showrooms across Zone B and Zone C.',
    websiteUrl: 'https://www.alharamainperfumes.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Al+Haramain+Perfumes+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Al+Haramain+Perfumes+Jamuna+Future+Park+Dhaka',
    description:
      'Flagship Jamuna Future Park Arabian perfumery with concentrated attars, signature oud blends, and luxury gift boxes.',
    specialties: ['Arabian Oud', 'Attar Oils', 'Oriental Perfumes', 'Gift Boxes'],
    featuredRank: 18,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-dash-fragrances',
    mall: 'jamuna-future-park',
    name: 'DASH Fragrances',
    category: 'Fragrances',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Block A',
    shopNumber: 'Shop 1A-007A',
    websiteUrl: 'https://www.dashbd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=DASH+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=DASH+Perfume+Jamuna+Future+Park+Dhaka',
    description:
      'Contemporary boutique specializing in long-lasting Eau de Parfum, inspired designer scents, and curated fragrance sets.',
    specialties: ['Eau de Parfum', 'Inspired Scents', 'Fragrance Sets', 'Everyday Perfumes'],
    featuredRank: 19,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'junaid-jamshed-fragrances',
    mall: 'bashundhara-city',
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
    featuredRank: 20,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-junaid-jamshed',
    mall: 'jamuna-future-park',
    name: 'J. Fragrances (JFP)',
    category: 'Fragrances',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'West Court',
    shopNumber: 'Shop GA-045B',
    websiteUrl: 'https://fragrancesbd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Junaid+Jamshed+Fragrances+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Junaid+Jamshed+Fragrances+Jamuna+Future+Park',
    description:
      'Jamuna Future Park counter carrying signature Junaid Jamshed Eau de Parfum, traditional attars, and body sprays.',
    specialties: ['J. Perfumes', 'Oriental Scents', 'Body Sprays', 'Attars'],
    featuredRank: 21,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'the-mynt',
    mall: 'bashundhara-city',
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
    featuredRank: 22,
    sourceLabel: 'Official Store & Google',
  },
  {
    id: 'jfp-a1-traders',
    mall: 'jamuna-future-park',
    name: 'A1 Traders (K-Beauty & Cosmetics)',
    category: 'K-Beauty',
    levels: ['Level 1'],
    primaryLevel: 'Level 1',
    block: 'Level 1 Wing',
    shopNumber: 'Level 1 Beauty Store',
    websiteUrl: 'https://a1traders.com.bd',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=A1+Traders+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=A1+Traders+Jamuna+Future+Park+cosmetics',
    description:
      'Multi-brand cosmetics stockist inside Jamuna Future Park carrying The Face Shop, Korean cleansers, and imported beauty staples.',
    specialties: ['The Face Shop', 'Korean Skincare', 'Imported Cosmetics', 'Hair Care'],
    featuredRank: 23,
    sourceLabel: 'Official Store & Google',
  },
  {
    id: 'herlan-store',
    mall: 'bashundhara-city',
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
    featuredRank: 24,
    sourceLabel: 'Official Store & Google',
  },
  {
    id: 'jfp-herlan-store',
    mall: 'jamuna-future-park',
    name: 'Herlan Store (JFP)',
    category: 'Skincare & Makeup',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Main Beauty Corridor',
    shopNumber: 'Ground Floor Outlet',
    websiteUrl: 'https://herlan.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Herlan+Store+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Herlan+Store+Jamuna+Future+Park+Dhaka',
    description:
      'Authorized Herlan beauty outlet at Jamuna Future Park offering NIOR color cosmetics, Lily skincare, and personal care.',
    specialties: ['NIOR Makeup', 'Lily Skincare', 'Blaze O’ Skin', 'Personal Care'],
    featuredRank: 25,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'aarong-earth',
    mall: 'bashundhara-city',
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
    featuredRank: 26,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-aarong-earth',
    mall: 'jamuna-future-park',
    name: 'Aarong Earth (JFP Flagship)',
    category: 'Derma & Organic',
    levels: ['Ground Floor', 'Level 1'],
    primaryLevel: 'Ground Floor',
    block: 'Main Wing',
    shopNumber: 'Multi-Floor Flagship',
    websiteUrl: 'https://www.aarong.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Aarong+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Aarong+Earth+Jamuna+Future+Park+Dhaka',
    description:
      'Botanical skincare and herbal personal care department inside Aarong’s expansive Jamuna Future Park flagship.',
    specialties: ['Botanical Skincare', 'Herbal Hair Oils', 'Natural Soaps', 'Bath Care'],
    featuredRank: 27,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'miniso-bangladesh',
    mall: 'bashundhara-city',
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
    featuredRank: 28,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'jfp-miniso',
    mall: 'jamuna-future-park',
    name: 'Miniso Bangladesh (JFP)',
    category: 'Personal Care',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Main Entrance',
    shopNumber: 'Ground Floor Flagship',
    websiteUrl: 'https://www.franchise-minisobd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Miniso+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=Miniso+Jamuna+Future+Park+Dhaka',
    description:
      'Ground-floor lifestyle and beauty store featuring makeup tools, sheet masks, everyday fragrances, and grooming kits.',
    specialties: ['Beauty Tools', 'Makeup Sponges', 'Everyday Perfumes', 'Sheet Masks'],
    featuredRank: 29,
    sourceLabel: 'Official Store & Google Maps',
  },
  {
    id: 'almas-super-shop',
    mall: 'bashundhara-city',
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
    featuredRank: 30,
    sourceLabel: 'Google Maps Listing',
  },
  {
    id: 'jfp-js-trading',
    mall: 'jamuna-future-park',
    name: 'JS Trading (Cosmetics & Perfumes)',
    category: 'Personal Care',
    levels: ['Ground Floor'],
    primaryLevel: 'Ground Floor',
    block: 'Main Retail Wing',
    shopNumber: 'Ground Floor Store',
    locationNote: 'Listed on the official Jamuna Future Park directory; in-store retail outlet.',
    websiteUrl: null,
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=JS+Trading+Jamuna+Future+Park+Dhaka',
    googleSearchUrl:
      'https://www.google.com/search?q=JS+Trading+Jamuna+Future+Park+Dhaka',
    description:
      'Imported cosmetics, personal toiletries, and everyday perfume retailer listed inside Jamuna Future Park.',
    specialties: ['Imported Cosmetics', 'Toiletries', 'Everyday Perfumes', 'Body Care'],
    featuredRank: 31,
    sourceLabel: 'JFP Directory & Google Maps',
  },
];
