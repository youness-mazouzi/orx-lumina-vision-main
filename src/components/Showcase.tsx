import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Sparkles, Coins, Cpu, Film, Shirt, Activity, TrendingUp } from "lucide-react";

type ShowcaseItem = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  color: string;
  accent: string;
  span: string;
  services: string[];
  metric: { value: string; label: string };
  mockup: "lumen" | "echo" | "solstice" | "maison";
};

const items: ShowcaseItem[] = [
  {
    id: "01",
    tag: "Brand · 2026",
    title: "Lumen Capital",
    subtitle: "Ultra-luxury asset management and private wealth platform",
    color: "from-[oklch(0.20_0.06_270)] to-[oklch(0.08_0.03_280)]",
    accent: "oklch(0.8_0.15_85)",
    span: "md:col-span-7 md:row-span-2",
    services: ["Brand", "Identity", "UX"],
    metric: { value: "+38.4%", label: "Portfolio Yield" },
    mockup: "lumen"
  },
  {
    id: "02",
    tag: "App · Autonomous",
    title: "Echo OS",
    subtitle: "Next-gen operating system for autonomous agents",
    color: "from-[oklch(0.18_0.08_245)] to-[oklch(0.06_0.03_230)]",
    accent: "oklch(0.72_0.22_245)",
    span: "md:col-span-5",
    services: ["UX/UI", "Systems", "Agent"],
    metric: { value: "47ms", label: "Agent latency" },
    mockup: "echo"
  },
  {
    id: "03",
    tag: "Film · Motion",
    title: "Solstice",
    subtitle: "A cosmic cinematic motion & visual archive",
    color: "from-[oklch(0.18_0.05_30)] to-[oklch(0.06_0.02_20)]",
    accent: "oklch(0.65_0.18_30)",
    span: "md:col-span-5",
    services: ["CGI", "Sound", "Direction"],
    metric: { value: "8K HDR", label: "Native Capture" },
    mockup: "solstice"
  },
  {
    id: "04",
    tag: "Web · E-commerce",
    title: "Maison Vol.II",
    subtitle: "Highly crafted seasonal digital boutique and atelier",
    color: "from-[oklch(0.20_0.04_180)] to-[oklch(0.07_0.02_190)]",
    accent: "oklch(0.7_0.15_180)",
    span: "md:col-span-7",
    services: ["Creative Web", "Storefront", "3D Canvas"],
    metric: { value: "+89%", label: "Conversion Lift" },
    mockup: "maison"
  },
];

// Subcomponents for Luxury Mockups inside the cards

