import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "ORX a complètement transformé notre présence en ligne. En un trimestre, nous avons cessé de ressembler à une startup pour devenir le leader de catégorie que nous voulions être.",
    name: "Amélie Rousseau",
    role: "CMO",
    company: "Helio Labs",
    initials: "AR",
  },
  {
    quote: "L'expérience a été de classe mondiale, du premier appel à la livraison finale. Ils se soucient de détails que la plupart des équipes ne remarquent même pas.",
    name: "Daniel Okafor",
    role: "Fondateur & PDG",
    company: "Neura.dx",
    initials: "DO",
  },
  {
    quote: "L'une des meilleures équipes créatives avec lesquelles nous avons travaillé — et nous en avons vu beaucoup. Discrètement obsessionnels, d'une franchise rafraîchissante.",
    name: "Sofia Marchetti",
    role: "Directrice Créative",
    company: "Maison Vol.II",
    initials: "SM",
  },
  {
    quote: "Ils ont transformé un restaurant de 14 ans en un rituel numérique. Les réservations ont doublé en huit semaines et notre personnel est enfin fier de la marque.",
    name: "Henrik Lindqvist",
    role: "Propriétaire",
    company: "Brasserie Nord",
    initials: "HL",
  },
  {
    quote: "Ce que ORX a livré n'était pas seulement magnifique — cela a changé la façon dont les investisseurs parlaient de nous. Notre levée de fonds s'est clôturée avec trois semaines d'avance.",
    name: "Priya Naidu",
    role: "Co-fondatrice",
    company: "Orbital",
    initials: "PN",
  },
  {
    quote: "Processus calme, goût affûté, artisanat impitoyable. Ils nous ont donné l'impression d'avoir une équipe de design senior interne.",
    name: "Marc Devereux",
    role: "Directeur Produit",
    company: "Lumen",
    initials: "MD",
  },
];

const stats = [
  { value: 142, suffix: "+", label: "Projets livrés" },
  { value: 38, suffix: "", label: "Prix de l'industrie" },
  { value: 4.96, suffix: "/5", label: "Satisfaction client", decimals: 2 },
  { value: 97, suffix: "%", label: "Rétention & Recommandation" },
];

const logos = [
  "HELIO", "NEURA.DX", "MAISON", "ORBITAL", "LUMEN", "VERRA", "BRASSERIE", "ATELIER",
];

function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>;
}

export function Testimonials() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)" }} />
      <div className="absolute right-0 bottom-20 h-[360px] w-[360px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)" }} />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-6 border border-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">Expérience client</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-[-0.045em] leading-[0.92] text-white">
              Fiers de collaborer avec<br/>
              des équipes qui <span className="text-neutral-500 italic font-light">remarquent</span> les détails.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-sm text-sm text-neutral-400 leading-relaxed font-medium"
          >
            Fondateurs, directeurs créatifs et opérateurs qui nous ont choisis une fois — puis de nouveau. Leurs mots, sans filtre.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl glass overflow-hidden mb-20 bg-white/5 border border-white/5"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-background/80 p-8 md:p-10">
              <div className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-white">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-neutral-500">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl p-8 glass overflow-hidden border border-white/5 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div
                className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ background: "rgba(255,255,255,0.05)" }}
              />
              <div className="absolute inset-0 noise opacity-20 pointer-events-none" />

              <Quote className="h-6 w-6 text-white/10 mb-5" />

              <blockquote className={`relative font-display ${i === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} font-light tracking-[-0.01em] leading-[1.35] text-white/90`}>
                "{t.quote}"
              </blockquote>

              <div className="relative mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center text-xs font-medium text-black bg-white shrink-0"
                  >
                    {t.initials}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-[11px] text-neutral-500 tracking-wide font-mono mt-0.5">{t.role} · {t.company}</div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3 w-3 fill-white/80 text-white/80" />
                  ))}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Logo wall / trust */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-20 rounded-3xl glass px-6 py-10 md:py-12 overflow-hidden border border-white/5 bg-white/[0.01]"
        >
          <div className="text-center text-[10px] tracking-[0.4em] uppercase text-neutral-600 mb-8 font-mono">
            En bonne compagnie
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-y-6 gap-x-4 items-center">
            {logos.map((l) => (
              <div
                key={l}
                className="font-display text-center text-sm md:text-base font-semibold tracking-[0.25em] text-neutral-700 hover:text-white transition-colors duration-500"
              >
                {l}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
