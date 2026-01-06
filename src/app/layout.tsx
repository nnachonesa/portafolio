"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import "./globals.css";
import ThemeProvider from "./components/toggleTheme/themeProvider";
import Button/* , { ButtonStyle } */ from "./components/Button";


const metadata: Metadata = {

    title: "Nacho | Portafolio",
    description: "Nacho Portafolio",
    icons: {
        icon: "https://avatars.githubusercontent.com/u/76927919?v=4",
    },
    authors: [
        {
            name: "nnachonesa",
            url: "https://github.com/nnachonesa",
        },
    ],
    twitter: {
        title: "Nacho Portafolio",
        card: "summary_large_image",
        images: { url: "https://avatars.githubusercontent.com/u/76927919?v=4" },
        description: "Nacho Portafolio",
        site: "https://github.com/nnachonesa",
    },
    keywords: ["portafolio", "nestjs", "typescript"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 fade-up">
                <nav className="nav-nav">
                    <br />
                    {IsHome() !== true && (
                        <>
                            <Button
                                className="rounded-xs text-xl nav-a ml-4"
                                href="../"
                                text="⬅ Volver"
                            ></Button>
                            <span className="ml-2">|</span>
                        </>
                    )}
                    <Button
                        className="rounded-xs text-xl nav-a mx-2"
                        href="https://github.com/nnachonesa"
                        // target="_blank"
                        // rel="noreferrer"
                        text="🖥️ Github"
                    ></Button>
                    <span className="">|</span>
                    <Button
                        href="./#projects"
                        text="📁 Proyectos"
                        className="rounded-xs text-xl nav-a ml-2">
                    </Button>
                    <span className="ml-2">|</span>
                    <Button
                        className="rounded-xs text-xl nav-a ml-2"
                        href="./#skills"
                        text="📋 Tecnologias"
                    ></Button>
                    {/*                  <span className="ml-2">|</span>
                    <a
                        className="rounded-xs text-xl nav-a ml-2"
                        href="./#articles"
                    >
                        ✍ Posts
                    </a> */}
                    {/* <span className="ml-2">|</span>
                    <a
                        className="rounded-xs text-xl nav-a ml-2"
                        href="./projects-posts/robot-sumo.tsx"
                    >
                        📍 Ultimo post
                    </a> */}
                    <br />
                    <br />
                </nav>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

function IsHome(): boolean {
    return usePathname() === "/" ? true : false
}