"use client";
import React, { useRef, type ReactNode } from "react";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
  useReducedMotion,
} from "framer-motion";

/**
 * Scroll-driven 3D card reveal (Aceternity-style ContainerScroll, slimmed).
 *
 * Original demo: 60-80rem tall, extreme padding, scales DOWN on mobile.
 * This version: 36rem mobile / 48rem desktop, normal scale direction,
 * respects prefers-reduced-motion (becomes a static card on reduce).
 *
 * SSR-safe: framer-motion's useScroll attaches its listener in useEffect,
 * so the initial server-rendered DOM is identical to the hydrated DOM.
 */
type ContainerScrollProps = {
  titleComponent: string | ReactNode;
  children: ReactNode;
};

export const ContainerScroll = ({ titleComponent, children }: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const reducedMotion = useReducedMotion();

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scale up (1 -> 1.05) feels like the card is "coming toward you" on
  // desktop. On mobile we keep it static-ish because tilt + scale together
  // on small screens just feels wobbly.
  const scaleRange = isMobile ? [0.95, 1] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1, 1] : scaleRange);
  const translate = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -60]);

  return (
    <div
      className="h-[36rem] md:h-[48rem] flex items-center justify-center relative px-4 md:px-12"
      ref={containerRef}
    >
      <div className="w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate}>{titleComponent}</Header>
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({
  translate,
  children,
}: {
  translate: MotionValue<number>;
  children: ReactNode;
}) => (
  <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
    {children}
  </motion.div>
);

const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: ReactNode;
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
      // Promote the card to its own compositor layer up front so scroll-
      // driven rotateX/scale updates don't trigger layout/paint on every
      // frame — they animate purely on the GPU.
      willChange: "transform",
    }}
    className="max-w-5xl mt-6 md:mt-10 mx-auto h-[20rem] md:h-[28rem] w-full border border-border bg-card rounded-2xl md:rounded-3xl shadow-2xl p-2 md:p-3"
  >
    <div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-muted">
      {children}
    </div>
  </motion.div>
);
