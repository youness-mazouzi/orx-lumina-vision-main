import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-strong rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden noise border border-white/10"
        >
          <div className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.1), transparent 70%)" }} />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full animate-glow-pulse filter blur-[50px]"
            style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.15), transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-white">
              Construisons quelque<br/><span className="text-neutral-400">chose de légendaire.</span>
            </h2>
            <p className="mt-6 text-neutral-400 max-w-xl mx-auto font-medium">
              Démarrons une conversation. Nous répondons sous 24h avec un plan sur mesure.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:0782861844" className="inline-block">
                <MagneticButton variant="primary">Réserver un appel <ArrowUpRight className="h-4 w-4" /></MagneticButton>
              </a>
              <a href="mailto:orxorx99@gmail.com" className="inline-block">
                <MagneticButton variant="ghost">orxorx99@gmail.com</MagneticButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
