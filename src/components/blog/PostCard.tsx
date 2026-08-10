import { Calendar, PenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/lib/posts";

type PostCardProps = {
  post: Post;
  dateLabel: string;
};

export default function PostCard({ post, dateLabel }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PenLine className="size-10 text-muted-foreground/40" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Calendar className="size-3.5" />
          {dateLabel}
        </p>
        <h3 className="font-semibold text-foreground">{post.title}</h3>
        <p className="text-sm text-muted-foreground">{post.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
