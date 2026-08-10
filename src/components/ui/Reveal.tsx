"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

export function Reveal({ children, className, delay = 0, style }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={style}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
