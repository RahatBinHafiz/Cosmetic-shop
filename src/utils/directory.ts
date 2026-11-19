import type {
  CosmeticShop,
  DirectoryFilters,
  FloorSummary,
  MallLevel,
  NewShopInput,
  ShopCategory,
  ShopValidationErrors,
} from '../types/shop';

const LEVEL_ORDER: Record<MallLevel, number> = {
  'Level 1': 1,
  'Level 2': 2,
  'Level 3': 3,
  'Level 4': 4,
};

export function normalizeWebsiteUrl(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return null;
  }

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }
    if (!parsed.hostname.includes('.') || parsed.hostname.startsWith('.') || parsed.hostname.endsWith('.')) {
      return null;
    }
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return null;
  }
}

export function extractDisplayDomain(url: string | null): string {
  if (!url) {
    return 'In-store & Google Maps';
  }
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./i, '');
  } catch {
    return url;
  }
}

export function buildGoogleMapsUrl(shopName: string, locationLabel?: string): string {
  const parts = [shopName.trim(), locationLabel?.trim(), 'Bashundhara City Dhaka'].filter(Boolean);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parts.join(' '))}`;
}

export function buildGoogleSearchUrl(shopName: string): string {
  return `https://www.google.com/search?q=${encodeURIComponent(`${shopName.trim()} Bashundhara City Dhaka`)}`;
}

export function filterAndSortShops(
  shops: CosmeticShop[],
  filters: DirectoryFilters,
  savedIds: ReadonlySet<string>
): CosmeticShop[] {
  const normalizedQuery = filters.query.trim().toLowerCase();

  const filtered = shops.filter((shop) => {
    if (filters.category !== 'All' && shop.category !== filters.category) {
      return false;
    }

    if (filters.level !== 'All' && !shop.levels.includes(filters.level)) {
      return false;
    }

    if (filters.savedOnly && !savedIds.has(shop.id)) {
      return false;
    }

    if (filters.websitesOnly && !shop.websiteUrl) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      shop.name,
      shop.category,
      shop.primaryLevel,
      ...shop.levels,
      shop.block,
      shop.shopNumber,
      shop.description,
      ...shop.specialties,
      extractDisplayDomain(shop.websiteUrl),
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  return [...filtered].sort((a, b) => {
    if (filters.sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }

    if (filters.sortBy === 'level-asc') {
      const levelDiff = LEVEL_ORDER[a.primaryLevel] - LEVEL_ORDER[b.primaryLevel];
      if (levelDiff !== 0) {
        return levelDiff;
      }
      return a.name.localeCompare(b.name);
    }

    return a.featuredRank - b.featuredRank;
  });
}

export function validateNewShopInput(input: NewShopInput): ShopValidationErrors {
  const errors: ShopValidationErrors = {};

  if (input.name.trim().length < 2) {
    errors.name = 'Enter a shop name with at least 2 characters.';
  }

  if (!input.websiteUrl.trim()) {
    errors.websiteUrl = 'Enter the shop website URL (e.g. https://example.com.bd).';
  } else if (!normalizeWebsiteUrl(input.websiteUrl)) {
    errors.websiteUrl = 'Enter a valid website domain (e.g. https://shopname.com.bd).';
  }

  if (input.block.trim().length < 1) {
    errors.block = 'Specify a block or zone (e.g. Block B or Block C).';
  }

  if (input.description.trim().length < 10) {
    errors.description = 'Add a short note (at least 10 characters) describing what the shop sells.';
  }

  return errors;
}

export function createCustomShop(input: NewShopInput, existingCount: number): CosmeticShop {
  const normalizedUrl = normalizeWebsiteUrl(input.websiteUrl);
  const blockText = input.block.trim();
  const shopNumberText = input.shopNumber.trim() || `${input.level} Outlet`;
  const specialties = input.specialtiesText
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: input.name.trim(),
    category: input.category,
    levels: [input.level],
    primaryLevel: input.level,
    block: blockText,
    shopNumber: shopNumberText,
    websiteUrl: normalizedUrl,
    googleMapsUrl: buildGoogleMapsUrl(input.name, `${input.level} ${blockText}`),
    googleSearchUrl: buildGoogleSearchUrl(input.name),
    phone: input.phone.trim() || undefined,
    description: input.description.trim(),
    specialties: specialties.length > 0 ? specialties : [input.category],
    featuredRank: existingCount + 1,
    sourceLabel: 'Community Added',
    isUserAdded: true,
  };
}

export function getCategoryCounts(shops: CosmeticShop[]): Record<ShopCategory | 'All', number> {
  const counts: Record<ShopCategory | 'All', number> = {
    All: shops.length,
    'Skincare & Makeup': 0,
    'K-Beauty': 0,
    Fragrances: 0,
    'Derma & Organic': 0,
    'Personal Care': 0,
  };

  for (const shop of shops) {
    counts[shop.category] += 1;
  }

  return counts;
}

const FLOOR_DESCRIPTIONS: Record<MallLevel, string> = {
  'Level 1':
    'Primary cosmetics & fragrance corridor centered around Block C and Block D, featuring dermo-skincare, perfumeries, and department beauty.',
  'Level 2':
    'Connected multi-floor retail access including the Aarong Earth botanical beauty wing in Block B.',
  'Level 3':
    'Boutique makeup and K-Beauty cluster in Block B, popular for imported US/UK cosmetics and Korean skincare.',
  'Level 4':
    'Lifestyle beauty tools, everyday accessories, and upper-level flagship wings in Block B.',
};

export function getFloorSummaries(shops: CosmeticShop[]): FloorSummary[] {
  const targetLevels: MallLevel[] = ['Level 1', 'Level 3', 'Level 4'];

  return targetLevels.map((level) => {
    const matching = shops.filter((shop) => shop.levels.includes(level));
    const blocks = Array.from(new Set(matching.map((shop) => shop.block)));

    return {
      level,
      shopCount: matching.length,
      blocks,
      highlightNames: matching.slice(0, 4).map((shop) => shop.name),
      summaryText: FLOOR_DESCRIPTIONS[level],
    };
  });
}
