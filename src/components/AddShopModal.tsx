import { useEffect, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import { MALL_LEVELS, SHOP_CATEGORIES } from '../data/shops';
import type {
  MallLevel,
  NewShopInput,
  ShopCategory,
  ShopValidationErrors,
} from '../types/shop';
import { validateNewShopInput } from '../utils/directory';

interface AddShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitShop: (input: NewShopInput) => void;
}

const EMPTY_FORM: NewShopInput = {
  name: '',
  websiteUrl: '',
  category: 'Skincare & Makeup',
  level: 'Level 1',
  block: '',
  shopNumber: '',
  description: '',
  specialtiesText: '',
  phone: '',
};

export function AddShopModal({ isOpen, onClose, onSubmitShop }: AddShopModalProps) {
  const [formState, setFormState] = useState<NewShopInput>(EMPTY_FORM);
  const [errors, setErrors] = useState<ShopValidationErrors>({});

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const updateField = <K extends keyof NewShopInput>(field: K, value: NewShopInput[K]) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateNewShopInput(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmitShop(formState);
    setFormState(EMPTY_FORM);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-shop-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18181B]/40 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[88vh] flex flex-col bg-white border border-[#E7E4DF] rounded-2xl shadow-xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-6 pt-6 pb-4 border-b border-[#EFECE7] flex items-start justify-between gap-4 shrink-0">
          <div>
            <h2
              id="add-shop-title"
              className="font-serif text-2xl font-semibold text-[#18181B]"
            >
              Add a Cosmetic Shop
            </h2>
            <p className="mt-1 text-sm text-[#52525B]">
              Save another Bashundhara City store website to your personal directory.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close add shop dialog"
            className="p-2 -mr-2 -mt-1 text-[#71717A] hover:text-[#18181B] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <form
          id="add-shop-form"
          onSubmit={handleSubmit}
          noValidate
          className="px-6 py-5 space-y-4 overflow-y-auto flex-1"
        >
          <div>
            <label htmlFor="shop-name" className="block text-sm font-medium text-[#18181B]">
              Shop name <span className="text-[#9E4A56]">*</span>
            </label>
            <input
              id="shop-name"
              type="text"
              required
              value={formState.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder="e.g. Glow Studio BD"
              aria-invalid={Boolean(errors.name)}
              className="mt-1.5 w-full h-11 px-3.5 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
            />
            {errors.name && (
              <p role="alert" className="mt-1 text-xs text-[#B91C1C]">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="shop-website" className="block text-sm font-medium text-[#18181B]">
              Website URL <span className="text-[#9E4A56]">*</span>
            </label>
            <input
              id="shop-website"
              type="url"
              required
              value={formState.websiteUrl}
              onChange={(event) => updateField('websiteUrl', event.target.value)}
              placeholder="https://example.com.bd"
              aria-invalid={Boolean(errors.websiteUrl)}
              className="mt-1.5 w-full h-11 px-3.5 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
            />
            {errors.websiteUrl && (
              <p role="alert" className="mt-1 text-xs text-[#B91C1C]">
                {errors.websiteUrl}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="shop-category" className="block text-sm font-medium text-[#18181B]">
                Category
              </label>
              <select
                id="shop-category"
                value={formState.category}
                onChange={(event) =>
                  updateField('category', event.target.value as ShopCategory)
                }
                className="mt-1.5 w-full h-11 px-3 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
              >
                {SHOP_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="shop-level" className="block text-sm font-medium text-[#18181B]">
                Floor level
              </label>
              <select
                id="shop-level"
                value={formState.level}
                onChange={(event) => updateField('level', event.target.value as MallLevel)}
                className="mt-1.5 w-full h-11 px-3 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
              >
                {MALL_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="shop-block" className="block text-sm font-medium text-[#18181B]">
                Block / Zone <span className="text-[#9E4A56]">*</span>
              </label>
              <input
                id="shop-block"
                type="text"
                required
                value={formState.block}
                onChange={(event) => updateField('block', event.target.value)}
                placeholder="e.g. Block C"
                aria-invalid={Boolean(errors.block)}
                className="mt-1.5 w-full h-11 px-3.5 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
              />
              {errors.block && (
                <p role="alert" className="mt-1 text-xs text-[#B91C1C]">
                  {errors.block}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="shop-number" className="block text-sm font-medium text-[#18181B]">
                Shop number
              </label>
              <input
                id="shop-number"
                type="text"
                value={formState.shopNumber}
                onChange={(event) => updateField('shopNumber', event.target.value)}
                placeholder="e.g. Shop 44"
                className="mt-1.5 w-full h-11 px-3.5 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="shop-description" className="block text-sm font-medium text-[#18181B]">
              Products & brands carried <span className="text-[#9E4A56]">*</span>
            </label>
            <textarea
              id="shop-description"
              rows={2}
              required
              value={formState.description}
              onChange={(event) => updateField('description', event.target.value)}
              placeholder="e.g. Authentic Japanese sunscreens, serums, lip tints, and everyday makeup."
              aria-invalid={Boolean(errors.description)}
              className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
            />
            {errors.description && (
              <p role="alert" className="mt-1 text-xs text-[#B91C1C]">
                {errors.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="shop-specialties" className="block text-sm font-medium text-[#18181B]">
                Keywords (comma-separated)
              </label>
              <input
                id="shop-specialties"
                type="text"
                value={formState.specialtiesText}
                onChange={(event) => updateField('specialtiesText', event.target.value)}
                placeholder="Sunscreen, Lip Care, Brushes"
                className="mt-1.5 w-full h-11 px-3.5 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
              />
            </div>

            <div>
              <label htmlFor="shop-phone" className="block text-sm font-medium text-[#18181B]">
                Phone (optional)
              </label>
              <input
                id="shop-phone"
                type="tel"
                value={formState.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                placeholder="+880 17XX-XXXXXX"
                className="mt-1.5 w-full h-11 px-3.5 text-sm text-[#18181B] bg-[#FAF9F7] border border-[#DCD7CF] rounded-lg focus:bg-white focus:border-[#9E4A56] focus:outline-none focus:ring-2 focus:ring-[#9E4A56]/20"
              />
            </div>
          </div>
        </form>

        <div className="px-6 py-4 bg-[#FAF9F7] border-t border-[#EFECE7] flex items-center justify-end gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="h-10 px-4 text-sm font-medium text-[#52525B] bg-white border border-[#DCD7CF] rounded-lg hover:text-[#18181B] transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="add-shop-form"
            className="h-10 px-5 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors cursor-pointer"
          >
            Save to Directory
          </button>
        </div>
      </div>
    </div>
  );
}
