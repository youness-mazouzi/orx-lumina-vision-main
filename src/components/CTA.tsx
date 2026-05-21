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
          className="relative glass-strong rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden noise"
        >
          <div className="absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.5 0.25 280 / 0.4), transparent 70%)" }} />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full animate-glow-pulse"
            style={{ background: "radial-gradient(ellipse, oklch(0.65 0.28 300 / 0.5), transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              Let's build<br/><span className="text-gradient">something legendary.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Start a conversation. We respond within 24 hours with a tailored plan and timeline.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:0782861844" className="inline-block">
                <MagneticButton variant="primary">Book a call <ArrowUpRight className="h-4 w-4" /></MagneticButton>
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
