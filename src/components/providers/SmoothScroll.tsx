"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        duration: 1.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
