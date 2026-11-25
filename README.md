# MLP OS Archive

My Little Pony Operating Systems Archive is an independent community project that
collects, documents, and preserves My Little Pony-themed computing projects.
Its goal is to make these projects easier to discover and to keep a record of
historical releases, discontinued projects, and experiments whose original pages
or downloads may disappear.

## What the archive covers

- Independent operating systems, including projects with custom kernels
- My Little Pony-themed Linux distributions
- Desktop environments, themes, and operating system customizations

The Phase 1 catalog defines these categories. Project records will be published
during Phase 2 as the catalog is developed.

## Languages and routes

| Language | Locale | Home |
| --- | --- | --- |
| English | `en` | `/` |
| 简体中文 | `zh-CN` | `/zh-CN/` |
| 繁體中文 | `zh-TW` | `/zh-TW/` |
| 日本語 | `ja` | `/ja/` |
| Español | `es` | `/es/` |
| Français | `fr` | `/fr/` |

Each language has Home, Catalog, History, Contribute, and About pages. The
language menu links to the same page in the selected language. English is the
fallback for missing copy.

## Local development

The site uses Astro static site generation, strict TypeScript, CSS, and npm.
Use Node.js 24 LTS or a version supported by Astro and the package manifest.
The primary branch is `main`.

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro. To check types, build, and preview the
production output locally:

```bash
npm run check
npm run build
npm run preview
```

The static output lives in `dist/`. For a future Cloudflare Pages deployment,
set the build command to `npm run build` and the output directory to `dist`.
The configured production origin is `https://mlpos.evanwindproof.top/`.

## Repository structure

```text
public/             Static assets
src/
  components/       Page content, category cards, and the CSS illustration
  data/             Site constants and future project record types
  i18n/             Locale registry, dictionaries, and localized route definitions
  layouts/          Shared navigation, footer, and metadata
  pages/            Prerendered pages, robots.txt, and sitemap.xml
  styles/           Shared responsive styles
astro.config.mjs    Static build and production site configuration
```

Localized page routes drive page generation, navigation, alternate-language
metadata, and the sitemap. Interface copy lives in `src/i18n/locales/`.
`src/data/projects.ts` defines the future project schema, including
localized descriptions and verification status.

## Development phases

1. Establish the multilingual website and static build, page foundations, and SEO metadata.
2. Develop the project catalog, project detail pages, search, and filters.
3. Add a dedicated community submission workflow.

Detailed historical timelines are planned as sources and release dates are verified.

This is an unofficial, independently maintained fan project. It is not affiliated
with, endorsed by, or sponsored by Hasbro or its subsidiaries.
See [LICENSE](LICENSE) for repository licensing.

## 简体中文

MLP OS Archive 是一个独立的社区档案项目，旨在记录和保存《小马宝莉》主题的
独立操作系统、Linux 发行版、桌面环境与主题。第一阶段提供六种语言的网站与
项目分类，后续将加入项目条目、搜索筛选和资料提交功能。本项目与孩之宝及其
子公司无关联。
