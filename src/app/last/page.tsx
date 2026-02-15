import { remark } from 'remark'
import remarkHtml from 'remark-html'
import path from "path"
import fs from "fs"
import "./index.css";
import "../globals.css"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "El ultimo post de Nacho.",
    description: "El ultimo post de Nacho en el portafolio de Nacho.",
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

export default async function Posts() {
    const blogPath = path.join(process.cwd(), "blog")
    const contentRaw = fs.readFileSync(path.join(blogPath, "protec.md"), { encoding: "utf-8" });

    const content = await remark().use(remarkHtml).process(contentRaw);
    return (
        <article
            className='markdown'
            dangerouslySetInnerHTML={{ __html: content.toString() }}
        />
    );
}
