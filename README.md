# MLP OS Archive

My Little Pony Operating Systems Archive is an independent, non-commercial fan project that collects, documents, and preserves MLP-related computing projects. It covers three categories:

- Independent operating systems
- MLP-themed Linux distributions
- Desktop themes and operating-system customizations

Projects must contain substantive MLP elements in their actual system or desktop experience. Historical, discontinued, unfinished, and experimental third-party projects may qualify when their identity and relevance are supported by traceable evidence. A submitter's own OS project must have actual development work; a plan alone is not enough. A standard Linux distribution with only an MLP wallpaper or superficial changes does not qualify as a distinct distribution.

Read the [Project Inclusion Policy](docs/INCLUSION_POLICY.md) for the complete eligibility, evidence, duplicate, copyright, and review rules. The [contribution guide](.github/CONTRIBUTING.md) explains how to submit through GitHub Issues or pull requests. Historical sources, release records, screenshots, and download provenance are documented in the [historical archive guide](docs/HISTORICAL_ARCHIVE_GUIDE.md).

## Languages and routes

| Language | Locale | Home |
| --- | --- | --- |
| English | `en` | `/` |
| 简体中文 | `zh-CN` | `/zh-CN/` |
| 繁體中文 | `zh-TW` | `/zh-TW/` |
| 日本語 | `ja` | `/ja/` |
| Español | `es` | `/es/` |
| Français | `fr` | `/fr/` |

Each language has Home, Catalog, History, Contribute, and About pages. English is the fallback for missing copy.

## Local development

The site uses Astro static site generation, strict TypeScript, CSS, and npm. Use Node.js 24 LTS or a version supported by Astro and the package manifest.

```bash
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

## Production deployment

The production site is hosted at <https://mlpos.evanwindproof.top/>. The pull-request validation workflow checks and builds the site. Deploy using the existing authorized production workflow.

## Repository structure

```text
docs/               Inclusion policy, submission guide, and historical research guidance
.github/            Contribution instructions and localized issue forms
public/             Static assets
src/
  components/       Page content and shared components
  content/projects/ Reviewed project records as JSON
  data/             Site constants, project validation, and record loading
  i18n/             Locale registry, dictionaries, and localized routes
  layouts/          Shared navigation, footer, and metadata
  pages/            Prerendered pages, localized 404s, robots.txt, and sitemap.xml
  styles/           Shared responsive styles
```

The catalog and History page are generated from reviewed, source-backed records. A GitHub Issue is a proposal, not an accepted record. Publication occurs after review, merge, build, and deployment.

This is an unofficial, independently maintained fan project. It is not affiliated with, authorized, endorsed by, or sponsored by Hasbro or its subsidiaries. My Little Pony and related protected materials belong to their respective rights holders. See [LICENSE](LICENSE) for the repository license.
