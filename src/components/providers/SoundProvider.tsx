"use client";

import { type ReactNode, useEffect } from "react";

import { playClick } from "@/lib/sound";

export function SoundProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const path = event.composedPath();

      if (
        path.some(
          (entry) => entry instanceof Element && entry.matches("a, button"),
        )
      ) {
        playClick();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return children;
}
