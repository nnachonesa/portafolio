"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

export function Parallax({ children, className, speed = 0.5 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(
    scrollYProgress,
    [0, 1],
    [speed * 100, speed * -100],
  );
  const y = useSpring(raw, { stiffness: 80, damping: 25 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
