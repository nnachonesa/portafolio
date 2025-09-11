import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/toggleTheme/themeProvider";

export const metadata: Metadata = {
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
    keywords: ["portafolio"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 fade-up">
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
