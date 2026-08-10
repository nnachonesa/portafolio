"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/ui/icons";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { socials } from "@/data/profile";
import { cn } from "@/lib/utils";

function isActive(href: string, pathname: string) {
  if (href === "/blog") return pathname.startsWith("/blog");
  return pathname === "/";
}

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#inicio", label: t("inicio") },
    { href: "/#proyectos", label: t("proyectos") },
    { href: "/#tecnologias", label: t("tecnologias") },
    { href: "/blog", label: t("blog") },
  ];

  return (
    <header className="sticky top-0 z-50 animate-fade-in border-b border-border/60 bg-background/70 backdrop-blur-md">
      <Container className="relative flex h-16 items-center">
        <div className="flex flex-1 items-center">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            nnachonesa
          </Link>
        </div>

        <nav
          aria-label={t("inicio")}
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
        >
          {links.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("github")}
            external
            href={socials.github}
            icon={<GithubIcon className="size-4" />}
            className="border border-border"
          />
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors outline-none hover:border-foreground/30 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t("inicio")}
          className="border-t border-border/60 bg-background/70 backdrop-blur-md md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}
