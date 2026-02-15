import Intro from "./components/intro/page";
import Projects from "./components/projects/page";
/* import Articles from "./components/articles/page"; */
import Skills from "./components/skills/page";
import Footer from "./components/footer/page";
import Tt from "./components/toggleTheme/page";
import ThemeProvider from "./components/toggleTheme/themeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "El portafolio de Nacho.",
    description: "El portafolio de Nacho.",
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

export default function Home() {
    return (
        <ThemeProvider attribute="data-mode">
            <main className="relative">
                <Tt />
                <Intro />
                <Projects />
                {/* <Articles /> */}
                <Skills />
                <Footer />
            </main>
        </ThemeProvider>
    );
}
