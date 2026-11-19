import { ExternalLink, MapPin } from 'lucide-react';
import { MALL_LIST } from '../data/shops';

export function Footer() {
  return (
    <footer id="about-mall" className="bg-[#FAF9F7] border-t border-[#E7E4DF] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-[#E7E4DF]">
          <div className="lg:col-span-4 space-y-2">
            <p className="font-serif text-lg font-semibold text-[#18181B]">
              Dhaka Beauty Index
            </p>
            <p className="text-sm text-[#52525B] leading-relaxed max-w-sm">
              An independent, minimalist directory compiling official online storefronts and Google
              Maps locations for cosmetic shops inside Bashundhara City and Jamuna Future Park.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MALL_LIST.map((mall) => (
              <div key={mall.id} className="space-y-1.5 text-sm">
                <p className="font-medium text-[#18181B]">{mall.name}</p>
                <p className="text-[#52525B]">{mall.address}</p>
                <p className="text-[#52525B]">{mall.hours}</p>
                <p className="text-[#71717A] text-xs">Weekly holiday: {mall.closedDay}</p>
                <div className="pt-2">
                  <a
                    href={mall.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#18181B] hover:text-[#9E4A56] underline underline-offset-4 decoration-[#DCD7CF] hover:decoration-[#9E4A56] transition-colors whitespace-nowrap"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#9E4A56]" aria-hidden="true" />
                    <span>Open {mall.shortName} in Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#71717A]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
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
