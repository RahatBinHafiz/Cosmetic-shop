import test from 'node:test';
import assert from 'node:assert/strict';
import { INITIAL_SHOPS } from '../data/shops';
import {
  createCustomShop,
  extractDisplayDomain,
  filterAndSortShops,
  getCategoryCounts,
  getFloorSummaries,
  normalizeWebsiteUrl,
  validateNewShopInput,
} from './directory';
import type { DirectoryFilters, NewShopInput } from '../types/shop';

const BASE_FILTERS: DirectoryFilters = {
  query: '',
  category: 'All',
  level: 'All',
  savedOnly: false,
  websitesOnly: false,
  sortBy: 'featured',
};

test('normalizeWebsiteUrl adds https protocol and rejects invalid URLs', () => {
  assert.equal(normalizeWebsiteUrl('shopaholic.com.bd'), 'https://shopaholic.com.bd');
  assert.equal(normalizeWebsiteUrl('https://beautysiaa.com/'), 'https://beautysiaa.com');
  assert.equal(normalizeWebsiteUrl('not a domain'), null);
  assert.equal(normalizeWebsiteUrl('javascript:alert(1)'), null);
  assert.equal(normalizeWebsiteUrl(''), null);
});

test('extractDisplayDomain strips www prefix and handles null website gracefully', () => {
  assert.equal(extractDisplayDomain('https://www.aarong.com'), 'aarong.com');
  assert.equal(extractDisplayDomain('https://perfumeworld.com.bd'), 'perfumeworld.com.bd');
  assert.equal(extractDisplayDomain(null), 'In-store & Google Maps');
});

test('filterAndSortShops matches queries across name, specialties, level, and domain', () => {
  const kBeautyResults = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, query: 'Korean' },
    new Set()
  );
  assert.ok(kBeautyResults.length >= 2);
  assert.ok(kBeautyResults.some((shop) => shop.id === 'shijang'));
  assert.ok(kBeautyResults.some((shop) => shop.id === 'bd-budget-beauty'));

  const domainResults = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, query: 'bioxin.com' },
    new Set()
  );
  assert.equal(domainResults.length, 1);
  assert.equal(domainResults[0].id, 'bioxin-cosmeceuticals');
});

test('filterAndSortShops filters by category, level, websitesOnly, and savedOnly', () => {
  const fragrances = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, category: 'Fragrances' },
    new Set()
  );
  assert.equal(fragrances.length, 3);
  assert.ok(fragrances.every((shop) => shop.category === 'Fragrances'));

  const level3 = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, level: 'Level 3' },
    new Set()
  );
  assert.ok(level3.every((shop) => shop.levels.includes('Level 3')));
  assert.ok(level3.some((shop) => shop.id === 'shopaholic'));

  const websitesOnly = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, websitesOnly: true },
    new Set()
  );
  assert.equal(websitesOnly.length, INITIAL_SHOPS.length - 1);
  assert.ok(websitesOnly.every((shop) => Boolean(shop.websiteUrl)));

  const savedOnly = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, savedOnly: true },
    new Set(['shopaholic', 'shijang'])
  );
  assert.equal(savedOnly.length, 2);
});

test('filterAndSortShops sorts alphabetically and by floor level', () => {
  const sortedByName = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, sortBy: 'name-asc' },
    new Set()
  );
  assert.equal(sortedByName[0].name, 'Aarong Earth (Aarong Flagship)');

  const sortedByLevel = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, sortBy: 'level-asc' },
    new Set()
  );
  assert.equal(sortedByLevel[0].primaryLevel, 'Level 1');
  assert.equal(sortedByLevel[sortedByLevel.length - 1].primaryLevel, 'Level 4');
});

test('validateNewShopInput catches missing/invalid fields and accepts valid input', () => {
  const emptyInput: NewShopInput = {
    name: '',
    websiteUrl: 'bad-url',
    category: 'Skincare & Makeup',
    level: 'Level 1',
    block: '',
    shopNumber: '',
    description: 'short',
    specialtiesText: '',
    phone: '',
  };

  const errors = validateNewShopInput(emptyInput);
  assert.ok(errors.name);
  assert.ok(errors.websiteUrl);
  assert.ok(errors.block);
  assert.ok(errors.description);

  const validInput: NewShopInput = {
    name: 'Glow Atelier',
    websiteUrl: 'glowatelier.com.bd',
    category: 'K-Beauty',
    level: 'Level 3',
    block: 'Block B',
    shopNumber: 'Shop 51',
    description: 'Authentic Japanese and Korean sunscreens, cleansers, and lip care.',
    specialtiesText: 'Japanese Sunscreen, Cleansers',
    phone: '+880 1700-000000',
  };

  const noErrors = validateNewShopInput(validInput);
  assert.deepEqual(noErrors, {});

  const created = createCustomShop(validInput, INITIAL_SHOPS.length);
  assert.equal(created.websiteUrl, 'https://glowatelier.com.bd');
  assert.equal(created.isUserAdded, true);
  assert.deepEqual(created.specialties, ['Japanese Sunscreen', 'Cleansers']);
});

test('getCategoryCounts and getFloorSummaries produce accurate directory aggregates', () => {
  const counts = getCategoryCounts(INITIAL_SHOPS);
  assert.equal(counts.All, INITIAL_SHOPS.length);
  assert.equal(
    counts['Skincare & Makeup'] +
      counts['K-Beauty'] +
      counts.Fragrances +
      counts['Derma & Organic'] +
      counts['Personal Care'],
    INITIAL_SHOPS.length
  );

  const floors = getFloorSummaries(INITIAL_SHOPS);
  assert.equal(floors.length, 3);
  assert.ok(floors.every((floor) => floor.shopCount > 0));
});
