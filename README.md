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

Project records appear in the catalog after repository review, merge, and a
static build. Use the [contribution guide](.github/CONTRIBUTING.md) to submit
a project through GitHub Issues or add a record through a pull request.

Projects may be included on the strength of reasonable first-party or
historical evidence. The [inclusion policy](docs/HISTORICAL_ARCHIVE_GUIDE.md#inclusion-and-assessment)
treats record completeness, development status, evidence provenance, and
testing as separate assessments.

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

## Production deployment

The production host is Cloudflare Workers Static Assets at
<https://mlpos.evanwindproof.top/>. Astro uses that origin for canonical
URLs and generates the site into `dist/` with `npm run build`.
The pull-request validation workflow checks and builds the site.

The production Worker's identifier, trigger and publish command are managed
in the existing Cloudflare project. They are not recorded in the repository
and were not visible in the available Cloudflare account during the audit.
Confirm those settings in the production account before making any changes.
The archive currently requires only static assets.

## Repository structure

```text
public/             Static assets
src/
  components/       Page content, category cards, and the CSS illustration
  content/projects/ Reviewed project records as JSON
  data/             Site constants, project validation, and record loading
  i18n/             Locale registry, dictionaries, and localized route definitions
  layouts/          Shared navigation, footer, and metadata
  pages/            Prerendered pages, robots.txt, and sitemap.xml
  styles/           Shared responsive styles
astro.config.mjs    Static build and production site configuration
```

Localized page routes drive page generation, navigation, alternate-language
metadata, and the sitemap. Interface copy lives in `src/i18n/locales/`.
`src/data/projects.ts` defines the build-time project schema, including
localized descriptions and verification status.

## Development phases

1. Establish the multilingual website and static build, page foundations, and SEO metadata.
2. Establish the archive’s visual identity and static deployment configuration.
3. Add multilingual submission forms, contribution review, and catalog records.

4. Publish source-backed project profiles, release records, screenshot links,
   and an evidence-dated historical timeline.

The catalog counts reviewed records in each category and links to six-language
project pages. The History page lists sourced events chronologically and shows
events without dates separately. The
[historical archive guide](docs/HISTORICAL_ARCHIVE_GUIDE.md) documents the
evidence and verification standards. Unresolved leads are tracked in the
[research backlog](docs/RESEARCH_BACKLOG.md).

This is an unofficial, independently maintained fan project. It is not affiliated
with, endorsed by, or sponsored by Hasbro or its subsidiaries.
See [LICENSE](LICENSE) for repository licensing.

## 简体中文

MLP OS Archive 是一个独立的社区档案项目，旨在记录和保存《小马宝莉》主题的
独立操作系统、Linux 发行版、桌面环境与主题。网站提供六种语言、项目目录、历史时间线与贡献入口。
社区可以通过 GitHub 议题或拉取请求提供资料。本项目与孩之宝及其
子公司无关联。
