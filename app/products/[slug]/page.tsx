import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/lib/products";
import { ProductGallery } from "@/components/ProductGallery";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product — Sultana" };
  return {
    title: `${product.name} — Sultana`,
    description: product.tagline,
    openGraph: {
      images: [{ url: product.image, width: 800, height: 1000 }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
          <nav className="text-xs uppercase tracking-[0.2em] text-chocolate/50">
            <Link href="/" className="transition hover:text-gold">
              Home
            </Link>
            <span className="mx-2 text-chocolate/30">/</span>
            <span className="text-chocolate/70">{product.name}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn>
              <ProductGallery product={product} />
            </FadeIn>

            <div>
              <FadeIn delay={0.05}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive">
                  Sultana lab
                </p>
                <h1 className="mt-3 font-serif text-4xl text-chocolate sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-3 text-lg text-chocolate/75">{product.tagline}</p>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  {product.price}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-chocolate/75">
                  {product.description}
                </p>
                <button
                  type="button"
                  className="mt-10 inline-flex h-12 items-center justify-center border border-chocolate/15 bg-chocolate px-10 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-olive"
                >
                  Add to cart — demo
                </button>
              </FadeIn>

              <FadeIn delay={0.12} className="mt-12">
                <h2 className="font-serif text-2xl text-chocolate">Key benefits</h2>
                <ul className="mt-4 space-y-3 text-sm text-chocolate/75">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.18} className="mt-10">
                <h2 className="font-serif text-2xl text-chocolate">How to use</h2>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-chocolate/75">
                  {product.howToUse.map((step) => (
                    <li key={step} className="pl-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </FadeIn>

              <div className="mt-12 border-t border-chocolate/10 pt-8">
                <Link
                  href="/#products"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-olive underline-offset-4 transition hover:text-gold hover:underline"
                >
                  ← Back to collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
