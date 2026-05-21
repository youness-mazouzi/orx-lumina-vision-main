export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg neon-glow" style={{ background: "linear-gradient(135deg, oklch(0.65 0.28 300), oklch(0.72 0.22 245))" }} />
          <span className="font-display font-semibold">ORX Services</span>
        </div>
        <p className="text-xs text-muted-foreground tracking-wider">© 2026 ORX Services — Crafted in the future.</p>
      </div>
    </footer>
  );
}
