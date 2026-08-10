type MarkdownArticleProps = {
  html: string;
};

// The HTML comes from markdown rendered server-side with remark-html and
// sanitized with its default GitHub schema (see lib/posts.ts).
export function MarkdownArticle({ html }: MarkdownArticleProps) {
  return (
    <article
      className="prose-nacho"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
