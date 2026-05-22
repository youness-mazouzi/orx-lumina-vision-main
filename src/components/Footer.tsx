export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
             <div className="w-3 h-3 rounded-full bg-white animate-pulse opacity-50" />
          </div>
          <span className="font-display font-semibold text-white">ORX Services</span>
        </div>
        <p className="text-xs text-neutral-500 font-medium tracking-wider uppercase">© 2026 ORX Services — Conçu pour l'avenir.</p>
      </div>
    </footer>
  );
}
