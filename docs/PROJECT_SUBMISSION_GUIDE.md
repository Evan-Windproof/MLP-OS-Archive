# Project submission guide

MLP OS Archive preserves My Little Pony-themed operating systems and related
projects. Independent kernels, Linux distributions, and desktop customization
projects are welcome, including historical, discontinued, incomplete, and
experimental work.

## Submit a GitHub Issue

1. Open the [issue form chooser](https://github.com/Evan-Windproof/MLP-OS-Archive/issues/new/choose)
   or use the form linked from the archive's Contribute page in your language.
2. Enter the project name, category, and short description. Include at least
   one public HTTP or HTTPS source, such as an original release, repository,
   archived website, or contemporary documentation.
3. Add optional details you can support. Use **Unknown** for an uncertain
   development status and leave other uncertain fields blank. Preserve the
   original spelling and language of names, descriptions, and source titles.
4. Submit the issue on GitHub. Issues are public. Share only material suitable
   for public disclosure and credit original creators.

## Submit a pull request

1. Fork the repository and branch from `main`. Check existing issues and records
   for the project, including any known aliases.
2. Create or edit one JSON file in `src/content/projects/`. Use a stable
   lowercase slug with hyphens and make its filename match its `id`. Use JSON
   without comments and keep project-specific changes focused.
3. Include public sources for the claims in the record. Use
   `unverified` for a new record unless a maintainer has established a
   different verification status.
4. Run `npm ci`, `npm run check`, and `npm run build`. Astro validates the
   records during the build. Preview the catalog with `npm run preview`.
5. Open a pull request targeting `main`. Link the related issue if one exists,
   summarize the evidence, describe uncertain claims, and report your checks.

## Record format

The [project schema](../src/data/projects.ts) is the build-time contract.
The catalog loads JSON from `src/content/projects/` and publishes public
pages at build time. GitHub issue forms live in `.github/ISSUE_TEMPLATE/`.

| Field | Requirement |
| --- | --- |
| `id` | Stable lowercase ASCII slug matching the filename, with numbers and single hyphens allowed |
| `name` | Original project name |
| `category` | `independent-os`, `linux-distribution`, or `desktop-customization` |
| `originalLanguage` | Canonical language tag, such as `ja`, `zh-TW`, or `und` if unknown |
| `description` | Object keyed by language tag with nonempty text under `originalLanguage`. Translations are optional. |
| `developmentStatus` | `active`, `maintenance`, `discontinued`, `archived`, `experimental`, or `unknown` |
| `verificationStatus` | `unverified`, `partially-verified`, `verified`, or `unable-to-verify` |
| `references` | Array containing at least one public HTTP or HTTPS source URL |

Optional fields include `aliases` (array of names), `developer`, `baseSystem`,
`kernel`, `developmentYear` (integer), `lastUpdated` (ISO `YYYY-MM-DD`),
`sourceCodeUrl`, `officialWebsite`, `downloadUrl`, `documentation` (array
of URLs), `license`, `screenshots` (array of objects with `url`, `credit`
and optional `license`, `alt`, `sourceUrl`, `capturedAt`, `description`, and
`language`), and `historicalNotes`. Use the
[historical archive guide](HISTORICAL_ARCHIVE_GUIDE.md) for structured
`releases` and `events`, date precision, and checksum provenance. Omit
undocumented details.
For a partial date, record the supported detail in `historicalNotes` instead
of guessing the rest.

This example illustrates the format. It is not a catalog entry.

```json
{
  "id": "example-project",
  "name": "Example Project",
  "category": "independent-os",
  "originalLanguage": "en",
  "description": {
    "en": "A short description in the project's original language."
  },
  "developmentStatus": "unknown",
  "verificationStatus": "unverified",
  "references": ["https://example.org/project-source"]
}
```

### Sources and screenshots

Prefer original project pages, release notes, repositories, and contemporaneous
records. When an original is gone, link a stable archive copy and note the
original source in the pull request. Distinguish mirrors from official releases.
For screenshots, link a publicly shareable source, credit the creator or
originating project, and record known permissions or license. Obtain permission
before redistributing material whose rights are unclear. The catalog links to
screenshots with attribution.

## Review and publication

1. A GitHub Issue records a proposal. Maintainers check its scope, look for
   duplicates, review the evidence, and may request more information. A direct
   pull request receives the same review.
2. An accepted proposal is prepared as a record in a pull request. Maintainers
   review the claims, sources, attribution, and verification status before merge.
3. Merging the record makes it eligible for publication. It appears in the
   catalog after the static site is rebuilt and deployed.

Evidence of project identity can come from an original repository, a developer
history, an archived page, or other identifiable records. First-party sources
are eligible on their own. Record completeness, development status, provenance,
and testing are separate. See the
[inclusion policy](HISTORICAL_ARCHIVE_GUIDE.md#inclusion-and-assessment).

- **Unverified** means the material claims have not yet been established.
- **Partially verified** means sources support some material claims.
- **Verified** means reliable evidence supports the project identity and the
  material claims being published.
- **Unable to verify** means the available evidence was insufficient after
  review. Document what was checked and qualify any claims.

Optional fields include `recordCompleteness` (`documented`, `incomplete`,
`unknown`), `evidenceProvenance` (`first-party`,
`independent-third-party`, `archived-historical`, `community`, `mixed`,
`unknown`), `testingStatus` (`not-tested`, `emulator-tested`,
`physical-hardware-tested`, `unknown`), and `testingNotes` (notes keyed by language tag).
Use `sharedMaintainerAccount` to disclose a shared GitHub maintainer.
Use `evidence` to label individual references with a `kind`, an HTTP(S)
`url`, and an optional `note` and `language`. The schema lists the
allowed kinds. A recollection without a URL may be included with an explicit
note and is displayed as unverified. Keep at least one public reference in
`references`.

An issue submission never publishes a record or assigns verification status.
