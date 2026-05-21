import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "ORX completely transformed our online presence. Within a quarter we stopped looking like a startup and started looking like the category leader we wanted to be.",
    name: "Amélie Rousseau",
    role: "CMO",
    company: "Helio Labs",
    initials: "AR",
    accent: "oklch(0.72 0.22 245)",
  },
  {
    quote: "The experience felt world-class from the first call to the final handover. They sweat details most teams don't even notice.",
    name: "Daniel Okafor",
    role: "Founder & CEO",
    company: "Neura.dx",
    initials: "DO",
    accent: "oklch(0.65 0.28 300)",
  },
  {
    quote: "One of the best creative teams we've worked with — and we've worked with a lot. Quietly obsessive, refreshingly opinionated.",
    name: "Sofia Marchetti",
    role: "Creative Director",
    company: "Maison Vol.II",
    initials: "SM",
    accent: "oklch(0.78 0.1 60)",
  },
  {
    quote: "They translated a 14-year-old restaurant into a digital ritual. Bookings doubled in eight weeks and our staff finally feels proud of the brand.",
    name: "Henrik Lindqvist",
    role: "Owner",
    company: "Brasserie Nord",
    initials: "HL",
    accent: "oklch(0.75 0.14 130)",
  },
  {
    quote: "What ORX shipped didn't just look beautiful — it shifted how investors talked about us. The seed round closed three weeks ahead of plan.",
    name: "Priya Naidu",
    role: "Co-founder",
    company: "Orbital",
    initials: "PN",
    accent: "oklch(0.74 0.18 200)",
  },
  {
    quote: "Calm process, sharp taste, ruthless craft. They made us feel like we had a senior design team for the price of a project.",
    name: "Marc Devereux",
    role: "Head of Product",
    company: "Lumen",
    initials: "MD",
    accent: "oklch(0.7 0.2 280)",
  },
];

const stats = [
  { value: 142, suffix: "+", label: "Projects shipped" },
  { value: 38, suffix: "", label: "Industry awards" },
  { value: 4.96, suffix: "/5", label: "Client satisfaction", decimals: 2 },
  { value: 97, suffix: "%", label: "Repeat & referral" },
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
      <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.28 300 / 0.45), transparent 70%)" }} />
      <div className="absolute right-0 bottom-20 h-[360px] w-[360px] rounded-full opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.22 245 / 0.45), transparent 70%)" }} />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.22_245)] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Client experience</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-[-0.045em] leading-[0.92]">
              Trusted by teams<br/>
              who <span className="text-gradient italic font-light">notice</span> the details.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-sm text-sm text-muted-foreground leading-relaxed"
          >
            Founders, creative directors and operators who chose us once — and
            then again. Their words, unedited.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl glass overflow-hidden mb-20 bg-white/5"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-background/60 p-8 md:p-10">
              <div className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-gradient">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{s.label}</div>
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
              className={`group relative rounded-3xl p-8 glass overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Hover accent */}
              <div
                className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ background: t.accent }}
              />
              <div className="absolute inset-0 noise opacity-30 pointer-events-none" />

              <Quote className="h-6 w-6 text-white/20 mb-5" />

              <blockquote className={`relative font-display ${i === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} font-light tracking-[-0.01em] leading-[1.35] text-white/90`}>
                "{t.quote}"
              </blockquote>

              <div className="relative mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center text-xs font-medium text-white/95 shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.accent}, oklch(0.2 0.04 270))`, boxShadow: `0 0 24px ${t.accent}55` }}
                  >
                    {t.initials}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm text-white">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground tracking-wide">{t.role} · {t.company}</div>
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
          className="mt-20 rounded-3xl glass px-6 py-10 md:py-12 overflow-hidden"
        >
          <div className="text-center text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
            In good company
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-y-6 gap-x-4 items-center">
            {logos.map((l) => (
              <div
                key={l}
                className="font-display text-center text-sm md:text-base font-medium tracking-[0.25em] text-white/40 hover:text-white transition-colors duration-500"
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
