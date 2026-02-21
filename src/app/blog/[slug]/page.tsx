import { remark } from 'remark'
import remarkHtml from 'remark-html'
import path from "path"
import fs from "fs"
import "@/app/blog/index.css";
import "@/app/globals.css"
import { Metadata } from 'next';
import { ThemeProvider } from "next-themes";
import Tt from "@/app/components/toggleTheme/page";

export const metadata: Metadata = {
    title: "El blog de Nacho.",
    description: "El blog de Nacho.",
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
        title: "El blog de Nacho.",
        card: "summary_large_image",
        images: { url: "https://avatars.githubusercontent.com/u/76927919?v=4" },
        description: "El blog de Nacho.",
        site: "https://github.com/nnachonesa",
    },
    keywords: ["portafolio", "nestjs", "typescript"],
};

export default async function Posts({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const blogPath = path.join(process.cwd(), "blog")
    const contentRaw = fs.readFileSync(path.join(blogPath, `${slug}.md`), { encoding: "utf-8" });
    // console.log(blogPath, contentRaw, slug, path.join(blogPath, `${slug}.md`))
    const content = await remark().use(remarkHtml).process(contentRaw);
    return (
        <ThemeProvider attribute="data-mode">
            <main className="relative">
                <Tt></Tt>
                <article
                    className='markdown'
                    dangerouslySetInnerHTML={{ __html: content.toString() }}
                />
            </main>
        </ThemeProvider>
    );
}
