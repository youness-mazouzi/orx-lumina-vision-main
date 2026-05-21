import { motion } from "framer-motion";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, variant = "primary", className = "", onClick }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const r = ref.current!.getBoundingClientRect();
    setPos({ x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3 });
  };
  const reset = () => setPos({ x: 0, y: 0 });
  const base = "relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm tracking-wide overflow-hidden transition-shadow";
  const styles = variant === "primary"
    ? "text-white neon-glow"
    : "glass text-foreground hover:bg-white/10";
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={`${base} ${styles} ${className}`}
      style={variant === "primary" ? {
        background: "linear-gradient(135deg, oklch(0.65 0.28 300), oklch(0.5 0.25 270), oklch(0.6 0.22 245))",
        backgroundSize: "200% 200%",
      } : undefined}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
