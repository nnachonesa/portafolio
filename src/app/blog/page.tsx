import type { Metadata } from "next";
import { getFormatter, getTranslations } from "next-intl/server";

import PostCard from "@/components/blog/PostCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos de Nacho sobre programación y seguridad.",
};

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const format = await getFormatter();
  const posts = getAllPosts();

  return (
    <Container className="pt-16 pb-12 md:pt-24">
      <header className="pb-12">
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {t("titleStart")}{" "}
          <span className="bg-gradient-to-r from-grad-from to-grad-to bg-clip-text text-transparent">
            {t("titleAccent")}.
          </span>
        </h1>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 90}>
              <PostCard
                post={post}
                dateLabel={format.dateTime(new Date(`${post.date}T00:00:00`), {
                  dateStyle: "long",
                })}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">{t("empty")}</p>
          <Button variant="outline" href="/">
            {t("backHome")}
          </Button>
        </div>
      )}
    </Container>
  );
}
