"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/ui/Parallax";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { profile } from "@/data/profile";

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={entrance}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("titlePrefix")}{" "}

            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("paragraph1")}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("paragraph2")}
            </p>
          </motion.div>

          <motion.div
            variants={entrance}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="relative"
          >
            <Parallax speed={0.6} className="relative">

              <div className="relative mx-auto w-full max-w-sm">
                <div className="rounded-[2rem] bg-gradient-to-br from-grad-from/40 to-grad-to/25 p-1 shadow-glow">
                  <div className="overflow-hidden rounded-[calc(2rem-4px)] bg-card">
                    <Image
                      src={profile.avatar}
                      alt={`Foto de ${profile.name}`}
                      width={512}
                      height={512}
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Parallax>
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
