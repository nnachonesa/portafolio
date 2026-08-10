## Stack

- Next.js 16 + Turbopack
- React 19 + React Compiler
- Tailwind CSS v4 (design system con tokens CSS)
- Biome (lint + format)
- next-themes (dark mode con `data-theme`)
- remark + remark-html (blog en markdown)

## Blog

Los posts viven en `blog/` como archivos `.md` con frontmatter:

```md
---
title: "Título"
description: "Descripción"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
image: "/assets/images/cover.png"
---
```

El slug se deriva del nombre del archivo. El HTML se renderiza con remark-html y se sanitiza al servirse.

## Estructura

```
src/
  app/          # rutas y layout
  components/   # ui/, layout/, home/, blog/
  data/         # perfil, proyectos, skills (tipados)
  lib/          # utilitarios, posts, sonido
```

## Credits

- eternal thanks to greezaaa