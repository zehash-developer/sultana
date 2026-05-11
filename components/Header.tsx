import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-chocolate/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-serif text-2xl tracking-[0.08em] text-chocolate transition-colors group-hover:text-olive">
            Sultana
          </span>
        </Link>
        <nav
          className="flex items-center gap-6 text-sm font-medium uppercase tracking-[0.14em] text-chocolate/80"
          aria-label="Primary"
        >
          <Link
            href="/#rituals"
            className="transition-colors hover:text-gold"
          >
            Rituals
          </Link>
          <Link href="/#products" className="transition-colors hover:text-gold">
            Products
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-gold">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
