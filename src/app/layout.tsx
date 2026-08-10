import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";

import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SoundProvider } from "@/components/providers/SoundProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://nachonesa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "El portafolio de Nacho.",
    template: "%s · Nacho",
  },
  description:
    "El portafolio de Nacho. Desarrollador backend, proyectos y artículos sobre programación.",
  applicationName: "Portafolio de Nacho",
  keywords: ["portafolio", "nestjs", "typescript", "rust", "backend"],
  authors: [{ name: "nnachonesa", url: "https://github.com/nnachonesa" }],
  creator: "nnachonesa",
  icons: {
    icon: "/assets/images/avatar.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Portafolio de Nacho",
    title: "El portafolio de Nacho.",
    description:
      "El portafolio de Nacho. Desarrollador backend, proyectos y artículos sobre programación.",
    images: [{ url: "/assets/images/avatar.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El portafolio de Nacho.",
    description:
      "El portafolio de Nacho. Desarrollador backend, proyectos y artículos sobre programación.",
    images: ["/assets/images/avatar.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SoundProvider>
              <SmoothScroll>
                <ScrollProgress />
                <a
                  href="#main"
                  className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
                >
                  Saltar al contenido
                </a>
                <Navbar />
                <main id="main" className="flex-1">
                  {children}
                </main>
              </SmoothScroll>
            </SoundProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
