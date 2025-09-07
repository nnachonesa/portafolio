"use client";
import Intro from "./components/intro/page";
import Articles from "./components/articles/page";
import Skills from "./components/skills/page";
import Footer from "./components/footer/page";
import Tt from "./components/toggleTheme/page";

export default function Home() {
  return (
      <main className="relative">
        <Tt />
        <Intro />
        <Articles />
        <Skills />
        <Footer />
      </main>
  );
}
