"use client";
import { articles } from "@/data/articles.json";

export default function Articles() {
  return (
    <section
      id="articles"
      className="py-12 px-4 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow">
        Artículos
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {articles.map((article) => (
          <a href={article.src} key={article.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-amber-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 4H2v16h20V6H12l-2-2z" />
            </svg>
            <div>
              <h3 className="font-semibold">{article.title}</h3>
              <p className="text-sm">{article.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
