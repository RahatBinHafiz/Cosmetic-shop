import test from 'node:test';
import assert from 'node:assert/strict';
import { INITIAL_SHOPS } from '../data/shops';
import {
  createCustomShop,
  extractDisplayDomain,
  filterAndSortShops,
  getCategoryCounts,
  getFloorSummaries,
  getMallCounts,
  normalizeWebsiteUrl,
  validateNewShopInput,
} from './directory';
import type { DirectoryFilters, NewShopInput } from '../types/shop';

const BASE_FILTERS: DirectoryFilters = {
  mall: 'All',
  query: '',
  category: 'All',
  level: 'All',
  savedOnly: false,
  websitesOnly: false,
  sortBy: 'featured',
};

test('normalizeWebsiteUrl adds https protocol and rejects invalid URLs', () => {
  assert.equal(normalizeWebsiteUrl('shopaholic.com.bd'), 'https://shopaholic.com.bd');
  assert.equal(normalizeWebsiteUrl('https://sundora.com.bd/'), 'https://sundora.com.bd');
  assert.equal(normalizeWebsiteUrl('not a domain'), null);
  assert.equal(normalizeWebsiteUrl('javascript:alert(1)'), null);
  assert.equal(normalizeWebsiteUrl(''), null);
});

test('extractDisplayDomain strips www prefix and handles null website gracefully', () => {
  assert.equal(extractDisplayDomain('https://www.thebodyshop.com.bd'), 'thebodyshop.com.bd');
  assert.equal(extractDisplayDomain('https://perfumeworld.com.bd'), 'perfumeworld.com.bd');
  assert.equal(extractDisplayDomain(null), 'In-store & Google Maps');
});

test('filterAndSortShops filters accurately by mall and Ground Floor level', () => {
  const bcShops = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, mall: 'bashundhara-city' },
    new Set()
  );
  const jfpShops = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, mall: 'jamuna-future-park' },
    new Set()
  );

  assert.equal(bcShops.length, 15);
  assert.equal(jfpShops.length, 16);
  assert.ok(bcShops.every((shop) => shop.mall === 'bashundhara-city'));
  assert.ok(jfpShops.every((shop) => shop.mall === 'jamuna-future-park'));

  const groundFloorJfp = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, mall: 'jamuna-future-park', level: 'Ground Floor' },
    new Set()
  );
  assert.ok(groundFloorJfp.length >= 10);
  assert.ok(groundFloorJfp.some((shop) => shop.id === 'jfp-sundora-beauty'));
});

test('filterAndSortShops matches queries across mall name, brand, specialties, and domain', () => {
  const sundoraResults = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, query: 'Sundora' },
    new Set()
  );
  assert.equal(sundoraResults.length, 1);
  assert.equal(sundoraResults[0].mall, 'jamuna-future-park');

  const bodyShopDomain = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, query: 'thebodyshop.com.bd' },
    new Set()
  );
  assert.equal(bodyShopDomain.length, 1);
  assert.equal(bodyShopDomain[0].id, 'jfp-the-body-shop');

  const kurilResults = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, query: 'Kuril' },
    new Set()
  );
  assert.equal(kurilResults.length, 16);
});

test('filterAndSortShops filters by category, websitesOnly, savedOnly, and sorts Ground Floor first', () => {
  const websitesOnly = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, websitesOnly: true },
    new Set()
  );
  assert.equal(websitesOnly.length, INITIAL_SHOPS.length - 2);
  assert.ok(websitesOnly.every((shop) => Boolean(shop.websiteUrl)));

  const sortedByLevel = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, sortBy: 'level-asc' },
    new Set()
  );
  assert.equal(sortedByLevel[0].primaryLevel, 'Ground Floor');
  assert.equal(sortedByLevel[sortedByLevel.length - 1].primaryLevel, 'Level 4');

  const savedOnly = filterAndSortShops(
    INITIAL_SHOPS,
    { ...BASE_FILTERS, savedOnly: true },
    new Set(['shopaholic', 'jfp-sundora-beauty'])
  );
  assert.equal(savedOnly.length, 2);
});

test('validateNewShopInput validates fields and createCustomShop targets chosen mall', () => {
  const invalidInput: NewShopInput = {
    mall: 'jamuna-future-park',
    name: '',
    websiteUrl: 'bad-url',
    category: 'Skincare & Makeup',
    level: 'Ground Floor',
    block: '',
    shopNumber: '',
    description: 'short',
    specialtiesText: '',
    phone: '',
  };

  const errors = validateNewShopInput(invalidInput);
  assert.ok(errors.name);
  assert.ok(errors.websiteUrl);
  assert.ok(errors.block);
  assert.ok(errors.description);

  const validInput: NewShopInput = {
    mall: 'jamuna-future-park',
    name: 'Glow Atelier JFP',
    websiteUrl: 'glowatelier.com.bd',
    category: 'K-Beauty',
    level: 'Ground Floor',
    block: 'Zone B',
    shopNumber: 'Shop GB-024',
    description: 'Authentic Japanese and Korean sunscreens, cleansers, and lip care.',
    specialtiesText: 'Japanese Sunscreen, Cleansers',
    phone: '+880 1700-000000',
  };

  assert.deepEqual(validateNewShopInput(validInput), {});
  const created = createCustomShop(validInput, INITIAL_SHOPS.length);
  assert.equal(created.mall, 'jamuna-future-park');
  assert.equal(created.websiteUrl, 'https://glowatelier.com.bd');
  assert.ok(created.googleMapsUrl.includes('Jamuna%20Future%20Park'));
});

test('getMallCounts, getCategoryCounts, and getFloorSummaries compute accurate multi-mall stats', () => {
  const mallCounts = getMallCounts(INITIAL_SHOPS);
  assert.equal(mallCounts.All, 31);
  assert.equal(mallCounts['bashundhara-city'], 15);
  assert.equal(mallCounts['jamuna-future-park'], 16);

  const jfpCategories = getCategoryCounts(INITIAL_SHOPS, 'jamuna-future-park');
  assert.equal(jfpCategories.All, 16);

  const bcFloors = getFloorSummaries(INITIAL_SHOPS, 'bashundhara-city');
  assert.equal(bcFloors.length, 3);
  assert.ok(bcFloors.every((floor) => floor.shopCount > 0));

  const jfpFloors = getFloorSummaries(INITIAL_SHOPS, 'jamuna-future-park');
  assert.equal(jfpFloors.length, 2);
  assert.equal(jfpFloors[0].level, 'Ground Floor');
  assert.equal(jfpFloors[1].level, 'Level 1');
});
