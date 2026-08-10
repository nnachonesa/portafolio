"use client";

import { Howl } from "howler";

let click: Howl | null = null;

function getClick() {
  if (typeof window === "undefined") return null;
  if (!click) {
    click = new Howl({
      src: ["/assets/sfx/click.wav"],
      volume: 0.18,
    });
  }
  return click;
}

export function playClick() {
  getClick()?.play();
}
