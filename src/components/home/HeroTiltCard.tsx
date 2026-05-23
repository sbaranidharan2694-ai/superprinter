import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle 3D tilt-on-cursor wrapper for the hero image card.
 *
 * Why this is cheap:
 *  - Pure CSS transforms; no animation libraries.
 *  - One rAF-throttled `mousemove` listener; idle CPU at rest.
 *  - Gated by `(hover: hover) and (pointer: fine)` so touch devices and
 *    mobile get no JS attached at all.
 *  - Honours `prefers-reduced-motion: reduce`.
 *
 * SSR-safe: server renders the children identically; the effect only attaches
 * post-hydration, so there's no DOM mismatch.
 */
type Props = {
  children: ReactNode;
  /** Max tilt in degrees on each axis. Keep small — this is decorative. */
  maxTiltDeg?: number;
  className?: string;
};

const HeroTiltCard = ({ children, maxTiltDeg = 6, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Bail on touch / coarse-pointer / reduced-motion. No listeners attached.
    if (typeof window === "undefined" || !window.matchMedia) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;
    const tilt = () => {
      raf = 0;
      el.style.setProperty("--tilt-x", `${pendingX.toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${pendingY.toFixed(2)}deg`);
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const px = cx / rect.width - 0.5; // -0.5..0.5
      const py = cy / rect.height - 0.5;
      // Invert Y so cursor up = card tilts up.
      pendingY = -px * maxTiltDeg * 2;
      pendingX = py * maxTiltDeg * 2;
      if (!raf) raf = requestAnimationFrame(tilt);
    };

    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [maxTiltDeg]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        transform:
          "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
        transition: "transform 240ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default HeroTiltCard;
