"use client";
import { articles } from "@/data/articles.json";
import Button, { ButtonStyle } from "@/app/components/Button";


export default function Blog() {
    return (
        <div>
            {articles.map((article) => (
                <div>
                    <h1 key={"s"}>{article.title}</h1>
                    <h1 key={"ss"}>{article.desc}</h1>
                </div>
            ))}
        </div>

    );
}
