import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const blob = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    let x = 0, y = 0, tx = 0, ty = 0;
    let rx = 0, ry = 0;
    let raf = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      if (blob.current) blob.current.style.transform = `translate3d(${tx - 300}px, ${ty - 300}px, 0)`;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    loop();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={blob}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full opacity-70 mix-blend-screen will-change-transform"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.28 300 / 0.28), oklch(0.72 0.22 245 / 0.10) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] h-9 w-9 rounded-full border border-white/40 will-change-transform mix-blend-difference"
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] h-2 w-2 rounded-full bg-white will-change-transform mix-blend-difference"
      />
    </>
  );
}
