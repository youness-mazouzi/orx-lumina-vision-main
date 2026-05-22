import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Code2, Palette, Video, PenLine, TrendingUp, Brain, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const services = [
  {
    icon: Code2,
    title: "Technologie & Développement",
    desc: "Sites web sur mesure, systèmes évolutifs et plateformes numériques modernes conçus pour la vitesse, la sécurité et la croissance.",
    waMessage: "Bonjour ORX Services, je suis intéressé(e) par vos services de Technologie & Développement. J'aimerais plus d'informations.",
    igMessage: "Bonjour ORX Services ! Je suis intéressé(e) par vos services de Technologie & Développement. J'aimerais un devis ou plus d'informations.",
  },
  {
    icon: Palette,
    title: "Design & Créativité",
    desc: "Branding de luxe, expériences UI/UX, identités visuelles et direction créative moderne pour élever votre marque.",
    waMessage: "Bonjour ORX Services, je suis intéressé(e) par vos services de Design & Créativité. J'aimerais un devis pour mon projet.",
    igMessage: "Bonjour ORX Services ! Je suis intéressé(e) par vos services de Design & Créativité. J'aimerais une consultation.",
  },
  {
    icon: Video,
    title: "Vidéo & Audio",
    desc: "Montage cinématique haut de gamme, motion design, vidéos promotionnelles et production sonore immersive.",
    waMessage: "Bonjour ORX Services, je suis intéressé(e) par vos services de Vidéo & Audio. J'ai besoin de contenu vidéo/audio.",
    igMessage: "Bonjour ORX Services ! Je suis intéressé(e) par vos services de Vidéo & Audio. J'ai un projet de création de contenu.",
  },
  {
    icon: PenLine,
    title: "Rédaction & Contenu",
    desc: "Copywriting stratégique, storytelling persuasif, contenu SEO et messages de marque à fort taux de conversion.",
    waMessage: "Bonjour ORX Services, je suis intéressé(e) par vos services de Rédaction & Contenu.",
    igMessage: "Bonjour ORX Services ! Je suis intéressé(e) par vos services de Rédaction & Contenu pour ma marque.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Croissance",
    desc: "Marketing à la performance, croissance sur les réseaux sociaux, optimisation SEO et campagnes numériques axées sur les résultats.",
    waMessage: "Bonjour ORX Services, je suis intéressé(e) par vos services de Marketing & Croissance.",
    igMessage: "Bonjour ORX Services ! Je suis intéressé(e) par vos services de Marketing & Croissance pour développer mon activité.",
  },
  {
    icon: Brain,
    title: "Automatisation & Systèmes",
    desc: "Systèmes d'automatisation intelligents, chatbots, optimisation des flux de travail et intégrations professionnelles.",
    featured: true,
    waMessage: "Bonjour ORX Services, je suis intéressé(e) par vos services d'Automatisation & Systèmes.",
    igMessage: "Bonjour ORX Services ! Je suis intéressé(e) par des solutions d'Automatisation & Systèmes pour mon entreprise.",
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rx = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 180, damping: 20 });

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(0, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

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
  const waLink = `https://wa.me/212782861844?text=${encodeURIComponent(s.waMessage)}`;
  const igLink = "https://ig.me/m/orx__orx";

  const handleInstagramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(s.igMessage)
        .then(() => {
          toast.custom((t) => (
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral-950/95 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] text-white w-full max-w-sm pointer-events-auto transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <InstagramIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white leading-tight">Message copié ! 📥</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Collez-le directement sur Instagram</p>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1200,
      }}
      className="group relative p-[1px] rounded-[24px] overflow-hidden transition-all duration-500 shadow-2xl hover:-translate-y-1 min-h-[480px] md:min-h-[500px]"
    >
      {/* Interactive Border Light (Subtle White Glow) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[24px] transition-opacity duration-500 z-0"
        style={{
          opacity: glowOpacity,
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(150px circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, transparent 100%)`
          ),
        }}
      />

      <div className="absolute inset-px rounded-[24px] border border-white/5 pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Main Glassmorphic Card Container */}
      <div className="relative z-10 h-full w-full rounded-[23px] bg-neutral-950/90 backdrop-blur-2xl p-8 flex flex-col justify-between gap-8 overflow-hidden">
        {/* Soft Ambient Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[23px] transition-opacity duration-500"
          style={{
            opacity: useTransform(glowOpacity, (v) => v * 0.05),
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(200px circle at ${x}px ${y}px, rgba(255,255,255,0.8) 0%, transparent 100%)`
            ),
          }}
        />

        {s.featured && (
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none opacity-10 transition-opacity duration-1000 group-hover:opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 100%)",
              filter: "blur(60px)",
            }}
          />
        )}

        <div className="relative z-10 flex items-center justify-between">
          <div className="h-12 w-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/10">
            <Icon className="h-5 w-5 text-neutral-300 transition-colors duration-500 group-hover:text-white" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors duration-500">
            0{i + 1}
          </span>
        </div>

        <div className="relative z-10 flex-grow flex flex-col justify-start mt-6">
          <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white mb-3 transition-colors duration-500">
            {s.title}
          </h3>
          <p className="text-sm md:text-[15px] leading-relaxed text-neutral-400 font-normal transition-colors duration-500 group-hover:text-neutral-300 max-w-xl">
            {s.desc}
          </p>
        </div>

        <div className="relative z-20 flex flex-col gap-2 mt-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-5 py-3 rounded-xl border border-white/5 bg-white/5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 hover:border-[#25D366]/30 transition-all duration-300 group/btn"
          >
            <div className="flex items-center gap-2.5">
              <WhatsAppIcon />
              <span>Commander via WhatsApp</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover/btn:text-[#25D366] transition-colors duration-300" />
          </a>

          <a
            href={igLink}
            onClick={handleInstagramClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-5 py-3 rounded-xl border border-white/5 bg-white/5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 hover:border-[#DD2A7B]/30 transition-all duration-300 group/btn"
          >
            <div className="flex items-center gap-2.5">
              <InstagramIcon />
              <span>Message sur Instagram</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover/btn:text-[#DD2A7B] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 noise opacity-[0.03] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 glass px-4 py-1.5 rounded-full mb-6 border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse shadow-md shadow-white" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Compétences de l'Agence
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Six expertises.<br />
            <span className="text-neutral-500">Un studio intelligent.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
