"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  let dark: boolean = false;
  function toggleTheme() {
    let toggle: string = "system";
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
        toggle = "system";
        setTheme("system");
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
