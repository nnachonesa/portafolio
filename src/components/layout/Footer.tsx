import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/ui/icons";
import { socials } from "@/data/profile";

export async function Footer() {
  const t = await getTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Nacho — nnachonesa
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            {t("github")}
          </a>
          <span aria-hidden="true" className="text-border">
            ·
          </span>
          <span>{t("madeWith")}</span>
        </div>
      </Container>
    </footer>
  );
}
