import { useState, type RefObject } from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  query: string;
  onQueryChange: (value: string) => void;
  searchInputRef: RefObject<HTMLInputElement | null>;
  totalShops: number;
  directWebsiteCount: number;
  onQuickSearch: (term: string) => void;
}

const QUICK_SEARCH_TERMS = ['Korean', 'Perfume', 'Flormar', 'Level 3', 'Derma'];

export function HeroSection({
  query,
  onQueryChange,
  searchInputRef,
  totalShops,
  directWebsiteCount,
  onQuickSearch,
}: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="top" className="bg-white border-b border-[#E7E4DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 lg:pt-14 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <p className="text-sm text-[#71717A]">
                Bashundhara City Shopping Complex · Panthapath, Dhaka
              </p>

              <h1 className="font-serif text-[clamp(2.25rem,3.8vw,3.35rem)] font-semibold leading-[1.12] tracking-tight text-[#18181B]">
                Cosmetic shop websites, indexed by floor.
              </h1>

              <p className="text-base leading-relaxed text-[#52525B] max-w-xl">
                A curated, searchable directory of skincare, makeup, K-beauty, and fragrance
                stores inside Bashundhara City—compiled from Google Maps and official store portals
                for one-click access.
              </p>
            </div>

            <div className="space-y-3">
              <label htmlFor="directory-search" className="sr-only">
                Search cosmetic shops, brands, floor levels, or websites
              </label>
              <div className="relative flex items-center">
                <Search
                  aria-hidden="true"
                  className="w-4 h-4 text-[#71717A] absolute left-4 pointer-events-none"
                />
                <input
                  ref={searchInputRef}
                  id="directory-search"
                  type="search"
                  value={query}
                  onChange={(event) => onQueryChange(event.target.value)}
                  placeholder="Search shop, brand, floor, or website..."
                  className="w-full h-12 pl-11 pr-12 text-sm sm:text-[15px] text-[#18181B] placeholder:text-[#71717A] bg-[#FAF9F7] border border-[#DCD7CF] rounded-xl focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20 transition-colors"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => onQueryChange('')}
                    aria-label="Clear search query"
                    className="absolute right-2.5 p-2 text-[#71717A] hover:text-[#18181B] rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <kbd
                    aria-hidden="true"
                    className="hidden sm:inline-flex items-center justify-center absolute right-3.5 px-2 py-0.5 text-xs text-[#71717A] bg-white border border-[#E7E4DF] rounded-md"
                  >
                    /
                  </kbd>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs text-[#71717A]">
                <span>Quick lookup:</span>
                {QUICK_SEARCH_TERMS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => onQuickSearch(term)}
                    className="text-[#52525B] hover:text-[#9E4A56] underline underline-offset-4 decoration-[#DCD7CF] hover:decoration-[#9E4A56] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-64 sm:h-72 lg:h-full min-h-[260px] rounded-2xl overflow-hidden bg-[#F3F1EE] border border-[#E7E4DF]">
              {!imageError ? (
                <img
                  src="/src/assets/images/hero_minimalist_cosmetics_1795068134308.jpg"
                  alt="Minimalist frosted glass skincare bottles, porcelain cream jar, and dusty rose lipstick arranged on white travertine stone"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F3F1EE] text-[#52525B]">
                  <Sparkles className="w-6 h-6 mb-3 text-[#9E4A56]" aria-hidden="true" />
                  <p className="font-serif text-lg text-[#18181B]">Bashundhara Beauty Index</p>
                  <p className="text-xs text-[#71717A] mt-1">Skincare, Makeup & Fragrances</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <dl className="mt-10 pt-8 border-t border-[#E7E4DF] grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <dt className="text-xs text-[#71717A]">Compiled Outlets</dt>
            <dd className="mt-1 text-xl font-semibold text-[#18181B] tabular-nums">
              {totalShops} Shops
            </dd>
          </div>
          <div>
            <dt className="text-xs text-[#71717A]">Direct Online Portals</dt>
            <dd className="mt-1 text-xl font-semibold text-[#18181B] tabular-nums">
              {directWebsiteCount} Websites
            </dd>
          </div>
          <div>
            <dt className="text-xs text-[#71717A]">Mall Coverage</dt>
            <dd className="mt-1 text-xl font-semibold text-[#18181B] tabular-nums">
              Levels 1 – 4
            </dd>
          </div>
          <div>
            <dt className="text-xs text-[#71717A]">Weekly Schedule</dt>
            <dd className="mt-1 text-xl font-semibold text-[#18181B]">
              Closed Tuesdays
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
