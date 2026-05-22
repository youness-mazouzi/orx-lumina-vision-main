const items = ["Ingénierie Système", "Web3", "Identité de Marque", "Motion Design", "Stratégie Produit", "Cloud Native", "Localisation", "Growth Ops"];
export function Marquee() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-neutral-600">{t}</span>
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
