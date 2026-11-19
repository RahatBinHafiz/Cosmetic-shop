import { useEffect, useMemo, useRef, useState } from 'react';
import { AddShopModal } from './components/AddShopModal';
import { FilterToolbar } from './components/FilterToolbar';
import { FloorGuideSection } from './components/FloorGuideSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ShopCard, ShopListRow } from './components/ShopCard';
import { ShopDetailModal } from './components/ShopDetailModal';
import { INITIAL_SHOPS } from './data/shops';
import type {
  CosmeticShop,
  DirectoryFilters,
  MallId,
  MallLevel,
  NewShopInput,
  ViewMode,
} from './types/shop';
import {
  createCustomShop,
  filterAndSortShops,
  getCategoryCounts,
  getFloorSummaries,
  getMallCounts,
} from './utils/directory';

const STORAGE_SAVED_KEY = 'bashundhara-beauty-saved-ids-v1';
const STORAGE_CUSTOM_SHOPS_KEY = 'bashundhara-beauty-custom-shops-v1';

const DEFAULT_FILTERS: DirectoryFilters = {
  mall: 'All',
  query: '',
  category: 'All',
  level: 'All',
  savedOnly: false,
  websitesOnly: false,
  sortBy: 'featured',
};

function readStoredIds(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_SAVED_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

function readStoredCustomShops(): CosmeticShop[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_CUSTOM_SHOPS_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.map((shop) => ({
      ...(shop as CosmeticShop),
      mall: (shop as Partial<CosmeticShop>).mall ?? 'bashundhara-city',
    }));
  } catch {
    return [];
  }
}

