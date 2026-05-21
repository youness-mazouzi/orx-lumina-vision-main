import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook } from "lucide-react";

const buttons = [
  {
    href: "https://wa.me/212782861844",
    label: "WhatsApp",
    Icon: MessageCircle,
    gradient: "linear-gradient(135deg, #25D366, #128C7E)",
    glow: "0 0 24px rgba(37, 211, 102, 0.55)",
  },
  {
    href: "https://www.instagram.com/orx__orx/",
    label: "Instagram",
    Icon: Instagram,
    gradient: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)",
    glow: "0 0 24px rgba(221, 42, 123, 0.55)",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61589979090343",
    label: "Facebook",
    Icon: Facebook,
    gradient: "linear-gradient(135deg, #1877F2, #0052D4)",
    glow: "0 0 24px rgba(24, 119, 242, 0.55)",
  },
];

export function SocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {buttons.map((b, i) => (
        <motion.a
          key={b.label}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={b.label}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.12, rotate: -6 }}
          whileTap={{ scale: 0.95 }}
          className="group relative h-14 w-14 rounded-full flex items-center justify-center text-white"
          style={{ background: b.gradient, boxShadow: b.glow }}
        >
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-40"
            style={{ background: b.gradient, animationDuration: "2.4s" }}
          />
          <span
            className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
            style={{ background: b.gradient }}
          />
          <b.Icon className="relative h-6 w-6 drop-shadow" strokeWidth={2.2} />
          <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md glass-strong text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
            {b.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
