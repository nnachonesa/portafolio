import { ArrowUpRight, Folder } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export async function Projects() {
  const t = await getTranslations("projects");

  return (
    <Section id="proyectos">
      <SectionHeading
        title={
          <>
            {t("titleStart")}{" "}
            <span className="bg-gradient-to-r from-grad-from to-grad-to bg-clip-text text-transparent">
            </span>
          </>
        }
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 3) * 90}>
            <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Folder className="size-5" />
                </span>
                <h3 className="font-semibold text-foreground">
                  {project.name}
                </h3>
              </div>

              <p className="mt-4 flex-1 text-sm text-muted-foreground">
                {t(`items.${project.id}.description`)}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  external
                  href={project.github}
                  icon={<GithubIcon className="size-4" />}
                >
                  {t("code")}
                </Button>
                {project.live && (
                  <Button
                    variant="primary"
                    size="sm"
                    external
                    href={project.live}
                    icon={<ArrowUpRight className="size-4" />}
                  >
                    {t("demo")}
                  </Button>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
