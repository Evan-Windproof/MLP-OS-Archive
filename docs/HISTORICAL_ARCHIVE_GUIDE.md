# Historical archive guide

## Research and evidence

Start with the creator's site, source tree, project announcement, release
notes, and file indexes. Archived sites, historical forum posts, identifiable
screenshots or videos, and contemporary community articles can also establish
a project's history. Record what each source supports. For example, a file's
mirror date, the date of a retrospective, and an original release date
describe different events. Search snippets are leads. Use
[the research backlog](RESEARCH_BACKLOG.md) for unresolved identities and
missing evidence.

## Inclusion and assessment

Admit projects in scope when reasonable evidence supports their identity.
First-party records can establish identity and documented history.
Independent corroboration is welcome when available. Discontinuation,
experimental or incomplete work, archive-maintainer involvement, and the
absence of install media or hardware tests are compatible with inclusion.

- **Inclusion** follows review and merge. **Record completeness** describes
  how much of the story can be documented. Mark gaps explicitly.
- **Development status** records the project's state.
- **Verification** records how well sources support identity and material
  claims. A verified record may rely on first-party evidence and have
  missing details.
- **Evidence provenance** identifies first-party, independent third-party,
  archived historical, community, or mixed sourcing. Disclose shared
  maintainers.
- **Testing status** records what testing is documented. Use unknown when
  the evidence is missing. State who performed a reported test and on
  what platform when possible. Emulator results apply to that environment.

Mark recollections as unverified and keep them distinct from evidence that
establishes a claim. A working installer is unnecessary for inclusion. Label
untested installer links found in old documentation as historical references
with unknown availability.

## Screenshots and downloads

Record the original screenshot URL, source page, creator or publisher
credit, accessible description, known permission terms, and capture date
when supported. Use `captions` for localized screenshot descriptions. The
gallery displays images after the direct URL and embedding permission are
verified. Set `embed` with the image's original dimensions in `imageSize`.
Keep the source page in `sourceUrl` when it differs from the image URL. An
unavailable or unapproved image stays in the references list. Get permission
or verify the applicable license before copying an image, ISO, or other
binary into archive storage.

Use `developerUrl` for a profile tied to the credited creator through
project evidence. Use `developerIsGroup` for a credited collective. A
`historicalDate` with kind `report-date` or `catalog-date` identifies the
date's source. Record an actual software release in `releases` when verified.

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
