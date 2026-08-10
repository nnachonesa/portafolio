import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}
