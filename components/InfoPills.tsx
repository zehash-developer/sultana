const pills = [
  { title: "Atlas botanicals", body: "Formulas inspired by hammam staples—olive, clay, rose." },
  { title: "Small-batch POV", body: "Curated textures for steam days and slow evenings." },
  { title: "Earth-first packaging", body: "Paper, glass-forward line—demo presentation only." },
  { title: "Skin wisdom", body: "Pair beldi with kessa; seal with argan—ritual, not rush." },
  { title: "Giftable sets", body: "Boxes designed for birthdays and bridal moments." },
];

export function InfoPills() {
  return (
    <section
      id="rituals"
      className="border-b border-chocolate/10 bg-cream py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive">
          Why Sultana
        </p>
        <h2 className="mt-3 font-serif text-3xl text-chocolate sm:text-4xl">
          Notes from the hammam floor
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-chocolate/70">
          A minimalist take on Moroccan bathing culture—warm neutrals, honest
          ingredients, and time carved out for you.
        </p>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {pills.map((p) => (
            <div
              key={p.title}
              className="min-w-[240px] shrink-0 rounded-2xl border border-chocolate/10 bg-white/60 px-5 py-4 shadow-[0_1px_0_rgb(44_24_16/0.04)] sm:min-w-0"
            >
              <p className="font-serif text-lg text-chocolate">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-chocolate/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
