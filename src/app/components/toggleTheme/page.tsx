"use client";
import { useTheme } from "next-themes";

let dark: boolean = false;
let toggle: string = "dark";

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  function toggleTheme() {
    switch (toggle) {
      case "dark":
        toggle = "light";
        setTheme("light");
        break;
      case "light":
        toggle = "dark";
        setTheme("dark");
        break;
      default:
        toggle = "dark";
        setTheme("dark");
        break;
    }
  }
  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 z-50 text-2xl p-2 rounded-full hover:scale-105 transition-transform"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
