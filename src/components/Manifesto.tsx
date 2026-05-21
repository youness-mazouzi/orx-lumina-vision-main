import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const text = "We believe craft is a form of respect. Every pixel, every transition, every line of code — a quiet promise that the work will outlive the trend.";
const words = text.split(" ");

function Word({ progress, range, children }: { progress: MotionValue<number>; range: [number, number]; children: string }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });

  return (
    <section ref={ref} className="relative py-40 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, oklch(0.5 0.25 280 / 0.35), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-10 text-center">— Manifesto —</div>
        <p className="font-display text-3xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.15] text-center">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{w}</Word>;
          })}
        </p>
      </div>
    </section>
  );
}
