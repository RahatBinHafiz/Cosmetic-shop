export type MallId = 'bashundhara-city' | 'jamuna-future-park';

export type ShopCategory =
  | 'Skincare & Makeup'
  | 'K-Beauty'
  | 'Fragrances'
  | 'Derma & Organic'
  | 'Personal Care';

export type MallLevel =
  | 'Ground Floor'
  | 'Level 1'
  | 'Level 2'
  | 'Level 3'
  | 'Level 4';

export type SortOption = 'featured' | 'name-asc' | 'level-asc';

export type ViewMode = 'grid' | 'list';

export interface MallInfo {
  id: MallId;
  shortName: string;
  name: string;
  area: string;
  address: string;
  hours: string;
  closedDay: string;
  googleMapsUrl: string;
  officialWebsiteUrl?: string;
}

export interface CosmeticShop {
  id: string;
  mall: MallId;
  name: string;
  category: ShopCategory;
  levels: MallLevel[];
  primaryLevel: MallLevel;
  block: string;
  shopNumber: string;
  locationNote?: string;
  websiteUrl: string | null;
  googleMapsUrl: string;
  googleSearchUrl: string;
  phone?: string;
  description: string;
  specialties: string[];
  featuredRank: number;
  sourceLabel: string;
  isUserAdded?: boolean;
}

export interface DirectoryFilters {
  mall: MallId | 'All';
  query: string;
  category: ShopCategory | 'All';
  level: MallLevel | 'All';
  savedOnly: boolean;
  websitesOnly: boolean;
  sortBy: SortOption;
}

export interface NewShopInput {
  mall: MallId;
  name: string;
  websiteUrl: string;
  category: ShopCategory;
  level: MallLevel;
  block: string;
  shopNumber: string;
  description: string;
  specialtiesText: string;
  phone: string;
}

export interface ShopValidationErrors {
  name?: string;
  websiteUrl?: string;
  block?: string;
  description?: string;
}

export interface FloorSummary {
  mall: MallId;
  level: MallLevel;
  shopCount: number;
  blocks: string[];
  highlightNames: string[];
  summaryText: string;
}
