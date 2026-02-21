import { articles } from "@/data/articles.json";
import { Metadata } from "next";
import Image from "next/image";
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

function PostCard({
    article,
}: {
    article: {
        img: string;
        title: string;
        desc: string;
        tags: string[];
        slug: string;
    };
}) {
    return (
        <div
            className="
      p-5 w-[330px] min-h-[370px] rounded-[20px]
      transition duration-300 hover:-translate-y-2
      bg-[#ffffff]  shadow-lg  hover:shadow-xl border border-[#e5e5e5] dark:bg-[#1f1f1f] dark:border-[#2a2a2a] dark:shadow-[5px_5px_12px_#141414,-5px_-5px_12px_#2a2a2a]
    "
        >
            <a href={`blog/${article.slug}`}>
                <div
                    className="
          min-h-[170px] rounded-[15px] overflow-hidden shadow-inner dark:shadow-[inset_5px_5px_8px_#141414,inset_-5px_-5px_8px_#2a2a2a]
        "
                >
                    <Image
                        src={article.img.toString()}
                        alt="Foto de articulo"
                        width={10000}
                        height={10000}
                        className="w-full h-[170px] object-cover"
                    />
                </div>

                <p
                    className=" text-[18px] font-semibold mt-[15px] ml-[10px] text-[#222] dark:text-[#f1f1f1]"
                >
                    {article.title}
                </p>

                <p className="text-[15px] mt-[13px] ml-[10px] text-[#555] dark:text-[#bdbdbd]">
                    {article.desc}
                </p>
                {article.tags.map((t) => (
                    <p
                        key={t}
                        className="
            text-[13px] mt-[28px] ml-[3px] text-right  inline-flex cursor-default items-center  rounded-md px-2 py-1 font-mono text-xs font-medium bg-[#f1f1f1] text-[#444] border border-[#ddd] dark:bg-[#2a2a2a]  dark:text-[#aaa]  dark:border-[#3a3a3a]
          "
                    >
                        {t}
                    </p>
                ))}
            </a>
        </div>
    );
}

export default function Blog() {
    return (
        <ThemeProvider attribute="data-mode">
            <main className="relative">
                <Tt></Tt>
                <section
                    className="flex items-center justify-center min-h-[50vh] w-full p-4 max-w-[1920px] mx-auto"
                >
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
                        {articles.map((article) => (
                            <PostCard key={article.slug} article={article} />
                        ))}
                    </div>
                </section>
            </main>
        </ThemeProvider>
    );
}