export default function App() {
  const [customShops, setCustomShops] = useState<CosmeticShop[]>(readStoredCustomShops);
  const [savedIds, setSavedIds] = useState<string[]>(readStoredIds);
  const [filters, setFilters] = useState<DirectoryFilters>(DEFAULT_FILTERS);
  const [guideMall, setGuideMall] = useState<MallId>('bashundhara-city');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedShop, setSelectedShop] = useState<CosmeticShop | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const directoryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(savedIds));
    } catch {
      // Ignore storage quota issues in restricted environments.
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_CUSTOM_SHOPS_KEY, JSON.stringify(customShops));
    } catch {
      // Ignore storage quota issues in restricted environments.
    }
  }, [customShops]);

  useEffect(() => {
    if (filters.mall !== 'All') {
      setGuideMall(filters.mall);
    }
  }, [filters.mall]);

  useEffect(() => {
    const handleSlashShortcut = (event: KeyboardEvent) => {
      if (
        event.key !== '/' ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        isAddModalOpen ||
        selectedShop
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const isTypingField =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable);

      if (!isTypingField) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleSlashShortcut);
    return () => window.removeEventListener('keydown', handleSlashShortcut);
  }, [isAddModalOpen, selectedShop]);

  const allShops = useMemo(() => [...customShops, ...INITIAL_SHOPS], [customShops]);
  const savedSet = useMemo(() => new Set(savedIds), [savedIds]);

  const filteredShops = useMemo(
    () => filterAndSortShops(allShops, filters, savedSet),
    [allShops, filters, savedSet]
  );

  const mallCounts = useMemo(() => getMallCounts(allShops), [allShops]);
  const categoryCounts = useMemo(
    () => getCategoryCounts(allShops, filters.mall),
    [allShops, filters.mall]
  );
  const floorSummaries = useMemo(
    () => getFloorSummaries(allShops, guideMall),
    [allShops, guideMall]
  );
  const directWebsiteCount = useMemo(
    () => allShops.filter((shop) => Boolean(shop.websiteUrl)).length,
    [allShops]
  );

  const hasActiveFilters =
    filters.mall !== 'All' ||
    filters.query.trim().length > 0 ||
    filters.category !== 'All' ||
    filters.level !== 'All' ||
    filters.savedOnly ||
    filters.websitesOnly ||
    filters.sortBy !== 'featured';

  const handleUpdateFilters = (partial: Partial<DirectoryFilters>) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const handleToggleSave = (shopId: string) => {
    setSavedIds((prev) =>
      prev.includes(shopId) ? prev.filter((id) => id !== shopId) : [...prev, shopId]
    );
  };

  const handleAddShop = (input: NewShopInput) => {
    const created = createCustomShop(input, allShops.length);
    setCustomShops((prev) => [created, ...prev]);
    setFilters(DEFAULT_FILTERS);
    directoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDeleteCustomShop = (shopId: string) => {
    setCustomShops((prev) => prev.filter((shop) => shop.id !== shopId));
    setSavedIds((prev) => prev.filter((id) => id !== shopId));
    if (selectedShop?.id === shopId) {
      setSelectedShop(null);
    }
  };

  const handleSelectFloor = (mall: MallId, level: MallLevel) => {
    setFilters((prev) => ({
      ...prev,
      mall,
      level,
      savedOnly: false,
    }));
    directoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleJumpToSaved = () => {
    setFilters((prev) => ({
      ...prev,
      savedOnly: !prev.savedOnly,
    }));
    directoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleQuickSearch = (term: string) => {
    setFilters((prev) => ({
      ...prev,
      query: term,
      savedOnly: false,
    }));
    directoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const defaultAddMall: MallId =
    filters.mall === 'All' ? 'bashundhara-city' : filters.mall;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7] text-[#18181B]">
      <Header
        savedCount={savedIds.length}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onJumpToSaved={handleJumpToSaved}
      />

      <main className="flex-1">
        <HeroSection
          query={filters.query}
          onQueryChange={(query) => handleUpdateFilters({ query })}
          searchInputRef={searchInputRef}
          totalShops={allShops.length}
          directWebsiteCount={directWebsiteCount}
          onQuickSearch={handleQuickSearch}
        />

        <section
          id="directory"
          ref={directoryRef}
          aria-labelledby="directory-heading"
          className="py-12 lg:py-14"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2
                id="directory-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight"
              >
                Shop Directory
              </h2>
            </div>

            <FilterToolbar
              filters={filters}
              onUpdateFilters={handleUpdateFilters}
              mallCounts={mallCounts}
              categoryCounts={categoryCounts}
              savedCount={savedIds.length}
              resultCount={filteredShops.length}
              totalCount={allShops.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              hasActiveFilters={hasActiveFilters}
              onResetFilters={handleResetFilters}
            />

            {filteredShops.length === 0 ? (
              <div className="mt-8 bg-white border border-[#E7E4DF] rounded-2xl px-6 py-14 text-center">
                <p className="font-serif text-xl font-semibold text-[#18181B]">
                  {filters.savedOnly && savedIds.length === 0
                    ? 'No saved shops yet'
                    : 'No cosmetic shops match your current filters'}
                </p>
                <p className="mt-2 text-sm text-[#52525B] max-w-md mx-auto">
                  {filters.savedOnly && savedIds.length === 0
                    ? 'Bookmark any shop card to keep your favorite Bashundhara City and Jamuna Future Park cosmetic websites handy.'
                    : 'Try broadening your search keyword or resetting the active mall, category, and floor filters.'}
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-6 h-10 px-5 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div
                data-testid="shop-grid"
                className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredShops.map((shop) => (
                  <ShopCard
                    key={shop.id}
                    shop={shop}
                    isSaved={savedSet.has(shop.id)}
                    onToggleSave={handleToggleSave}
                    onSelectShop={setSelectedShop}
                    onDeleteCustomShop={handleDeleteCustomShop}
                  />
                ))}
              </div>
            ) : (
              <div
                data-testid="shop-list"
                className="mt-7 bg-white border border-[#E7E4DF] rounded-2xl overflow-hidden"
              >
                {filteredShops.map((shop) => (
                  <ShopListRow
                    key={shop.id}
                    shop={shop}
                    isSaved={savedSet.has(shop.id)}
                    onToggleSave={handleToggleSave}
                    onSelectShop={setSelectedShop}
                    onDeleteCustomShop={handleDeleteCustomShop}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <FloorGuideSection
          guideMall={guideMall}
          onGuideMallChange={setGuideMall}
          floors={floorSummaries}
          activeMall={filters.mall}
          activeLevel={filters.level}
          onSelectFloor={handleSelectFloor}
        />
      </main>

      <Footer />

      <ShopDetailModal
        shop={selectedShop}
        isSaved={selectedShop ? savedSet.has(selectedShop.id) : false}
        onToggleSave={handleToggleSave}
        onClose={() => setSelectedShop(null)}
      />

      <AddShopModal
        isOpen={isAddModalOpen}
        defaultMall={defaultAddMall}
        onClose={() => setIsAddModalOpen(false)}
        onSubmitShop={handleAddShop}
      />
    </div>
  );
}
