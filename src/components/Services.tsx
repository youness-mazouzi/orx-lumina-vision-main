import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Code2, Palette, Video, PenLine, TrendingUp, Brain, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const services = [
  {
    icon: Code2,
    title: "Tech & Development",
    desc: "Custom websites, scalable systems, and modern digital platforms engineered for speed, security, and business growth.",
    waMessage: "Hello ORX Services, I’m interested in Tech & Development services. I would like more information about websites, applications, or system development.",
    igMessage: "Hello ORX Services! I’m interested in your Tech & Development services. I would like to get a quote/more information about custom website development or digital platform systems.",
  },
  {
    icon: Palette,
    title: "Design & Creativity",
    desc: "Luxury branding, UI/UX experiences, visual identities, and modern creative direction built to elevate your brand.",
    waMessage: "Hello ORX Services, I’m interested in Design & Creativity services. I would like a branding, logo, or UI/UX design quote.",
    igMessage: "Hello ORX Services! I’m interested in your Design & Creativity services. I would like a branding, logo, or UI/UX design consultation.",
  },
  {
    icon: Video,
    title: "Video & Audio",
    desc: "High-end cinematic editing, motion graphics, promotional reels, and immersive sound production for modern businesses.",
    waMessage: "Hello ORX Services, I’m interested in Video & Audio services. I need editing, motion graphics, or promotional content.",
    igMessage: "Hello ORX Services! I’m interested in your Video & Audio services. I need high-end video editing, motion graphics, or promotional content creation.",
  },
  {
    icon: PenLine,
    title: "Writing & Content",
    desc: "Strategic copywriting, persuasive storytelling, SEO content, and high-conversion brand messaging.",
    waMessage: "Hello ORX Services, I’m interested in Writing & Content services. I would like content creation or copywriting support.",
    igMessage: "Hello ORX Services! I’m interested in your Writing & Content services. I would like copy or content creation support for my brand.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Growth",
    desc: "Performance marketing, social media growth, SEO optimization, and digital campaigns designed for measurable results.",
    waMessage: "Hello ORX Services, I’m interested in Marketing & Growth services. I want help growing my business online.",
    igMessage: "Hello ORX Services! I’m interested in your Marketing & Growth services. I want support with performance marketing, SEO, and social growth.",
  },
  {
    icon: Brain,
    title: "Automation & Systems",
    desc: "Intelligent automation systems, chatbots, workflow optimization, and smart business integrations.",
    featured: true,
    waMessage: "Hello ORX Services, I’m interested in Automation & Systems services. I would like automation solutions for my business.",
    igMessage: "Hello ORX Services! I’m interested in your Automation & Systems services. I'm looking for smart automation solutions or chatbot integrations.",
  },
];

