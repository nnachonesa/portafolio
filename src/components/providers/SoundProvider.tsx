"use client";

import { type ReactNode, useEffect } from "react";

import { playClick } from "@/lib/sound";

export function SoundProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("a, button")) {
        playClick();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return children;
}
