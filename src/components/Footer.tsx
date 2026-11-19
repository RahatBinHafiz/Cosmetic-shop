import { ExternalLink, MapPin } from 'lucide-react';
import { MALL_INFO } from '../data/shops';

export function Footer() {
  return (
    <footer id="about-mall" className="bg-[#FAF9F7] border-t border-[#E7E4DF] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#E7E4DF]">
          <div className="md:col-span-5 space-y-2">
            <p className="font-serif text-lg font-semibold text-[#18181B]">
              Bashundhara Beauty
            </p>
            <p className="text-sm text-[#52525B] leading-relaxed max-w-sm">
              An independent, minimalist directory compiling official online storefronts and Google
              Maps locations for cosmetic shops inside {MALL_INFO.name}.
            </p>
          </div>

          <div className="md:col-span-4 space-y-1.5 text-sm">
            <p className="font-medium text-[#18181B]">Visitor Information</p>
            <p className="text-[#52525B]">{MALL_INFO.address}</p>
            <p className="text-[#52525B]">{MALL_INFO.hours}</p>
            <p className="text-[#71717A] text-xs">Weekly holiday: {MALL_INFO.closedDay}</p>
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-4">
            <a
              href={MALL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-10 px-4 text-sm font-medium text-[#18181B] bg-white border border-[#DCD7CF] rounded-lg hover:bg-[#F3F1EE] transition-colors whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-[#9E4A56]" aria-hidden="true" />
              <span>Open Mall in Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#71717A]">
          <p>
            Shop locations and website links are compiled from public store directories and Google
            Maps.
          </p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
