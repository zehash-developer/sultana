"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="border-t border-chocolate/10 bg-sand/30 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive">
              Concierge
            </p>
            <h2 className="mt-3 font-serif text-3xl text-chocolate sm:text-4xl">
              Tell us your ritual
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-chocolate/75">
              This is a demo contact form—nothing is sent. Submit to see a
              gracious confirmation state styled like a luxury apothecary note.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-chocolate/10 bg-white/80 p-6 shadow-sm sm:p-8"
            >
              {sent ? (
                <p className="font-serif text-xl text-olive">
                  Thank you—your note is received.
                </p>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-chocolate/60">
                      Name
                      <input
                        required
                        name="name"
                        className="mt-2 w-full border-b border-chocolate/15 bg-transparent py-2 text-sm text-chocolate outline-none transition focus:border-gold"
                        type="text"
                        autoComplete="name"
                      />
                    </label>
                    <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-chocolate/60">
                      Email
                      <input
                        required
                        name="email"
                        className="mt-2 w-full border-b border-chocolate/15 bg-transparent py-2 text-sm text-chocolate outline-none transition focus:border-gold"
                        type="email"
                        autoComplete="email"
                      />
                    </label>
                  </div>
                  <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.16em] text-chocolate/60">
                    Message
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="mt-2 w-full resize-y border border-chocolate/10 bg-cream/40 px-3 py-2 text-sm text-chocolate outline-none transition focus:border-gold"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-8 inline-flex h-12 items-center justify-center bg-chocolate px-10 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:bg-olive"
                  >
                    Send
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
