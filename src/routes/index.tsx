import { createFileRoute } from "@tanstack/react-router";
// Loader removed to disable initial splash/logo
import { CursorGlow } from "@/components/CursorGlow";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Projects } from "@/components/Projects";
import { Manifesto } from "@/components/Manifesto";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Marquee } from "@/components/Marquee";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { SocialButtons } from "@/components/SocialButtons";
import ProjectModal from "@/components/ProjectModal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ORX Services — Cinematic Digital Studio · MMXXVI" },
      { name: "description", content: "ORX Services: a cinematic studio engineering luxury digital experiences across tech, brand and content." },
      { property: "og:title", content: "ORX Services — Cinematic Digital Studio" },
      { property: "og:description", content: "Six disciplines. One obsession with craft." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Loader removed: no initial splash/logo */}
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Showcase />
        <Manifesto />
        <Testimonials />
        <Process />
        <CTA />
      </main>
      <Footer />
      <SocialButtons />
      <ProjectModal />
    </div>
  );
}
