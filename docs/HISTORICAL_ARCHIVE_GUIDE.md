# Historical archive guide

This guide explains how to document project history and evidence. The authoritative eligibility and copyright rules are in the [Project Inclusion Policy](INCLUSION_POLICY.md).

## Research and evidence

Start with the creator's site, source tree, project announcement, release notes, and file indexes. Archived sites, historical forum posts, identifiable screenshots or videos, and contemporary community articles can also establish a project's history. Record what each source supports. A mirror date, retrospective date, archive-capture date, and original release date describe different events. Search snippets and AI-generated summaries are leads, not evidence on their own. Use the [research backlog](RESEARCH_BACKLOG.md) for unresolved identities and missing evidence.

First-party records can establish project identity and documented history. Independent corroboration is useful when available but is not mandatory for every historical fact. Preserve original names and language. Distinguish facts, reasonable inferences, and unknowns. Never fill gaps by guessing.

## Separate assessments

Keep these dimensions independent:

- **Development status:** active, maintenance, discontinued, archived, experimental, or unknown.
- **Verification status:** unverified, partially verified, verified, or unable to verify.
- **Record completeness:** documented, incomplete, or unknown.
- **Evidence provenance:** first-party, independent third-party, archived historical, community, mixed, or unknown.
- **Testing status:** not tested, emulator tested, physical-hardware tested, or unknown.

A verified historical record does not mean the software has been installed or tested. Discontinuation, incomplete work, archive-maintainer involvement, and absence of install media or hardware tests do not automatically prevent inclusion. Disclose shared maintainers. State who performed a reported test and on what platform when possible. Emulator results apply only to that environment.

Mark recollections as unverified and keep them distinct from evidence that establishes a claim. A working installer is unnecessary for historical inclusion. Label old installer references with unknown availability unless checked.

## Screenshots and downloads

Record the original screenshot URL, source page, creator or publisher credit, accessible description, known permission terms, and capture date when supported. Use localized captions where available. The gallery may link directly to an original image only when the URL serves that image and the source's terms and copyright restrictions allow embedding. Set `embed` and record verified intrinsic dimensions in `imageSize` when available. Keep `sourceUrl` when it differs from the image URL. Use `embedUnavailable` to explain why a reference has no embedded image.

The default is to link to original media. Get permission or verify the applicable license before copying an image, ISO, theme package, source archive, or other binary into archive storage. Do not treat a publicly viewable image or file as automatically reusable.

Use `developerUrl` for a profile tied to the credited creator through project evidence. Use `developerIsGroup` for a credited collective. A `historicalDate` with kind `report-date` or `catalog-date` identifies the date's source. Record an actual software release in `releases` when verified.

Record a release's version, type, publisher URL, and any third-party archive URL separately. Mark an old listing with unconfirmed availability as `unknown`. `available` denotes a publisher-listed asset; it does not imply that the archive downloaded, executed, or audited the file. Use file sizes in exact bytes. Rounded values on historical pages are evidence to cite, not exact sizes to convert.

Record SHA-256 only after calculating it from the exact, authorized file being documented. For example, run `sha256sum -- filename.iso` on Linux or `shasum -a 256 -- filename.iso` on macOS, and keep file provenance in the PR. A publisher's checksum is a reference to compare against, not an independently calculated checksum. Omit `sha256` if the file cannot be obtained or checked.

## Records and timeline events

Add records under `src/content/projects/` using the [submission guide](PROJECT_SUBMISSION_GUIDE.md) and [build-time schema](../src/data/projects.ts). Keep original names and text. Use the optional `events` array for timeline events nested under their project; the build derives the project ID from the containing record.

Each event needs a title, description, category, and at least one HTTP(S) reference. Use the optional `language` tag when event text differs from the record's original language. Event categories are `project-created`, `first-release`, `major-release`, `development-update`, `discontinued`, `archived`, and `other`.

Optional dates use an object with `precision` and `value`: `{"precision":"year","value":"2013"}`, a month with `YYYY-MM`, or a day with a valid `YYYY-MM-DD`. Omit the date when evidence cannot establish it. The History page places undated events in their own section and renders documented dates at their actual precision.

## Review and publication

Follow the [Project Inclusion Policy](INCLUSION_POLICY.md) for scope, MLP relevance, duplicate checks, copyright, and review states. Submit an issue or PR with sources and attribution. Maintainers review identity, duplicates, dates, permissions, and verification status. Run the build to validate records and inspect localized detail and timeline pages. Accepted records appear when the reviewed change is merged, built, and deployed through the existing production setup.
