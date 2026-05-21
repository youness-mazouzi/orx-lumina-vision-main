import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Discover", d: "We listen, audit and define the mission." },
  { n: "02", t: "Design", d: "Strategy meets craft — every pixel intentional." },
  { n: "03", t: "Develop", d: "Engineered with modern tools and automation." },
  { n: "04", t: "Deliver", d: "Ship fast. Iterate. Scale beyond launch." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <section id="process" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div
        style={{ y, background: "radial-gradient(circle, oklch(0.72 0.22 245 / 0.4), transparent 70%)" }}
        className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-20 max-w-2xl"
        >
          A process built<br/><span className="text-gradient">for velocity.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden glass">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 md:p-10 bg-background/40 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="font-display text-5xl font-bold text-gradient mb-6">{s.n}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 245), oklch(0.65 0.28 300))" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
