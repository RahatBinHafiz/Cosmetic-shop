import { ArrowRight } from 'lucide-react';
import type { FloorSummary, MallLevel } from '../types/shop';

interface FloorGuideSectionProps {
  floors: FloorSummary[];
  activeLevel: MallLevel | 'All';
  onSelectLevel: (level: MallLevel) => void;
}

export function FloorGuideSection({
  floors,
  activeLevel,
  onSelectLevel,
}: FloorGuideSectionProps) {
  return (
    <section id="floor-guide" className="py-14 bg-white border-t border-[#E7E4DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-[#9E4A56]">Mall Layout</p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-[#18181B] tracking-tight">
            Where beauty shops cluster by floor
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Most cosmetics and fragrance outlets inside Bashundhara City sit along Level 1 (Block C
            &amp; D) and Level 3 (Block B). Select any level to filter the directory above.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {floors.map((floor) => {
            const isSelected = activeLevel === floor.level;
            return (
              <div
                key={floor.level}
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
                    onClick={() => onSelectLevel(floor.level)}
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
