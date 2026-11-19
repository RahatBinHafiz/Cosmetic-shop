import { ArrowRight } from 'lucide-react';
import { MALL_LIST } from '../data/shops';
import type { FloorSummary, MallId, MallLevel } from '../types/shop';

interface FloorGuideSectionProps {
  guideMall: MallId;
  onGuideMallChange: (mall: MallId) => void;
  floors: FloorSummary[];
  activeMall: MallId | 'All';
  activeLevel: MallLevel | 'All';
  onSelectFloor: (mall: MallId, level: MallLevel) => void;
}

export function FloorGuideSection({
  guideMall,
  onGuideMallChange,
  floors,
  activeMall,
  activeLevel,
  onSelectFloor,
}: FloorGuideSectionProps) {
  const isJfp = guideMall === 'jamuna-future-park';

  return (
    <section id="floor-guide" className="py-14 bg-white border-t border-[#E7E4DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#9E4A56]">Mall Layout</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-[#18181B] tracking-tight">
              Where beauty shops cluster by floor
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#52525B] leading-relaxed">
              {isJfp
                ? 'At Jamuna Future Park, luxury perfumeries and major skincare storefronts anchor the Ground Floor (Zone A, Zone B & West Court), with K-Beauty and lifestyle stores on Level 1.'
                : 'Inside Bashundhara City, cosmetics and fragrance stores concentrate along Level 1 (Block C & D) and Level 3 (Block B). Select any floor to filter the directory above.'}
            </p>
          </div>

          <div
            role="group"
            aria-label="Select mall for floor guide"
            className="flex items-center gap-1 p-1 bg-[#F3F1EE] rounded-xl w-fit shrink-0"
          >
            {MALL_LIST.map((mall) => {
              const isSelected = guideMall === mall.id;
              return (
                <button
                  key={mall.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onGuideMallChange(mall.id)}
                  className={`px-3.5 py-2 min-h-10 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#52525B] hover:text-[#18181B]'
                  }`}
                >
                  {mall.shortName}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-8 grid grid-cols-1 gap-6 ${
            floors.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
          }`}
        >
          {floors.map((floor) => {
            const isSelected =
              (activeMall === 'All' || activeMall === floor.mall) &&
              activeLevel === floor.level;
            return (
              <div
                key={`${floor.mall}-${floor.level}`}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-colors ${
                  isSelected
                    ? 'bg-[#FAF9F7] border-[#9E4A56]'
                    : 'bg-[#FAF9F7]/60 border-[#E7E4DF]'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-semibold text-[#18181B] tabular-nums">
                      {floor.level}
                    </h3>
                    <span className="text-xs font-medium text-[#71717A] tabular-nums">
                      {floor.shopCount} {floor.shopCount === 1 ? 'outlet' : 'outlets'}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
                    {floor.summaryText}
                  </p>

                  <p className="mt-4 text-xs text-[#71717A] leading-relaxed">
                    Notable stops: {floor.highlightNames.join(' · ')}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E4DF]">
                  <button
                    type="button"
                    onClick={() => onSelectFloor(floor.mall, floor.level)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#18181B] hover:text-[#9E4A56] transition-colors cursor-pointer"
                  >
                    <span>Browse {floor.level} websites</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
