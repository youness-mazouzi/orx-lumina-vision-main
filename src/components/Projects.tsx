import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  services: string[];
  metric: { value: string; label: string };
  palette: { from: string; to: string; accent: string };
  layout: "wide" | "tall" | "square";
  mockup: "saas" | "automation" | "fashion" | "restaurant" | "mobile" | "portfolio" | "campaign" | "startup";
};

const projects: Project[] = [
  {
    id: "01",
    client: "Helio Labs",
    title: "Operating system for autonomous teams",
    category: "SaaS Platform",
    year: "MMXXVI",
    services: ["Product", "Brand", "Web"],
    metric: { value: "+312%", label: "Activation lift" },
    palette: { from: "oklch(0.22 0.06 270)", to: "oklch(0.1 0.04 260)", accent: "oklch(0.72 0.22 245)" },
    layout: "wide",
    mockup: "saas",
  },
  {
    id: "02",
    client: "Neura.dx",
    title: "Diagnostic intelligence, reimagined",
    category: "Analytics Dashboard",
    year: "MMXXVI",
    services: ["UX", "Automation", "Motion"],
    metric: { value: "47ms", label: "Median inference" },
    palette: { from: "oklch(0.2 0.08 300)", to: "oklch(0.08 0.03 280)", accent: "oklch(0.65 0.28 300)" },
    layout: "tall",
    mockup: "automation",
  },
  {
    id: "03",
    client: "Maison Vol.II",
    title: "An archive of seasonless couture",
    category: "Luxury Fashion",
    year: "MMXXV",
    services: ["Art Direction", "E-commerce"],
    metric: { value: "+89%", label: "Avg. basket" },
    palette: { from: "oklch(0.18 0.02 30)", to: "oklch(0.06 0.01 20)", accent: "oklch(0.78 0.1 60)" },
    layout: "square",
    mockup: "fashion",
  },
  {
    id: "04",
    client: "Brasserie Nord",
    title: "A Nordic table, served digitally",
    category: "Restaurant Branding",
    year: "MMXXV",
    services: ["Identity", "Web", "Print"],
    metric: { value: "4.9★", label: "Booking rating" },
    palette: { from: "oklch(0.2 0.04 140)", to: "oklch(0.08 0.02 150)", accent: "oklch(0.75 0.14 130)" },
    layout: "square",
    mockup: "restaurant",
  },
  {
    id: "05",
    client: "Lumen",
    title: "Private banking in your pocket",
    category: "Mobile App",
    year: "MMXXVI",
    services: ["iOS", "Design System"],
    metric: { value: "1.2M", label: "Active members" },
    palette: { from: "oklch(0.18 0.06 280)", to: "oklch(0.06 0.02 270)", accent: "oklch(0.7 0.2 280)" },
    layout: "tall",
    mockup: "mobile",
  },
  {
    id: "06",
    client: "Atelier Sora",
    title: "A portfolio shaped like a film",
    category: "Creative Portfolio",
    year: "MMXXV",
    services: ["Web", "Motion"],
    metric: { value: "Awwwards", label: "SOTD · Honorable" },
    palette: { from: "oklch(0.16 0.02 220)", to: "oklch(0.06 0.01 220)", accent: "oklch(0.78 0.14 200)" },
    layout: "wide",
    mockup: "portfolio",
  },
  {
    id: "07",
    client: "Verra",
    title: "A campaign that traveled the feed",
    category: "Digital Campaign",
    year: "MMXXVI",
    services: ["Strategy", "Content", "Paid"],
    metric: { value: "18.4M", label: "Organic reach" },
    palette: { from: "oklch(0.18 0.08 20)", to: "oklch(0.07 0.04 10)", accent: "oklch(0.7 0.22 25)" },
    layout: "square",
    mockup: "campaign",
  },
  {
    id: "08",
    client: "Orbital",
    title: "Launching a startup at light speed",
    category: "Landing Page",
    year: "MMXXVI",
    services: ["Brand", "Web", "Copy"],
    metric: { value: "$4.2M", label: "Seed raised" },
    palette: { from: "oklch(0.2 0.05 200)", to: "oklch(0.07 0.02 210)", accent: "oklch(0.74 0.18 200)" },
    layout: "square",
    mockup: "startup",
  },
];

