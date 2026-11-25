# Historical archive guide

## Research and evidence

Start with the creator's site, source tree, release notes, and file indexes.
When a page has disappeared, look for an archive snapshot or an original
announcement in a contemporary forum. Use independent reports to corroborate
material claims. Record the URL that supports each claim and distinguish the
date of a release from the date a file was mirrored or a page was captured.
Search snippets are leads. Use [the research backlog](RESEARCH_BACKLOG.md) for
unresolved identities, missing evidence, and proposed follow-up.

Use the verification status to describe the evidence for the published
record. Development status describes the project separately. Explain any
maintainer relationship or reliance on first-party claims. Leave uncertain
fields missing or select `unknown` where the schema supports it.

## Screenshots and downloads

Record the original screenshot URL, source page, creator or publisher
credit, accessible description, known permission terms, and capture date
when supported. The site's screenshot archive links out to the original
image. Get permission or verify the applicable license before copying an
image, ISO, or other binary into any archive storage.

Record a release's version, type, publisher URL, and any third-party archive
URL separately. Mark an old listing with unconfirmed availability as
`unknown`. `available` denotes a publisher-listed asset. It does not imply
the archive downloaded, executed, or audited the file. Use file sizes in
exact bytes. Rounded values on historical pages are evidence to cite, not
exact sizes to convert.

Record SHA-256 only after calculating it from the exact, authorized file you
are documenting. For example, run `sha256sum -- filename.iso` on Linux, or
`shasum -a 256 -- filename.iso` on macOS, and keep the file provenance in
the PR. A publisher's checksum is a reference to compare against. It is not
an independently calculated checksum. Omit `sha256` if the file cannot be
obtained or checked.

## Records and timeline events

Add records under `src/content/projects/` using the
[submission guide](PROJECT_SUBMISSION_GUIDE.md) and
[build-time schema](../src/data/projects.ts). Keep original names and text.
Use the optional `events` array for timeline events. Nest them under their
project. The build derives their project ID from the containing record.

Each event needs a title, description, category, and at least one HTTP(S)
reference. Use the optional `language` tag when the event text differs from
the record's original language. Event categories are `project-created`,
`first-release`, `major-release`, `development-update`, `discontinued`,
`archived`, and `other`.

Optional dates use an object with `precision` and `value`. Use
`{"precision":"year","value":"2013"}`, a `month` with `YYYY-MM`, or a
`day` with a valid `YYYY-MM-DD`. Omit the date when the evidence cannot
establish it. The History page places undated events in their own section
and renders documented dates at their actual precision.

## Review and publication

Submit an issue or PR with sources and attribution. Maintainers review
identity, duplicate records, dates, permissions, and verification status.
Run the build to validate the records and inspect the localized detail and
timeline pages. Accepted records appear when the reviewed change is merged,
built, and deployed through the existing production setup.
