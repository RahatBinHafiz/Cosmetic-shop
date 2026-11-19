import { useState } from 'react';
import {
  Bookmark,
  Check,
  Copy,
  ExternalLink,
  MapPin,
  Trash2,
} from 'lucide-react';
import { MALLS } from '../data/shops';
import type { CosmeticShop } from '../types/shop';
import { extractDisplayDomain } from '../utils/directory';

interface ShopItemProps {
  shop: CosmeticShop;
  isSaved: boolean;
  onToggleSave: (shopId: string) => void;
  onSelectShop: (shop: CosmeticShop) => void;
  onDeleteCustomShop?: (shopId: string) => void;
}

function useCopyLink(url: string) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return { copied, handleCopy };
}

export function ShopCard({
  shop,
  isSaved,
  onToggleSave,
  onSelectShop,
  onDeleteCustomShop,
}: ShopItemProps) {
  const targetUrl = shop.websiteUrl ?? shop.googleMapsUrl;
  const domainLabel = extractDisplayDomain(shop.websiteUrl);
  const mallLabel = MALLS[shop.mall].shortName;
  const fullLocation = `${mallLabel} · ${shop.primaryLevel} · ${shop.block} · ${shop.shopNumber}`;
  const { copied, handleCopy } = useCopyLink(targetUrl);

  return (
    <article
      data-testid="shop-card"
      className="group bg-white border border-[#E7E4DF] rounded-2xl p-6 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 hover:border-[#CFC9BF] hover:shadow-[0_8px_24px_-12px_rgba(24,24,27,0.12)]"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <p
            title={fullLocation}
            className="text-xs text-[#71717A] tabular-nums leading-snug truncate min-w-0"
          >
            {shop.primaryLevel} · {shop.shopNumber}
          </p>

          <div className="flex items-center gap-1 -mt-1.5 -mr-1.5 shrink-0">
            {shop.isUserAdded && onDeleteCustomShop && (
              <button
                type="button"
                onClick={() => onDeleteCustomShop(shop.id)}
                aria-label={`Remove ${shop.name}`}
                className="p-2 text-[#71717A] hover:text-[#B91C1C] rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={() => onToggleSave(shop.id)}
              aria-label={isSaved ? `Remove ${shop.name} from saved` : `Save ${shop.name}`}
              aria-pressed={isSaved}
              className={`p-2 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56] ${
                isSaved
                  ? 'text-[#9E4A56] bg-[#9E4A56]/8'
                  : 'text-[#71717A] hover:text-[#18181B] hover:bg-[#F3F1EE]'
              }`}
            >
              <Bookmark
                className="w-4 h-4"
                fill={isSaved ? 'currentColor' : 'none'}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <h3 className="mt-2 font-serif text-xl font-semibold text-[#18181B] leading-snug">
          <button
            type="button"
            onClick={() => onSelectShop(shop)}
            className="text-left hover:text-[#9E4A56] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56]"
          >
            {shop.name}
          </button>
        </h3>

        <p className="mt-1 text-xs leading-snug">
          <span className="font-medium text-[#52525B]">{mallLabel}</span>
          <span aria-hidden="true" className="mx-1.5 text-[#CFC9BF]">
            ·
          </span>
          <span className="font-medium text-[#9E4A56]">{shop.category}</span>
          {shop.isUserAdded ? <span className="text-[#71717A]"> · Added by you</span> : null}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-[#52525B]">{shop.description}</p>

        <p className="mt-3 text-xs text-[#71717A] leading-relaxed">
          {shop.specialties.join(' · ')}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#EFECE7] space-y-3">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-[#52525B] font-medium truncate">{domainLabel}</span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy link for ${shop.name}`}
            className="inline-flex items-center gap-1 text-[#71717A] hover:text-[#18181B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#15803D]" aria-hidden="true" />
                <span className="text-[#15803D] font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copy link</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {shop.websiteUrl ? (
            <a
              href={shop.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${shop.name} website`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 px-4 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56]"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          ) : (
            <a
              href={shop.googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${shop.name} on Google`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 px-4 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56]"
            >
              <span>Google Listing</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}

          <a
            href={shop.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${shop.name} on Google Maps`}
            className="inline-flex items-center justify-center gap-1.5 h-10 px-3.5 text-sm font-medium text-[#18181B] bg-white border border-[#DCD7CF] rounded-lg hover:bg-[#FAF9F7] hover:border-[#B8B2A8] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
            <span>Map</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function ShopListRow({
  shop,
  isSaved,
  onToggleSave,
  onSelectShop,
  onDeleteCustomShop,
}: ShopItemProps) {
  const targetUrl = shop.websiteUrl ?? shop.googleMapsUrl;
  const domainLabel = extractDisplayDomain(shop.websiteUrl);
  const mallLabel = MALLS[shop.mall].shortName;
  const { copied, handleCopy } = useCopyLink(targetUrl);

  return (
    <article
      data-testid="shop-row"
      className="bg-white border-b border-[#E7E4DF] last:border-b-0 px-5 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-[#FAF9F7]/70 transition-colors"
    >
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <h3 className="font-serif text-lg font-semibold text-[#18181B]">
            <button
              type="button"
              onClick={() => onSelectShop(shop)}
              className="text-left hover:text-[#9E4A56] transition-colors cursor-pointer"
            >
              {shop.name}
            </button>
          </h3>
          <span className="text-xs font-medium text-[#9E4A56]">{shop.category}</span>
          <span aria-hidden="true" className="text-xs text-[#CFC9BF]">
            ·
          </span>
          <span className="text-xs text-[#71717A] tabular-nums">
            {mallLabel} · {shop.primaryLevel}, {shop.block}, {shop.shopNumber}
          </span>
        </div>

        <p className="text-sm text-[#52525B] line-clamp-1">{shop.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy link for ${shop.name}`}
          className="inline-flex items-center gap-1.5 h-10 px-3 text-xs font-medium text-[#52525B] bg-[#FAF9F7] border border-[#E7E4DF] rounded-lg hover:text-[#18181B] transition-colors whitespace-nowrap cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#15803D]" aria-hidden="true" />
              <span className="text-[#15803D]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
              <span>{domainLabel}</span>
            </>
          )}
        </button>

        {shop.websiteUrl ? (
          <a
            href={shop.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${shop.name} website`}
            className="inline-flex items-center gap-1.5 h-10 px-4 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors whitespace-nowrap"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        ) : (
          <a
            href={shop.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${shop.name} on Google`}
            className="inline-flex items-center gap-1.5 h-10 px-4 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors whitespace-nowrap"
          >
            <span>Google Listing</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}

        <a
          href={shop.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${shop.name} on Google Maps`}
          className="inline-flex items-center gap-1.5 h-10 px-3 text-sm font-medium text-[#18181B] bg-white border border-[#DCD7CF] rounded-lg hover:bg-[#FAF9F7] transition-colors whitespace-nowrap"
        >
          <MapPin className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
          <span>Map</span>
        </a>

        <button
          type="button"
          onClick={() => onToggleSave(shop.id)}
          aria-label={isSaved ? `Remove ${shop.name} from saved` : `Save ${shop.name}`}
          aria-pressed={isSaved}
          className={`h-10 w-10 inline-flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
            isSaved
              ? 'text-[#9E4A56] border-[#9E4A56]/30 bg-[#9E4A56]/8'
              : 'text-[#71717A] border-[#DCD7CF] bg-white hover:text-[#18181B]'
          }`}
        >
          <Bookmark
            className="w-4 h-4"
            fill={isSaved ? 'currentColor' : 'none'}
            aria-hidden="true"
          />
        </button>

        {shop.isUserAdded && onDeleteCustomShop && (
          <button
            type="button"
            onClick={() => onDeleteCustomShop(shop.id)}
            aria-label={`Remove ${shop.name}`}
            className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-[#DCD7CF] bg-white text-[#71717A] hover:text-[#B91C1C] transition-colors cursor-pointer"
          >
            <Trash2 className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
}