function Mockup({ type, accent }: { type: Project["mockup"]; accent: string }) {
  // Hand-crafted SVG-ish vignettes, all in glass + accent palette
  if (type === "saas") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-[88%] aspect-[16/10] rounded-2xl glass-strong overflow-hidden shadow-2xl relative">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="h-2 w-2 rounded-full bg-white/20"/><span className="h-2 w-2 rounded-full bg-white/20"/><span className="h-2 w-2 rounded-full bg-white/20"/>
            <div className="ml-3 h-1.5 w-32 rounded-full bg-white/10"/>
          </div>
          <div className="grid grid-cols-[140px_1fr] h-full">
            <div className="border-r border-white/5 p-3 space-y-2">
              {[60,80,40,70,50,90].map((w,i)=>(<div key={i} className="h-2 rounded-full bg-white/10" style={{width:`${w}%`}}/>))}
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-end gap-3 h-24">
                {[40,70,50,90,65,80,100,75,55,85,60,70].map((h,i)=>(
                  <div key={i} className="flex-1 rounded-t" style={{ height:`${h}%`, background:`linear-gradient(to top, ${accent}, transparent)`}}/>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[0,1,2].map(i=>(<div key={i} className="h-12 rounded-lg bg-white/5 border border-white/5"/>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "automation") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-[80%] aspect-[4/5] rounded-2xl glass-strong overflow-hidden shadow-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-2 w-20 rounded-full bg-white/15"/>
            <div className="h-6 w-6 rounded-full" style={{background: accent, boxShadow:`0 0 24px ${accent}`}}/>
          </div>
          <div className="relative aspect-square rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0" style={{background:`radial-gradient(circle at 50% 50%, ${accent}55, transparent 60%)`}}/>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="20" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.6"/>
              <circle cx="50" cy="50" r="32" fill="none" stroke={accent} strokeWidth="0.3" opacity="0.4"/>
              <circle cx="50" cy="50" r="44" fill="none" stroke={accent} strokeWidth="0.2" opacity="0.2"/>
              <path d="M10,70 Q30,40 50,55 T90,30" fill="none" stroke={accent} strokeWidth="0.6"/>
            </svg>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-white/10"/>
            <div className="h-2 w-3/4 rounded-full bg-white/10"/>
            <div className="h-2 w-2/3 rounded-full bg-white/10"/>
          </div>
        </div>
      </div>
    );
  }
  if (type === "fashion") {
    return (
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="font-display text-[18vw] md:text-[7vw] leading-[0.85] tracking-[-0.05em] text-white/90 font-light italic">
          Maison<br/>Vol.II
        </div>
        <div className="mt-4 flex items-end justify-between text-[10px] tracking-[0.3em] text-white/60 uppercase">
          <span>FW · 26</span>
          <span>N° 014</span>
        </div>
      </div>
    );
  }
  if (type === "restaurant") {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-center p-6">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-white/50 uppercase mb-3">Est. 2018 · Oslo</div>
          <div className="font-display text-4xl md:text-5xl font-light italic text-white">Brasserie</div>
          <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-white -mt-1">NORD</div>
          <div className="mt-4 h-px w-16 mx-auto" style={{background: accent}}/>
          <div className="text-[10px] tracking-[0.3em] text-white/60 uppercase mt-3">Sourdough · Sea · Smoke</div>
        </div>
      </div>
    );
  }
  if (type === "mobile") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-[42%] aspect-[9/19] rounded-[2rem] glass-strong overflow-hidden shadow-2xl border border-white/10 p-3">
          <div className="mx-auto h-1 w-12 rounded-full bg-white/20 mb-3"/>
          <div className="text-[8px] tracking-[0.3em] text-white/50 uppercase">Balance</div>
          <div className="font-display text-2xl text-white mt-1">€ 184,920</div>
          <div className="mt-3 rounded-xl p-3" style={{background:`linear-gradient(135deg, ${accent}, transparent)`}}>
            <div className="h-1.5 w-16 rounded-full bg-white/30 mb-2"/>
            <div className="h-1.5 w-24 rounded-full bg-white/20"/>
          </div>
          <div className="mt-3 space-y-2">
            {[0,1,2,3].map(i=>(
              <div key={i} className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white/10"/>
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-3/4 rounded-full bg-white/15"/>
                  <div className="h-1.5 w-1/2 rounded-full bg-white/10"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (type === "portfolio") {
    return (
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-6">
        {[0,1,2,3,4,5].map(i=>(
          <div key={i} className="rounded-xl overflow-hidden relative" style={{background:`linear-gradient(${135+i*30}deg, ${accent}40, transparent), oklch(0.14 0.02 220)`}}>
            <div className="absolute bottom-2 left-2 text-[8px] tracking-[0.3em] uppercase text-white/70">N° 0{i+1}</div>
          </div>
        ))}
      </div>
    );
  }
  if (type === "campaign") {
    return (
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="text-[10px] tracking-[0.3em] uppercase text-white/50">Verra · Spring drop</div>
        <div className="font-display text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white leading-[0.9]">
          Wear<br/><span className="italic font-light" style={{color: accent}}>tomorrow</span>.
        </div>
        <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-white/60">
          <span>18.4M reach</span>
          <Play className="h-3 w-3"/>
        </div>
      </div>
    );
  }
  // startup
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
      <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-4">
        <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{background: accent}}/>
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/70">Now in private beta</span>
      </div>
      <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white">Orbital</div>
      <div className="text-sm text-white/60 mt-2 max-w-[240px]">Expédiez l'infrastructure à la vitesse de la pensée.</div>
      <div className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium" style={{background: accent, color:"oklch(0.08 0 0)"}}>Demander l'accès <ArrowUpRight className="h-3 w-3"/></div>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div
        style={{ y: blobY, background: "radial-gradient(circle, oklch(1 0 0 / 0.15), transparent 70%)" }}
        className="absolute right-[-10%] top-40 h-[520px] w-[520px] rounded-full opacity-40 pointer-events-none"
      />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Projets sélectionnés · MMXXV–XXVI</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-[-0.045em] leading-[0.92] text-white">
              Une bibliothèque<br/>
              d'<span className="text-gradient italic font-light">obsessions</span>, livrée.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-sm text-sm text-muted-foreground leading-relaxed font-medium"
          >
            Huit collaborations récentes avec des fondateurs, des ateliers et des équipes visionnaires. 
            Chaque pixel pesé, chaque transition ressentie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[420px] gap-4 md:gap-5">
          {projects.map((p, i) => {
            const span =
              p.layout === "wide" ? "md:col-span-8" :
              p.layout === "tall" ? "md:col-span-4 md:row-span-2" :
              "md:col-span-4";
            const isHover = hoverId === p.id;
            return (
              <motion.a
                key={p.id}
                href="#"
                onMouseEnter={() => setHoverId(p.id)}
                onMouseLeave={() => setHoverId(null)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-3xl overflow-hidden glass ${span}`}
                style={{ background: `linear-gradient(160deg, ${p.palette.from}, ${p.palette.to})` }}
              >
                {/* Accent glow */}
                <motion.div
                  className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${p.palette.accent}33, transparent 60%)` }}
                />
                <div className="absolute inset-0 noise opacity-40"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>

                {/* Mockup */}
                <motion.div
                  animate={{ scale: isHover ? 1.04 : 1, y: isHover ? -8 : 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Mockup type={p.mockup} accent={p.palette.accent} />
                </motion.div>

                {/* Meta overlay */}
                <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between pointer-events-none">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">{p.id}</span>
                      <span className="h-px w-8 bg-white/20"/>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">{p.category}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isHover ? 45 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="h-10 w-10 rounded-full glass-strong flex items-center justify-center pointer-events-auto"
                    >
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>

                  <div>
                    <motion.div
                      animate={{ y: isHover ? -4 : 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="text-[11px] tracking-[0.3em] uppercase text-white/70 mb-2">{p.client}</div>
                      <h3 className="font-display text-2xl md:text-[2rem] font-semibold tracking-[-0.02em] text-white leading-[1.05] max-w-[28ch]">
                        {p.title}
                      </h3>
                    </motion.div>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {p.services.map(s => (
                          <span key={s} className="text-[10px] tracking-[0.2em] uppercase text-white/70 glass px-2 py-1 rounded-full">{s}</span>
                        ))}
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-display text-xl md:text-2xl text-white" style={{ color: p.palette.accent }}>{p.metric.value}</div>
                        <div className="text-[9px] tracking-[0.25em] uppercase text-white/50">{p.metric.label}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sweep highlight */}
                <motion.div
                  initial={false}
                  animate={{ x: isHover ? "120%" : "-120%" }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 -left-1/2 w-1/2 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.07), transparent)" }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
