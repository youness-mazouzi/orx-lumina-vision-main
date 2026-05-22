import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function Navbar() {
  const links = ["Services", "Processus", "Projets", "Contact"];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,1100px)]"
    >
      <nav className="glass-strong flex items-center justify-between px-5 py-3 rounded-full border border-white/10">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <div className="relative text-white font-bold text-sm font-display">O</div>
          </div>
          <span className="font-display font-semibold tracking-tight text-white">ORX</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
               className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
              {l}
            </a>
          ))}
        </div>
        <MagneticButton variant="primary" className="!px-5 !py-2 text-xs font-semibold" onClick={() => window.dispatchEvent(new Event('openProjectModal'))}>Commencer</MagneticButton>
      </nav>
    </motion.header>
  );
}
