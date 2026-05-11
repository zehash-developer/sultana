"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides: { src: string; alt: string; caption: string; sub: string }[] = [
  {
    src: "/images/moroccan-hammam.webp",
    alt: "Soft-lit hammam interior",
    caption: "Rituals from Morocco",
    sub: "Steam, clay, argan, and unhurried care.",
  },
  {
    src: "/images/moroccan-bath-Jumeirah-Village-Triangle.jpg",
    alt: "Moroccan bath setting",
    caption: "Slow hammam afternoons",
    sub: "Textures and temperature that remember the Atlas foothills.",
  },
  {
    src: "/images/Moroccan-black-soap.jpg",
    alt: "Beldi black soap jar",
    caption: "Beldi & kessa tradition",
    sub: "Golden olive paste—your prelude to silk-smooth skin.",
  },
  {
    src: "/images/sport-city-Moroccan-bath-1.jpg",
    alt: "Moroccan bath ritual",
    caption: "Curated wellness layers",
    sub: "Clay masks, cold-pressed oils, and a mist for the senses.",
  },
];

const INTERVAL_MS = 6500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const go = useCallback((n: number) => {
    setIndex(((n % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate min-h-[min(88vh,820px)] w-full overflow-hidden bg-chocolate">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            pointerEvents: i === index ? "auto" : "none",
            zIndex: i === index ? 1 : 0,
          }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/45 to-chocolate/10"
            aria-hidden
          />
        </div>
      ))}

      <div className="relative z-10 flex min-h-[min(88vh,820px)] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-cream/80">
            Sultana · Moroccan wellness
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-cream sm:text-5xl lg:text-6xl">
            {slides[index].caption}
          </h1>
          <p className="mt-4 max-w-xl text-base text-cream/85 sm:text-lg">
            {slides[index].sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex h-11 items-center justify-center border border-cream/30 bg-cream/95 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-chocolate transition hover:bg-cream"
            >
              Explore products
            </a>
            <a
              href="#rituals"
              className="inline-flex h-11 items-center justify-center border border-cream/30 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:border-cream hover:bg-cream/10"
            >
              Our story
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 flex w-full max-w-6xl items-center justify-between gap-4">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-cream/40 hover:bg-cream/70"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream/15"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream/15"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
