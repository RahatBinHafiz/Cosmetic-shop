import { LayoutGrid, List, Bookmark, Globe } from 'lucide-react';
import { MALL_LEVELS, MALL_LIST, SHOP_CATEGORIES } from '../data/shops';
import type {
  DirectoryFilters,
  MallId,
  MallLevel,
  ShopCategory,
  SortOption,
  ViewMode,
} from '../types/shop';

interface FilterToolbarProps {
  filters: DirectoryFilters;
  onUpdateFilters: (partial: Partial<DirectoryFilters>) => void;
  mallCounts: Record<MallId | 'All', number>;
  categoryCounts: Record<ShopCategory | 'All', number>;
  savedCount: number;
  resultCount: number;
  totalCount: number;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
}

const ALL_CATEGORIES: Array<ShopCategory | 'All'> = ['All', ...SHOP_CATEGORIES];

export function FilterToolbar({
  filters,
  onUpdateFilters,
  mallCounts,
  categoryCounts,
  savedCount,
  resultCount,
  totalCount,
  viewMode,
  onViewModeChange,
  hasActiveFilters,
  onResetFilters,
}: FilterToolbarProps) {
  const mallOptions: Array<{ id: MallId | 'All'; label: string }> = [
    { id: 'All', label: 'All Malls' },
    ...MALL_LIST.map((mall) => ({ id: mall.id, label: mall.shortName })),
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3">
        <div
          role="group"
          aria-label="Filter by shopping mall"
          className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E7E4DF] rounded-xl w-full sm:w-fit"
        >
          {mallOptions.map((option) => {
            const isActive = filters.mall === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => onUpdateFilters({ mall: option.id, level: 'All' })}
                className={`px-3.5 py-2 min-h-10 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56] tabular-nums ${
                  isActive
                    ? 'bg-[#18181B] text-white'
                    : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#FAF9F7]'
                }`}
              >
                {option.label}{' '}
                <span className={isActive ? 'text-white/75' : 'text-[#71717A]'}>
                  ({mallCounts[option.id]})
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="group"
          aria-label="Filter by beauty category"
          className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F3F1EE] rounded-xl w-full sm:w-fit"
        >
          {ALL_CATEGORIES.map((category) => {
            const isActive = filters.category === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => onUpdateFilters({ category })}
                className={`px-3 py-2 min-h-10 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56] tabular-nums ${
                  isActive
                    ? 'bg-white text-[#18181B] shadow-xs'
                    : 'text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                {category}{' '}
                <span className={isActive ? 'text-[#9E4A56]' : 'text-[#71717A]'}>
                  ({categoryCounts[category]})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2">
            <label htmlFor="level-filter" className="text-xs font-medium text-[#71717A]">
              Floor
            </label>
            <select
              id="level-filter"
              value={filters.level}
              onChange={(event) =>
                onUpdateFilters({ level: event.target.value as MallLevel | 'All' })
              }
              className="h-10 px-3 text-sm text-[#18181B] bg-white border border-[#DCD7CF] rounded-lg focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20 cursor-pointer"
            >
              <option value="All">All Levels</option>
              {MALL_LEVELS.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort-order" className="text-xs font-medium text-[#71717A]">
              Sort
            </label>
            <select
              id="sort-order"
              value={filters.sortBy}
              onChange={(event) =>
                onUpdateFilters({ sortBy: event.target.value as SortOption })
              }
              className="h-10 px-3 text-sm text-[#18181B] bg-white border border-[#DCD7CF] rounded-lg focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="name-asc">Name (A–Z)</option>
              <option value="level-asc">Floor Level</option>
            </select>
          </div>

          <button
            type="button"
            aria-pressed={filters.websitesOnly}
            onClick={() => onUpdateFilters({ websitesOnly: !filters.websitesOnly })}
            className={`inline-flex items-center gap-1.5 h-10 px-3.5 text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56] ${
              filters.websitesOnly
                ? 'bg-[#18181B] text-white border-[#18181B]'
                : 'bg-white text-[#52525B] border-[#DCD7CF] hover:text-[#18181B] hover:border-[#B8B2A8]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Direct websites</span>
          </button>

          <button
            type="button"
            aria-pressed={filters.savedOnly}
            onClick={() => onUpdateFilters({ savedOnly: !filters.savedOnly })}
            className={`inline-flex items-center gap-1.5 h-10 px-3.5 text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56] ${
              filters.savedOnly
                ? 'bg-[#9E4A56] text-white border-[#9E4A56]'
                : 'bg-white text-[#52525B] border-[#DCD7CF] hover:text-[#18181B] hover:border-[#B8B2A8]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Saved ({savedCount})</span>
          </button>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4">
          <div className="flex items-center gap-3 text-sm text-[#52525B] tabular-nums">
            <span data-testid="results-count">
              Showing {resultCount} of {totalCount}
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="text-sm font-medium text-[#9E4A56] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap"
              >
                Reset
              </button>
            )}
          </div>

          <div
            role="group"
            aria-label="Directory layout view"
            className="inline-flex items-center p-1 bg-[#F3F1EE] rounded-lg shrink-0"
          >
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={viewMode === 'list'}
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
            >
              <List className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