function LumenMockup({ px, py, pDeepX, pDeepY, isHovered }: any) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden p-6 pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-15" />
      
      {/* Glow Orbs */}
      <div className="absolute -top-1/4 -right-1/4 w-80 h-80 rounded-full bg-[oklch(0.65_0.28_300)] opacity-20 filter blur-[70px] animate-glow-pulse" />
      <div className="absolute -bottom-1/4 -left-1/4 w-72 h-72 rounded-full bg-[oklch(0.8_0.15_85)] opacity-10 filter blur-[50px]" />
      
      {/* Gold-lined circular constellation */}
      <div className="absolute top-[10%] left-[5%] w-48 h-48 border border-white/5 rounded-full flex items-center justify-center opacity-30">
        <div className="w-36 h-36 border border-dashed border-white/10 rounded-full" />
      </div>

      {/* Floating 3D Gold Card Layer */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        className="absolute top-[22%] left-[12%] w-[58%] aspect-[1.586/1] rounded-2xl glass-strong border border-white/25 p-4 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40" />
        
        {/* Shimmer line */}
        <motion.div
          animate={isHovered ? { x: ["-100%", "200%"] } : { x: "-100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />

        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-0.5">
            <span className="text-[6px] tracking-[0.25em] text-white/40 uppercase font-mono">LUMEN ELITE</span>
            <span className="text-[9px] font-bold text-white tracking-widest font-display">PRIVATE BANKING</span>
          </div>
          <div className="h-5 w-5 rounded bg-gradient-to-br from-[oklch(0.8_0.15_85)] to-amber-500 opacity-80 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Coins className="h-3 w-3 text-black" />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-end">
          <div>
            <div className="h-2 w-6 rounded bg-white/20 mb-2" />
            <span className="text-[8px] font-mono tracking-[0.2em] text-white/60">•••• •••• •••• 0026</span>
          </div>
          <div className="flex flex-col items-end gap-0.5 font-mono text-[6px]">
            <span className="text-white/40">EXP</span>
            <span className="text-white/80">12/28</span>
          </div>
        </div>
      </motion.div>

      {/* Parallax UI: Capital Inflow Bubble */}
      <motion.div
        style={{ x: px, y: py }}
        className="absolute bottom-[16%] right-[10%] glass border border-emerald-500/30 p-2.5 px-3 rounded-xl shadow-2xl flex items-center gap-2.5 backdrop-blur-md"
      >
        <div className="h-7 w-7 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
        </div>
        <div className="space-y-0.5">
          <div className="text-[6px] tracking-[0.2em] text-white/40 uppercase font-mono">ASSET UPDATE</div>
          <div className="text-xs font-semibold text-emerald-400 font-display">+$14,250.00</div>
        </div>
      </motion.div>

      {/* Active Yield Badge */}
      <motion.div
        style={{ x: px, y: py }}
        className="absolute top-[8%] right-[12%] glass-strong border border-[oklch(0.8_0.15_85)]/20 p-1.5 px-3 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-lg"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.8_0.15_85)] animate-pulse" />
        <span className="text-[8px] tracking-[0.2em] text-white font-mono uppercase">YIELD: +38.4% APY</span>
      </motion.div>

      {/* Bottom organic curve design */}
      <svg className="absolute bottom-0 left-0 w-full h-[35%] opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,90 Q25,35 50,60 T100,20 L100,100 L0,100 Z" fill="url(#lumenGrad)" />
        <path d="M0,90 Q25,35 50,60 T100,20" fill="none" stroke="oklch(0.8_0.15_85)" strokeWidth="0.4" />
        <defs>
          <linearGradient id="lumenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.8_0.15_85)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function EchoMockup({ px, py, pDeepX, pDeepY, isHovered }: any) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden p-5 pointer-events-none">
      {/* Grid Pattern & Light radial background */}
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.72 0.22 245 / 0.15), transparent 70%)" }} />

      {/* Rotating concentric nodes */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-15%] right-[-15%] w-60 h-60 border border-white/5 rounded-full flex items-center justify-center opacity-30"
      >
        <div className="w-48 h-48 border border-dashed border-white/10 rounded-full" />
        <div className="w-36 h-36 border border-white/5 rounded-full" />
        <span className="absolute top-4 left-1/2 h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.22_245)] animate-pulse" />
      </motion.div>

      {/* Holographic Glowing Core */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        className="absolute top-[25%] left-[25%] -translate-x-1/2 w-24 h-24 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-20 h-20 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.22 245 / 0.45), transparent 60%)" }}
        />
        <div className="w-11 h-11 rounded-full bg-[oklch(0.72_0.22_245)] border border-white/30 shadow-[0_0_30px_oklch(0.72_0.22_245)] flex items-center justify-center">
          <Cpu className="h-4 w-4 text-white animate-pulse" />
        </div>
      </motion.div>

      {/* Floating System Console Panel */}
      <motion.div
        style={{ x: px, y: py }}
        className="absolute top-[12%] right-[8%] w-[58%] glass border border-white/10 p-3 rounded-xl shadow-2xl font-mono text-[6px] text-emerald-400 space-y-1.5 backdrop-blur-md"
      >
        <div className="flex items-center justify-between border-b border-white/5 pb-1">
          <span className="text-white/60 tracking-widest text-[5px]">ECHO_AGENT_SHELL</span>
          <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="text-white/40">&gt; initialising_agentic_loop...</div>
        <div>&gt; weights_compiled_ok: 100%</div>
        <div>&gt; inference: <span className="text-white font-semibold">47ms</span></div>
        <div className="text-[oklch(0.72_0.22_245)] font-semibold animate-pulse">&gt; INSTANCE: ACTIVE_STABLE</div>
      </motion.div>

      {/* Floating Interface Mini-Graph */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        className="absolute bottom-[10%] left-[8%] w-[40%] glass border border-white/5 p-2 rounded-lg flex flex-col gap-1 backdrop-blur-sm"
      >
        <div className="text-[5px] text-white/40 uppercase tracking-widest">Network flow</div>
        <div className="flex items-end gap-0.5 h-6">
          {[20, 50, 30, 70, 40, 80, 60, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, oklch(0.72 0.22 245), transparent)` }} />
          ))}
        </div>
      </motion.div>

      {/* Laser Scan line */}
      <motion.div
        animate={{ y: ["-10%", "110%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.22_245)/0.4] to-transparent pointer-events-none"
      />
    </div>
  );
}

function SolsticeMockup({ px, py, pDeepX, pDeepY, isHovered }: any) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden p-6 pointer-events-none">
      {/* Target Framing Reticle */}
      <div className="absolute inset-4 border border-white/5 rounded-2xl">
        <div className="absolute top-2 left-2 border-t border-l border-white/20 w-3 h-3" />
        <div className="absolute top-2 right-2 border-t border-r border-white/20 w-3 h-3" />
        <div className="absolute bottom-2 left-2 border-b border-l border-white/20 w-3 h-3" />
        <div className="absolute bottom-2 right-2 border-b border-r border-white/20 w-3 h-3" />
      </div>

      {/* Eclipsed Star Glow */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        className="absolute top-[12%] left-[16%] w-32 h-32 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], filter: ["blur(20px)", "blur(35px)", "blur(20px)"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-28 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.18 30 / 0.5), transparent 70%)" }}
        />
        <div className="w-16 h-16 rounded-full bg-black border border-white/10 shadow-[0_0_35px_oklch(0.65_0.18_30_/_0.75)]" />
      </motion.div>

      {/* Cinematic HUD Control Board */}
      <motion.div
        style={{ x: px, y: py }}
        className="absolute bottom-[22%] right-[6%] glass border border-white/10 p-3 rounded-xl shadow-2xl flex flex-col gap-2 min-w-[130px] backdrop-blur-md"
      >
        <div className="flex items-center justify-between text-[5px] tracking-widest text-white/40 uppercase">
          <span>CODEC: RED_RAW_8K</span>
          <span className="text-red-500 font-bold flex items-center gap-0.5">
            <span className="h-1 w-1 bg-red-500 rounded-full animate-pulse" />
            REC
          </span>
        </div>
        
        {/* Animated Spectrogram */}
        <div className="flex items-center gap-1 h-5">
          {[40, 70, 50, 95, 30, 80, 60, 75, 45, 90].map((h, i) => (
            <motion.div
              key={i}
              animate={isHovered ? { height: [`${h * 0.5}%`, `${h}%`, `${h * 0.5}%`] } : { height: `${h * 0.6}%` }}
              transition={{ duration: 1 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
              className="flex-1 rounded-sm bg-gradient-to-t from-[oklch(0.65_0.18_30)] to-[oklch(0.7_0.2_45)]"
            />
          ))}
        </div>

        <div className="flex justify-between items-center text-[6px] text-white/60 font-mono">
          <span>23.976 FPS</span>
          <span className="text-[oklch(0.7_0.2_45)] font-bold">00:14:52:12</span>
        </div>
      </motion.div>

      {/* Floating lens flares */}
      <motion.div
        animate={isHovered ? { x: [-20, 20, -20] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-12 w-48 h-8 rounded-full bg-gradient-to-r from-transparent via-[oklch(0.65_0.18_30)]/10 to-transparent filter blur-md"
      />

      <div className="absolute top-6 right-6 flex items-center gap-1.5 font-mono text-[7px] text-white/50">
        <Film className="h-3 w-3 text-red-500/80 animate-pulse" />
        <span>HUD_CAM_ACTIVE</span>
      </div>
    </div>
  );
}

function MaisonMockup({ px, py, pDeepX, pDeepY, isHovered }: any) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden p-6 pointer-events-none">
      {/* Luxury satin waves pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.20_0.04_180)] via-transparent to-[oklch(0.7_0.15_180)/0.08]" />
      
      {/* Flowing liquid mesh bg */}
      <motion.div
        animate={isHovered ? { scale: [1, 1.06, 1], rotate: [0, 3, 0] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-15%] w-[130%] h-[130%] opacity-15"
        style={{
          backgroundImage: "radial-gradient(ellipse at 40% 40%, oklch(0.7 0.15 180 / 0.25), transparent 60%)",
        }}
      />

      {/* Editorial Grid overlay */}
      <div className="absolute inset-4 border border-white/5 flex pointer-events-none">
        <div className="flex-1 border-r border-white/5" />
        <div className="flex-1 border-r border-white/5" />
        <div className="flex-1" />
      </div>

      {/* Floating Luxury Couture Card */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        className="absolute top-[18%] right-[10%] w-[48%] aspect-[3/4] rounded-2xl glass-strong border border-white/20 p-3 shadow-2xl overflow-hidden flex flex-col justify-between backdrop-blur-md"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="flex justify-between items-start">
          <Shirt className="h-3.5 w-3.5 text-[oklch(0.7_0.15_180)]" />
          <span className="text-[5px] tracking-[0.3em] text-white/50 uppercase font-mono">LOOKBOOK 014</span>
        </div>
        
        {/* Runic vector illustration */}
        <div className="flex-1 flex items-center justify-center my-2 opacity-50">
          <svg className="w-full h-full stroke-white/20 stroke-[0.4]" viewBox="0 0 100 100">
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="oklch(0.7_0.15_180)" strokeWidth="0.4" />
            <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="white/10" />
          </svg>
        </div>
        
        <div className="flex justify-between items-end text-[6px] tracking-widest text-white/80">
          <span>ATELIER</span>
          <span className="font-semibold text-[oklch(0.7_0.15_180)]">$1,850.00</span>
        </div>
      </motion.div>

      {/* Added to Bag checkout notification */}
      <motion.div
        style={{ x: px, y: py }}
        className="absolute bottom-[22%] left-[8%] glass border border-white/10 p-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 backdrop-blur-md"
      >
        <div className="h-6 w-6 rounded-full bg-[oklch(0.7_0.15_180)]/10 flex items-center justify-center">
          <span className="text-[7px] font-bold text-[oklch(0.7_0.15_180)]">BAG</span>
        </div>
        <div className="space-y-0.5">
          <span className="block text-[5px] tracking-widest text-white/40 uppercase font-mono">CART ACTIVE</span>
          <span className="block text-[8px] font-medium text-white/90">Satin Trenchcoat</span>
        </div>
      </motion.div>

      {/* Editorial Typography Overlay */}
      <div className="absolute top-[8%] left-[8%] max-w-[140px]">
        <span className="text-[5px] tracking-[0.4em] text-white/30 uppercase block mb-1">FW26 COUTURE</span>
        <h3 className="font-display text-base font-light italic leading-tight text-white tracking-wide">
          Silence is the <span className="font-normal text-[oklch(0.7_0.15_180)]">ultimate art</span>.
        </h3>
      </div>
    </div>
  );
}

// Map Mockup to correct component
function ShowcaseMockup({ type, px, py, pDeepX, pDeepY, isHovered }: { type: ShowcaseItem["mockup"]; px: any; py: any; pDeepX: any; pDeepY: any; isHovered: boolean }) {
  switch (type) {
    case "lumen":
      return <LumenMockup px={px} py={py} pDeepX={pDeepX} pDeepY={pDeepY} isHovered={isHovered} />;
    case "echo":
      return <EchoMockup px={px} py={py} pDeepX={pDeepX} pDeepY={pDeepY} isHovered={isHovered} />;
    case "solstice":
      return <SolsticeMockup px={px} py={py} pDeepX={pDeepX} pDeepY={pDeepY} isHovered={isHovered} />;
    case "maison":
      return <MaisonMockup px={px} py={py} pDeepX={pDeepX} pDeepY={pDeepY} isHovered={isHovered} />;
    default:
      return null;
  }
}

// Mouse reactive Showcase Card
function ShowcaseCard({ it, index, hoverId, setHoverId }: { it: ShowcaseItem; index: number; hoverId: string | null; setHoverId: (id: string | null) => void }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse absolute positions (normalized to 0-1)
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  // Smooth springs configuration
  const springConfig = { stiffness: 120, damping: 20, mass: 0.7 };
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), springConfig);

  // Parallax offsets
  const px = useSpring(useTransform(mx, [0, 1], [-12, 12]), springConfig);
  const py = useSpring(useTransform(my, [0, 1], [-12, 12]), springConfig);

  // Deep Parallax offsets
  const pDeepX = useSpring(useTransform(mx, [0, 1], [-22, 22]), springConfig);
  const pDeepY = useSpring(useTransform(my, [0, 1], [-22, 22]), springConfig);

  // Check if device supports hover
  const [supportsHover, setSupportsHover] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setSupportsHover(mediaQuery.matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!supportsHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width;
    const yVal = (e.clientY - rect.top) / rect.height;
    mx.set(xVal);
    my.set(yVal);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoverId(it.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverId(null);
    mx.set(0.5);
    my.set(0.5);
  };

  // Spotlights & Glow gradients
  const spotlight = useTransform([mx, my] as never, ([xVal, yVal]: number[]) => {
    return `radial-gradient(500px circle at ${xVal * 100}% ${yVal * 100}%, oklch(1 0 0 / 0.15), transparent 75%)`;
  });

  const borderSpotlight = useTransform([mx, my] as never, ([xVal, yVal]: number[]) => {
    return `radial-gradient(180px circle at ${xVal * 100}% ${yVal * 100}%, ${it.accent}80, transparent 65%)`;
  });

  return (
    <motion.a
      ref={cardRef}
      href="#"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX: supportsHover ? rotateX : 0,
        rotateY: supportsHover ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`group relative rounded-3xl overflow-hidden glass ${it.span} transition-all duration-700 min-h-[380px] select-none`}
    >
      {/* 3D Border Glow Wrapper */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          padding: "1px",
          background: borderSpotlight,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Dynamic Background Base */}
      <div className={`absolute inset-0 bg-gradient-to-br ${it.color} opacity-90 transition-transform duration-700 group-hover:scale-[1.03]`} />
      
      {/* Spotlight cursor glow inside card */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{ background: spotlight }}
      />
      
      <div className="absolute inset-0 noise opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none z-10" />

      {/* Card shadow reflection layer */}
      <div
        className="absolute inset-[-10px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 filter blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${it.accent}, transparent 60%)` }}
      />

      {/* Cinematic Interactive Mockups Container */}
      <div className="absolute inset-0 overflow-hidden">
        <ShowcaseMockup type={it.mockup} px={px} py={py} pDeepX={pDeepX} pDeepY={pDeepY} isHovered={isHovered} />
      </div>

      {/* Glass dynamic sweep highlight (reflections) */}
      <motion.div
        initial={false}
        animate={isHovered ? { x: "120%" } : { x: "-120%" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 -left-1/2 w-1/2 pointer-events-none z-15"
        style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.08), transparent)" }}
      />

      {/* Meta overlays */}
      <div className="relative z-20 h-full p-6 md:p-8 flex flex-col justify-between min-h-[380px] pointer-events-none">
        
        {/* Top bar info */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] font-mono text-white/50">{it.id}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-[9px] tracking-[0.25em] uppercase text-white/70 font-semibold font-mono">{it.tag}</span>
          </div>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-9 w-9 rounded-full glass-strong flex items-center justify-center pointer-events-auto shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            <ArrowUpRight className="h-4 w-4 text-white" />
          </motion.div>
        </div>

        {/* Bottom bar texts & data */}
        <div className="space-y-4">
          <motion.div
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2"
          >
            {/* Artistic premium title layout */}
            <h3 className="font-display text-3xl md:text-[2.2rem] font-bold tracking-[-0.03em] leading-[0.98] text-white max-w-[20ch]">
              {it.title.split(" ").map((w, idx) => (
                <span key={w} className={`inline-block mr-2 ${idx % 3 === 2 ? "italic font-light text-gradient" : ""}`}>
                  {w}
                </span>
              ))}
            </h3>
            
            <p className="text-[11px] text-white/50 font-sans leading-relaxed max-w-[42ch] opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              {it.subtitle}
            </p>
          </motion.div>

          <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4 mt-2">
            <div className="flex flex-wrap gap-1.5">
              {it.services.map(s => (
                <span key={s} className="text-[8px] tracking-[0.2em] uppercase text-white/80 glass px-2.5 py-1 rounded-full font-mono">
                  {s}
                </span>
              ))}
            </div>
            
            <div className="text-right shrink-0">
              <div className="font-display text-lg md:text-xl font-bold tracking-tight" style={{ color: it.accent }}>
                {it.metric.value}
              </div>
              <div className="text-[8px] tracking-[0.2em] uppercase text-white/40 font-mono">
                {it.metric.label}
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.a>
  );
}

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), { stiffness: 80, damping: 25 });
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <section id="work" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Section Background Glows */}
      <motion.div
        style={{ y, background: "radial-gradient(circle, oklch(0.65 0.28 300 / 0.35), transparent 70%)" }}
        className="absolute -left-[10%] top-20 h-[550px] w-[550px] rounded-full opacity-35 pointer-events-none filter blur-[40px]"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 120]), background: "radial-gradient(circle, oklch(0.72 0.22 245 / 0.25), transparent 70%)" }}
        className="absolute -right-[10%] bottom-10 h-[600px] w-[600px] rounded-full opacity-30 pointer-events-none filter blur-[50px]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 glass px-3.5 py-1.5 rounded-full mb-6 text-xs tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[oklch(0.72_0.22_245)] animate-pulse" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-mono">SELECTED ARTIFACTS</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.92]">
              Quiet craft.<br/>
              <span className="text-gradient italic font-light">Loud results.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="max-w-sm text-sm text-muted-foreground leading-relaxed"
          >
            A curated grid of digital products engineered with premium precision.
            Each frame calculated, each interaction custom-crafted to elevate.
          </motion.p>
        </div>

        {/* Selected Work Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-5 md:auto-rows-[350px]">
          {items.map((it, i) => (
            <ShowcaseCard
              key={it.title}
              it={it}
              index={i}
              hoverId={hoverId}
              setHoverId={setHoverId}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
