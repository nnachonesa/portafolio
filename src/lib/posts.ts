import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "blog");

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MARKDOWN_EXT = ".md";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
};

export type PostWithContent = Post & { contentHtml: string };

type Frontmatter = Partial<Omit<Post, "slug">>;

function normalizeDate(value: unknown): string {
  if (typeof value === "string") return value;
  return new Date().toISOString().split("T")[0];
}

function toPost(slug: string, data: Frontmatter): Post {
  const title = typeof data.title === "string" ? data.title : slug;
  const description =
    typeof data.description === "string"
      ? data.description
      : "Artículo de Nacho.";
  return {
    slug,
    title,
    description,
    date: normalizeDate(data.date),
    tags: Array.isArray(data.tags)
      ? data.tags.filter((t): t is string => typeof t === "string")
      : [],
    image: typeof data.image === "string" ? data.image : "",
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(MARKDOWN_EXT))
    .map((file) => {
      const slug = file.slice(0, -MARKDOWN_EXT.length);
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(raw);
      return toPost(slug, data as Frontmatter);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): PostWithContent | null {
  if (!SLUG_PATTERN.test(slug)) return null;

  const filePath = path.join(BLOG_DIR, `${slug}${MARKDOWN_EXT}`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const html = remark()
    .use(remarkHtml, { sanitize: true })
    .processSync(content);

  return {
    ...toPost(slug, data as Frontmatter),
    contentHtml: html.toString(),
  };
}
