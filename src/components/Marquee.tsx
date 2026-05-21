const items = ["Systems Engineering", "Web3", "Brand Systems", "Motion Design", "Product Strategy", "Cloud Native", "Localization", "Growth Ops"];
export function Marquee() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-muted-foreground/40">{t}</span>
            <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.28_300)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
