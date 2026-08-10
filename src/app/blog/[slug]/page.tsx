import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations } from "next-intl/server";

import { MarkdownArticle } from "@/components/blog/MarkdownArticle";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPost } from "@/lib/posts";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Artículo",
      description: "Artículo de Nacho.",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const t = await getTranslations("article");
  const format = await getFormatter();

  if (!post) {
    notFound();
  }

  const date = format.dateTime(new Date(`${post.date}T00:00:00`), {
    dateStyle: "long",
  });

  return (
    <Container className="pt-16 pb-12 md:pt-24">
      <div className="mx-auto max-w-[720px]">
        <Button
          variant="ghost"
          size="sm"
          href="/blog"
          icon={<ArrowLeft className="size-4" />}
        >
          {t("back")}
        </Button>

        <header className="mt-8">
          <Chip>
            <Calendar className="size-3.5" />
            {date}
          </Chip>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </header>

        <div className="mt-10">
          <MarkdownArticle html={post.contentHtml} />
        </div>

        <hr className="my-10 border-border" />
      </div>
    </Container>
  );
}
