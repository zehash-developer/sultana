import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-chocolate/10 bg-sand/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-serif text-3xl tracking-[0.06em] text-chocolate">
            Sultana
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-chocolate/75">
            Rituals from Morocco—beldi, clay, argan, and quiet steam. Demo
            storefront for portfolio use.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-chocolate/50">
          <a href="#" className="transition-colors hover:text-gold">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-gold">
            Pinterest
          </a>
          <Link href="/#contact" className="transition-colors hover:text-gold">
            Concierge
          </Link>
        </div>
      </div>
      <div className="border-t border-chocolate/10 py-6 text-center text-[11px] text-chocolate/45">
        © {new Date().getFullYear()} Sultana demo — not a live store.
      </div>
    </footer>
  );
}