const WhatsAppIcon = () => (
  <svg
    className="h-4.5 w-4.5 text-[#25D366] transition-transform duration-300 group-hover/btn:scale-110"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.012 1.985c-5.522 0-10 4.478-10 10 0 1.772.461 3.436 1.268 4.896L2 22l5.286-1.387c1.408.767 3.011 1.204 4.718 1.204 5.522 0 10-4.478 10-10s-4.478-10-10-10zm.008 1.802c4.522 0 8.198 3.677 8.198 8.198 0 4.522-3.677 8.198-8.198 8.198-1.57 0-3.03-.443-4.275-1.216l-.307-.189-3.18.835.85-3.099-.208-.331c-.846-1.344-1.294-2.909-1.294-4.551 0-4.521 3.676-8.198 8.198-8.198zm-3.551 3.255c-.2 0-.332.09-.456.223-.124.133-.474.463-.474 1.13 0 .666.484 1.309.551 1.398.067.09.932 1.488 2.298 2.029.325.129.579.206.776.269.327.104.625.089.86.054.262-.039.81-.331.924-.651.114-.32.114-.595.08-.651-.034-.056-.124-.09-.262-.158-.138-.068-.81-.401-.935-.446-.125-.045-.216-.068-.307.068-.09.135-.351.446-.43.535-.079.09-.158.101-.296.033-.138-.068-.583-.215-1.111-.686-.411-.366-.689-.817-.77-1.02-.08-.135-.008-.208.06-.275.062-.06.138-.158.208-.237.068-.079.09-.135.138-.225.045-.09.023-.169-.011-.237-.034-.068-.307-.743-.42-1.013-.11-.266-.223-.229-.307-.233-.078-.004-.169-.004-.26-.004z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="h-4.5 w-4.5 text-[#DD2A7B] transition-transform duration-300 group-hover/btn:scale-110"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D card tilt
  const rx = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 18 });

  // Mouse absolute pixel coordinates for radial glow
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(0, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalized values for 3D tilt (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    // Pixel values for gradient positioning
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    glowOpacity.set(0);
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = s.icon;
  // Automatically encode the custom message for URL
  const waLink = `https://wa.me/212782861844?text=${encodeURIComponent(s.waMessage)}`;
  const igLink = "https://ig.me/m/orx__orx";

  const handleInstagramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(s.igMessage)
        .then(() => {
          toast.custom((t) => (
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral-950/95 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(221,42,123,0.22)] text-white w-full max-w-sm pointer-events-auto transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#DD2A7B]/10 flex items-center justify-center border border-[#DD2A7B]/20 shrink-0">
                    <InstagramIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white leading-tight">Request copied! 📥</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Collih direct f l-chat dyal Instagram</p>
                  </div>
                </div>
                <button 
                  onClick={() => toast.dismiss(t)}
                  className="text-xs text-neutral-500 hover:text-white transition-colors p-1 rounded hover:bg-white/5 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="p-2.5 bg-neutral-900/60 rounded-lg border border-white/5 text-[11px] font-mono text-neutral-300 leading-relaxed max-w-[280px] break-words line-clamp-2">
                "{s.igMessage}"
              </div>
            </div>
          ), {
            duration: 6000,
            position: "bottom-right",
          });
        })
        .catch((err) => {
          console.error("Clipboard copy failed: ", err);
        });
    }

    window.open(igLink, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1200,
      }}
      className="group relative p-[1px] rounded-[28px] overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 min-h-[520px] md:min-h-[540px]"
    >
      {/* Interactive Border Light (Radial Gradient following cursor) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-500 z-0"
        style={{
          opacity: glowOpacity,
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(160px circle at ${x}px ${y}px, var(--color-neon-purple) 0%, var(--color-neon-blue) 40%, transparent 100%)`
          ),
        }}
      />

      {/* Static Subtle Border (Fallback when not hovered) */}
      <div className="absolute inset-px rounded-[28px] border border-white/5 pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Main Glassmorphic Card Container */}
      <div className="relative z-10 h-full w-full rounded-[27px] bg-neutral-950/80 backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between gap-10 overflow-hidden">
        {/* Soft Ambient Cursor-Tracking Background Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[27px] transition-opacity duration-500"
          style={{
            opacity: useTransform(glowOpacity, (v) => v * 0.12),
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(260px circle at ${x}px ${y}px, var(--color-neon-purple) 0%, var(--color-neon-blue) 50%, transparent 100%)`
            ),
          }}
        />

        {/* Featured Card Ambient Static Accent */}
        {s.featured && (
          <div
            className="absolute top-0 right-0 w-[450px] h-[450px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none opacity-20 transition-opacity duration-1000 group-hover:opacity-30"
            style={{
              background: "radial-gradient(circle, var(--color-neon-purple) 0%, var(--color-neon-blue) 60%, transparent 100%)",
              filter: "blur(70px)",
            }}
          />
        )}

        {/* Top Header Row of Card */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="glass-strong h-14 w-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg shadow-black/40 transition-all duration-500 group-hover:scale-110 group-hover:border-purple-500/30 group-hover:shadow-purple-500/5">
            <Icon className="h-6 w-6 text-purple-300 transition-colors duration-500 group-hover:text-white" />
          </div>
          <span className="text-xs font-mono tracking-widest text-neutral-500/80 group-hover:text-purple-300 transition-colors duration-500">
            0{i + 1}
          </span>
        </div>

        {/* Card Typography & Text Content */}
        <div className="relative z-10 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 transition-colors duration-500 group-hover:text-purple-100">
              {s.title}
            </h3>
            <p className="text-sm md:text-[15px] leading-relaxed text-neutral-400 font-normal transition-colors duration-500 group-hover:text-neutral-300 max-w-xl">
              {s.desc}
            </p>
          </div>
        </div>

        {/* Action Button Container - WhatsApp & Instagram Stack */}
        <div className="relative z-20 flex flex-col gap-3">
          {/* Premium Call to Action Button - WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-6 py-3.5 rounded-full border border-white/5 bg-gradient-to-r from-neutral-900/60 to-neutral-950/60 backdrop-blur-md text-sm font-semibold text-neutral-300 shadow-lg shadow-black/40 hover:text-white hover:border-[#25D366]/30 hover:shadow-[0_0_24px_rgba(37,211,102,0.18)] hover:-translate-y-0.5 transition-all duration-300 group/btn cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <WhatsAppIcon />
              <span>Order via WhatsApp</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-neutral-500 group-hover/btn:text-[#25D366] transition-colors duration-300 font-medium">Request</span>
              <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-all duration-300 group-hover/btn:text-[#25D366] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </div>
          </a>

          {/* Premium Call to Action Button - Instagram DM */}
          <a
            href={igLink}
            onClick={handleInstagramClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-6 py-3.5 rounded-full border border-white/5 bg-gradient-to-r from-neutral-900/60 to-neutral-950/60 backdrop-blur-md text-sm font-semibold text-neutral-300 shadow-lg shadow-black/40 hover:text-white hover:border-[#DD2A7B]/30 hover:shadow-[0_0_24px_rgba(221,42,123,0.18)] hover:-translate-y-0.5 transition-all duration-300 group/btn cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <InstagramIcon />
              <span>Message on Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-neutral-500 group-hover/btn:text-[#DD2A7B] transition-colors duration-300 font-medium">Chat</span>
              <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-all duration-300 group-hover/btn:text-[#DD2A7B] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-36 px-6 bg-[#050505] overflow-hidden">
      {/* Cybernetic Grid Background with Ambient Texture */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] mix-blend-screen pointer-events-none" />

      {/* Neon Purple/Blue Giant Ambient Glowing Spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,var(--color-neon-purple)_0%,transparent_70%)] opacity-[0.06] blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,var(--color-neon-blue)_0%,transparent_70%)] opacity-[0.05] blur-[140px] pointer-events-none animate-glow-pulse [animation-delay:2s]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 glass px-4 py-1.5 rounded-full mb-8 border border-white/5">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse shadow-md shadow-purple-400" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
              Agency Capabilities
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
            Six services.<br />
            <span className="text-gradient font-black">One intelligent studio.</span>
          </h2>
        </motion.div>

        {/* Perfectly Balanced Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
