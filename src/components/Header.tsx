interface HeaderProps {
  savedCount: number;
  onOpenAddModal: () => void;
  onJumpToSaved: () => void;
}

export function Header({ savedCount, onOpenAddModal, onJumpToSaved }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-[#E7E4DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E4A56]"
        >
          Dhaka Beauty Index
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52525B]"
        >
          <a
            href="#directory"
            className="hover:text-[#18181B] hover:underline underline-offset-4 decoration-[#9E4A56]/50 transition-colors whitespace-nowrap shrink-0"
          >
            Directory
          </a>
          <a
            href="#floor-guide"
            className="hover:text-[#18181B] hover:underline underline-offset-4 decoration-[#9E4A56]/50 transition-colors whitespace-nowrap shrink-0"
          >
            Floor Guide
          </a>
          <button
            type="button"
            onClick={onJumpToSaved}
            className="hover:text-[#18181B] hover:underline underline-offset-4 decoration-[#9E4A56]/50 transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums"
          >
            {savedCount > 0 ? `Saved (${savedCount})` : 'Saved'}
          </button>
          <a
            href="#about-mall"
            className="hover:text-[#18181B] hover:underline underline-offset-4 decoration-[#9E4A56]/50 transition-colors whitespace-nowrap shrink-0"
          >
            Mall Info
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenAddModal}
            className="px-4 py-2 min-h-10 text-sm font-medium text-white bg-[#18181B] rounded-lg hover:bg-[#27272A] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4A56]"
          >
            Add a Shop
          </button>
        </div>
      </div>
    </header>
  );
}
