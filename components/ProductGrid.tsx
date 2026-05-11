import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { publicUrl } from "@/lib/publicPath";
import { FadeIn } from "./FadeIn";

export function ProductGrid() {
  return (
    <section id="products" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive">
            The collection
          </p>
          <h2 className="mt-3 font-serif text-3xl text-chocolate sm:text-4xl">
            Hammam essentials & finishing oils
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-chocolate/70">
            Each card links to a deeper story—texture shots, benefits, and a
            gentle how-to. Demo pricing for layout only.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-chocolate/10 bg-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-chocolate/5">
                <Link
                  href={`/products/${p.slug}`}
                  className="relative aspect-[4/5] w-full overflow-hidden"
                >
                  <Image
                    src={publicUrl(p.image)}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-chocolate/25 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-chocolate">{p.name}</h3>
                  <p className="mt-2 text-sm text-chocolate/75">{p.tagline}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {p.price}
                  </p>
                  <Link
                    href={`/products/${p.slug}`}
                    className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-olive underline-offset-4 transition hover:text-gold hover:underline"
                  >
                    View details
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
