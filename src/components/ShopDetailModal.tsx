import { useEffect, useState } from 'react';
import {
  Bookmark,
  Check,
  Copy,
  ExternalLink,
  MapPin,
  Phone,
  Search,
  X,
} from 'lucide-react';
import { MALLS } from '../data/shops';
import type { CosmeticShop } from '../types/shop';
import { extractDisplayDomain } from '../utils/directory';

interface ShopDetailModalProps {
  shop: CosmeticShop | null;
  isSaved: boolean;
  onToggleSave: (shopId: string) => void;
  onClose: () => void;
}

export function ShopDetailModal({
  shop,
  isSaved,
  onToggleSave,
  onClose,
}: ShopDetailModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!shop) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shop, onClose]);

  useEffect(() => {
    setCopied(false);
  }, [shop?.id]);

  if (!shop) {
    return null;
  }

  const mallInfo = MALLS[shop.mall];
  const copyTarget = shop.websiteUrl ?? shop.googleMapsUrl;
  const domainLabel = extractDisplayDomain(shop.websiteUrl);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyTarget);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="shop-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18181B]/40 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-[#E7E4DF] rounded-2xl shadow-xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-6 pt-6 pb-5 border-b border-[#EFECE7] flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#9E4A56]">
              {shop.category} · {shop.sourceLabel}
            </p>
            <h2
              id="shop-detail-title"
              className="mt-1 font-serif text-2xl font-semibold text-[#18181B]"
            >
              {shop.name}
            </h2>
          </div>

          <div className="flex items-center gap-1.5 -mr-2 -mt-1 shrink-0">
            <button
              type="button"
              onClick={() => onToggleSave(shop.id)}
              aria-pressed={isSaved}
              aria-label={isSaved ? `Remove ${shop.name} from saved` : `Save ${shop.name}`}
              className={`inline-flex items-center gap-1.5 h-9 px-3 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                isSaved
                  ? 'bg-[#9E4A56] text-white border-[#9E4A56]'
                  : 'bg-white text-[#52525B] border-[#DCD7CF] hover:text-[#18181B] hover:border-[#B8B2A8]'
              }`}
            >
              <Bookmark
                className="w-3.5 h-3.5"
                fill={isSaved ? 'currentColor' : 'none'}
                aria-hidden="true"
              />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close shop details"
              className="p-2 text-[#71717A] hover:text-[#18181B] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="px-6 py-5 space-y-5">
          <p className="text-sm leading-relaxed text-[#52525B]">{shop.description}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-sm">
            <div>
              <dt className="text-xs text-[#71717A]">Mall &amp; Location</dt>
              <dd className="mt-1 font-medium text-[#18181B] tabular-nums">
                {mallInfo.shortName} · {shop.primaryLevel}
                <span className="block text-xs font-normal text-[#52525B] mt-0.5">
                  {shop.block}, {shop.shopNumber}
                </span>
              </dd>
            </div>

            <div>
              <dt className="text-xs text-[#71717A]">Official Website</dt>
              <dd className="mt-1 font-medium text-[#18181B] flex items-center gap-2">
                <span className="truncate">{domainLabel}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={`Copy website URL for ${shop.name}`}
                  className="text-xs text-[#71717A] hover:text-[#18181B] inline-flex items-center gap-1 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#15803D]" aria-hidden="true" />
                      <span className="text-[#15803D]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </dd>
            </div>

            <div>
              <dt className="text-xs text-[#71717A]">Specialties</dt>
              <dd className="mt-1 text-sm text-[#18181B]">
                {shop.specialties.join(' · ')}
              </dd>
            </div>

            <div>
              <dt className="text-xs text-[#71717A]">Mall Hours</dt>
              <dd className="mt-1 text-sm text-[#18181B]">
                {mallInfo.hours}
                <span className="block text-xs text-[#71717A] mt-0.5">
                  Closed {mallInfo.closedDay}
                </span>
              </dd>
            </div>

            {shop.phone && (
              <div className="sm:col-span-2">
                <dt className="text-xs text-[#71717A]">Contact Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${shop.phone.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#18181B] hover:text-[#9E4A56] transition-colors tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
                    <span>{shop.phone}</span>
                  </a>
                </dd>
              </div>
            )}
          </dl>

          {shop.locationNote && (
            <p className="text-xs text-[#52525B] bg-[#FAF9F7] border border-[#EFECE7] rounded-xl px-4 py-3">
              {shop.locationNote}
            </p>
          )}
        </div>

        <div className="px-6 py-4 bg-[#FAF9F7] border-t border-[#EFECE7] flex flex-wrap items-center gap-2.5">
          {shop.websiteUrl && (
            <a
              href={shop.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-10 px-4 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors whitespace-nowrap"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
          <a
            href={shop.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-10 px-4 text-sm font-medium text-[#18181B] bg-white border border-[#DCD7CF] rounded-lg hover:bg-[#F3F1EE] transition-colors whitespace-nowrap"
          >
            <MapPin className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
            <span>Google Maps</span>
          </a>
          <a
            href={shop.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-10 px-4 text-sm font-medium text-[#52525B] bg-white border border-[#DCD7CF] rounded-lg hover:text-[#18181B] transition-colors whitespace-nowrap"
          >
            <Search className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
            <span>Google Search</span>
          </a>
        </div>
      </div>
    </div>
  );
}
