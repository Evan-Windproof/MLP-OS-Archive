# Project submission guide

MLP OS Archive documents MLP-related independent operating systems, Linux distributions, and desktop themes or customizations. Historical, discontinued, incomplete, and experimental third-party projects may qualify. A submitter's own OS project must have actual development work, not only a plan.

**Read the authoritative [Project Inclusion Policy](INCLUSION_POLICY.md) before submitting.** It defines the eligible categories, substantive MLP-content requirements, exclusions, evidence, duplicate handling, and copyright rules.

## Submit a GitHub Issue

1. Open the [issue form chooser](https://github.com/Evan-Windproof/MLP-OS-Archive/issues/new/choose) or use the form linked from the archive's Contribute page in your language.
2. Enter the project name, category, short description, and at least one public HTTP(S) source.
3. Explain what makes the actual project MLP-related. For an OS or distribution, describe the integrated elements; for a desktop theme, describe what the theme changes.
4. Add optional details you can support. Use **Unknown** for uncertain information and leave other uncertain fields blank. Preserve original spelling and language.
5. Check for existing records and known aliases. If the project has the same name as another project, provide distinguishing details such as developer, date, kernel, or base system.
6. Submit the issue on GitHub. Issues are public. Share only material suitable for public disclosure and credit original creators. Do not upload files or images unless you have the rights to share them.

An issue is a proposal, not an acceptance decision. Maintainers may ask for additional sources or clarification. Accepted submissions are prepared as repository records and reviewed before publication.

## Submit a pull request

1. Fork the repository and branch from `main`. Check existing issues, records, aliases, versions, and same-name projects.
2. Create or edit one JSON file in `src/content/projects/`. Use a stable lowercase slug with hyphens and make its filename match its `id`. Use JSON without comments and keep project-specific changes focused.
3. Include public sources for the claims in the record. Use `unverified` for a new record unless a maintainer has established a different verification status.
4. Do not invent dates, release versions, downloads, screenshots, tests, or technical details. Keep unknown facts explicitly unknown.
5. Run `npm ci`, `npm run check`, and `npm run build`. Astro validates records during the build. Preview with `npm run preview`.
6. Open a pull request targeting `main`. Link the related issue if one exists, summarize the evidence, describe uncertainties and rights status, and report your checks.

## Record format

The [project schema](../src/data/projects.ts) is the build-time contract. The catalog loads JSON from `src/content/projects/` and publishes public pages at build time.

| Field | Requirement |
| --- | --- |
| `id` | Stable lowercase ASCII slug matching the filename |
| `name` | Original project or collection name |
| `category` | `independent-os`, `linux-distribution`, or `desktop-customization` |
| `originalLanguage` | Canonical language tag, such as `ja`, `zh-TW`, or `und` if unknown |
| `description` | Object keyed by language tag, with nonempty text under `originalLanguage` |
| `developmentStatus` | `active`, `maintenance`, `discontinued`, `archived`, `experimental`, or `unknown` |
| `verificationStatus` | `unverified`, `partially-verified`, `verified`, or `unable-to-verify` |
| `references` | At least one public HTTP(S) source URL |

Optional fields include `aliases`, `developer`, `baseSystem`, `kernel`, `developmentYear`, `lastUpdated`, `sourceCodeUrl`, `officialWebsite`, `downloadUrl`, `documentation`, `license`, `screenshots`, and `historicalNotes`. See the [historical archive guide](HISTORICAL_ARCHIVE_GUIDE.md) for releases, events, date precision, screenshot provenance, download availability, and checksum rules. Omit undocumented details. For partial dates, record only the supported precision.

Example (illustrative only):

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

## Sources, screenshots, and copyright

Prefer original project pages, repositories, release notes, and contemporaneous records. When an original is gone, link a stable archive copy and identify it as an archive. Distinguish mirrors from official releases. Search snippets and AI-generated summaries are leads, not sources that establish claims.

For screenshots, provide the original source URL, creator or publisher credit, and known license or permission. The archive is link-first: do not upload or redistribute screenshots, artwork, ISO images, installers, theme packs, or source archives unless the applicable license clearly permits it or you have explicit permission. Public accessibility does not automatically grant reuse rights.

MLP and related protected material belong to their respective rights holders. The archive is unofficial, independent, and non-commercial; it is not authorized, endorsed, or sponsored by Hasbro. See the [Project Inclusion Policy](INCLUSION_POLICY.md) for the complete rules.

## Review and publication

Maintainers assess scope, substantive MLP relevance, project identity, duplicate risk, evidence, attribution, and rights. Development status, verification, record completeness, evidence provenance, and software testing are separate assessments.

Internal research labels (Lead, Identified, Pending Review, Accepted, Duplicate, Excluded) are not public verification states. An issue submission does not publish a project or assign verification status. Accepted records appear only after review, merge, static build, and deployment.
