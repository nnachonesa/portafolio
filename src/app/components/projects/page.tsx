import { projects } from "@/data/projects.json";
import Button from "../Button";
import { Metadata } from "next";

function ProjectCard({
    project,
}: {
    project: {
        live_url: string;
        homepage: string;
        name: string;
        description: string;
        tags: string[];
        html_url: string;
    };
}) {
    const liveDemoLink = project.live_url || project.homepage || "";

    return (
        <div
            className="project-card flex flex-col justify-between rounded-xl p-4 
                 shadow-md transition duration-300"
        >
            <div>
                <h2 className="text-lg font-semibold mb-2 text-[var(--text-color)]">
                    {project.name}
                </h2>
                <p className="text-sm mb-4 text-[var(--text-color)] opacity-80">
                    {project.description || "Sin descripción."}
                </p>
                <ul className="project-tags flex flex-wrap gap-2">
                    {project.tags?.map((tag: string) => (
                        <span
                            key={tag}
                            className="project-tag inline-flex cursor-default items-center rounded-md 
                         border border-[var(--articles-bg)] bg-[var(--articles-si)] 
                         px-2 py-1 font-mono text-xs font-medium text-[var(--text-color)]"
                        >
                            {tag}
                        </span>
                    ))}
                </ul>
            </div>

            <div className="project-links flex justify-between items-center mt-4">
                <Button
                    className="text-sm font-medium flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                    aria-label="GitHub Repository"
                    href={project.html_url}
                    text={
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            <span className="sr-only">GitHub Repository</span>
                        </div>
                    }
                ></Button>

                {liveDemoLink && (
                    <Button
                        className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                        aria-label="Live Demo"
                        href={liveDemoLink}
                        text="Ver en linea"
                    ></Button>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex items-center justify-center min-h-[50vh] w-full p-4 max-w-[1920px] mx-auto"
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {projects.map((project) => (
                    // @ts-expect-error si.
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}
