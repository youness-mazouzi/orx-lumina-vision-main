import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Particles } from "./Particles";
import { MagneticButton } from "./MagneticButton";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";

const headline = ["Design.", "Engineer.", "Transcend."];

// Instagram profile URL (opens the page)
const INSTAGRAM_REEL_URL = "https://www.instagram.com/orx__orx/";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse reactive light
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const lx = useSpring(mx, { stiffness: 60, damping: 20 });
  const ly = useSpring(my, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  const light = useTransform([lx, ly] as never, ([x, y]: number[]) =>
    `radial-gradient(800px circle at ${x * 100}% ${y * 100}%, oklch(0.65 0.28 300 / 0.22), transparent 55%)`
  );

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center overflow-hidden noise">
      <motion.div style={{ y: yBg }} className="absolute inset-0 grid-bg opacity-40" />
      <motion.div style={{ background: light }} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0"><Particles /></div>

      {/* Glow orbs */}
      <motion.div style={{ y: yBg }} className="absolute top-1/4 -left-40 h-[560px] w-[560px] rounded-full opacity-50 animate-glow-pulse"
        ><div className="h-full w-full" style={{ background: "radial-gradient(circle, oklch(0.65 0.28 300 / 0.5), transparent 70%)" }} /></motion.div>
      <motion.div style={{ y: yBg }} className="absolute bottom-0 -right-40 h-[640px] w-[640px] rounded-full opacity-40 animate-glow-pulse"
        ><div className="h-full w-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.22 245 / 0.55), transparent 70%)", animationDelay: "1.5s" }} /></motion.div>

      <motion.div style={{ y: yContent, opacity }} className="relative z-10 w-full px-6 md:px-12 pt-32 pb-20">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 items-end">
          {/* Left meta */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block col-span-3 space-y-6"
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available · MMXXVI
            </div>
            <div className="glass rounded-2xl p-4 max-w-[220px]">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-[oklch(0.8_0.18_85)] text-[oklch(0.8_0.18_85)]" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                "ORX delivered a product that felt like art. Cinematic from the first frame."
              </p>
              <p className="text-[10px] mt-2 tracking-wider uppercase text-foreground/60">— Léa M. · Founder, Nova</p>
            </div>
          </motion.div>

          {/* Center headline */}
          <div className="col-span-12 md:col-span-9">
            {/* Hero badge removed per request */}

            <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.85]">
              <span className="block text-[clamp(3.5rem,11vw,11rem)]">
                {headline.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.1, delay: 0.5 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-6 md:mr-10 text-gradient"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="block text-[clamp(1.5rem,3.5vw,3rem)] mt-6 font-light text-foreground/70 italic"
              >
                ORX is a studio of eight disciplines —
                <span className="not-italic font-normal text-foreground"> one obsession with craft.</span>
              </motion.span>
            </h1>

            <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="max-w-md text-base text-muted-foreground leading-relaxed"
              >
                We engineer cinematic digital experiences across technology,
                brand, content and intelligence — for founders who refuse the ordinary.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.55 }}
                className="flex flex-wrap items-center gap-4"
              >
                <MagneticButton variant="primary" onClick={() => window.dispatchEvent(new Event('openProjectModal'))}>Start a project <ArrowUpRight className="h-4 w-4" /></MagneticButton>
                <MagneticButton variant="ghost" onClick={() => window.open(INSTAGRAM_REEL_URL, '_blank')}>Visit Instagram</MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
          className="mx-auto max-w-[1400px] mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs"
        >
          {[
            ["120+", "Projects shipped"],
            ["8", "Disciplines"],
            ["30+", "Countries served"],
            ["∞", "Pixels obsessed"],
          ].map(([n, l]) => (
            <div key={l} className="space-y-1 border-l border-white/10 pl-4">
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{n}</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
