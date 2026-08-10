import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { skills } from "@/data/skills";

export async function Skills() {
  const t = await getTranslations("skills");

  return (
    <Section id="tecnologias">
      <SectionHeading
        title={
          <>
            {t("titleStart")}{" "}
           {  <span className="bg-gradient-to-r from-grad-from to-grad-to bg-clip-text text-transparent">
            </span> }
          </>
        }
        description={t("description")}
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 sm:grid-cols-3">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 75}>
            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-card">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
