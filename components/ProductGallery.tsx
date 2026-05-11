"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const images = product.gallery.length ? product.gallery : [product.image];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-chocolate/10 bg-white/60">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={images[active]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${product.name} view ${active + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition ${
              i === active
                ? "border-gold ring-1 ring-gold/40"
                : "border-chocolate/10 hover:border-chocolate/25"
            }`}
            aria-label={`Show image ${i + 1}`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
