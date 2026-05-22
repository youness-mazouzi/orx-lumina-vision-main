import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Découvrir", d: "Nous écoutons, auditons et définissons la mission." },
  { n: "02", t: "Concevoir", d: "La stratégie rencontre l'artisanat — chaque pixel est intentionnel." },
  { n: "03", t: "Développer", d: "Conçu avec des outils modernes et de l'automatisation." },
  { n: "04", t: "Livrer", d: "Livrer vite. Itérer. Évoluer au-delà du lancement." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <section id="process" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div
        style={{ y, background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)" }}
        className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full opacity-40 filter blur-[50px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-20 max-w-2xl text-white"
        >
          Un processus conçu<br/><span className="text-neutral-500">pour la vélocité.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden glass border border-white/5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 md:p-10 bg-background/80 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="font-display text-5xl font-bold text-white/90 mb-6 group-hover:text-white transition-colors">{s.n}</div>
              <h3 className="font-display text-xl font-semibold mb-2 text-white">{s.t}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-medium">{s.d}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), rgba(255,255,255,0.3))" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
