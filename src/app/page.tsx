"use client";
import Intro from "./components/intro/page";
import Projects from "./components/projects/page";
// import Articles from "./components/articles/page";
import Skills from "./components/skills/page";
import Footer from "./components/footer/page";
import Tt from "./components/toggleTheme/page";
import ThemeProvider from "./components/toggleTheme/themeProvider";

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
