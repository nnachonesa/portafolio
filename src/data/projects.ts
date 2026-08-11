export const projectIds = [
  "gtaw-es",
  "akagi",
  "ascii",
  "yask",
  "snowflake",
  "murasaki",
  "ecomongo",
  "temptasks",
  "handino",
  "niko",
] as const;

export type ProjectId = (typeof projectIds)[number];

export type Project = {
  id: ProjectId;
  name: string;
  tags: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "gtaw-es",
    name: "GTAWorld FaceBrowser SDK",
    tags: ["typescript", "gtaw", "facebrowser", "sdk"],
    github: "https://github.com/nnachonesa/gtaworld-facebrowser-sdk",
  },
  {
    id: "akagi",
    name: "Akagi",
    tags: ["python", "speech", "ai", "openai"],
    github: "https://github.com/nnachonesa/Akagi",
  },
  {
    id: "ascii",
    name: "Ascii Generator",
    tags: ["ascii", "javascript"],
    github:
      "https://github.com/nnachonesa/nnachonesa.github.io/blob/master/projects/ascii.html",
    live: "https://nnachonesa.github.io/projects/ascii.html",
  },
  {
    id: "yask",
    name: "Yask",
    tags: ["typescript", "cache"],
    github: "https://github.com/nnachonesa/yask",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    tags: ["rust", "binary"],
    github: "https://github.com/nnachonesa/snowflake",
  },
  {
    id: "murasaki",
    name: "Murasaki",
    tags: ["typescript", "whatsapp", "bot"],
    github: "https://github.com/nnachonesa/Murasaki",
  },
  {
    id: "ecomongo",
    name: "EcoMongo",
    tags: ["typescript", "mongodb"],
    github: "https://github.com/nnachonesa/EcoMongo",
  },
  {
    id: "temptasks",
    name: "TempTasks",
    tags: ["typescript", "electron"],
    github: "https://github.com/nnachonesa/TempTasks",
  },
  {
    id: "handino",
    name: "handino",
    tags: ["arduino", "cpp"],
    github: "https://github.com/nnachonesa/handino",
  },
  {
    id: "niko",
    name: "niko-openai",
    tags: ["javascript", "ai", "discord"],
    github: "https://github.com/nnachonesa/niko-openai",
  },
];
