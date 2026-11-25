import { z } from 'astro/zod';

export const projectCategories = [
  'independent-os',
  'linux-distribution',
  'desktop-customization',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

const developmentStatuses = [
  'active', 'maintenance', 'discontinued', 'archived', 'experimental', 'unknown',
] as const;

const verificationStatuses = [
  'unverified', 'partially-verified', 'verified', 'unable-to-verify',
] as const;

const text = z.string().trim().min(1);
const webUrl = z.url({ protocol: /^https?$/ });
const languageTag = text.refine((value) => {
  try {
    return Intl.getCanonicalLocales(value)[0] === value;
  } catch {
    return false;
  }
}, 'Use a canonical language tag, such as en, zh-TW, or und.');

const localizedText = z.record(languageTag, text);

export const eventCategories = [
  'project-created', 'first-release', 'major-release', 'development-update',
  'discontinued', 'archived', 'other',
] as const;

const date = z.discriminatedUnion('precision', [
  z.strictObject({ precision: z.literal('year'), value: z.string().regex(/^(?!0000)[0-9]{4}$/) }),
  z.strictObject({ precision: z.literal('month'), value: z.string().regex(/^(?!0000)[0-9]{4}-(0[1-9]|1[0-2])$/) }),
  z.strictObject({ precision: z.literal('day'), value: z.iso.date().refine((value) => !value.startsWith('0000')) }),
]);

const release = z.strictObject({
  version: text,
  date: date.optional(),
  type: z.enum(['stable', 'pre-release', 'unknown']),
  originalDownloadUrl: webUrl.optional(),
  archivedDownloadUrl: webUrl.optional(),
  fileName: text.optional(),
  fileSizeBytes: z.number().int().positive().optional(),
  sha256: z.string().regex(/^[a-fA-F0-9]{64}$/).optional(),
  availability: z.enum(['available', 'archived', 'unavailable', 'unknown']),
  notes: text.optional(),
  references: z.array(webUrl).min(1),
});

const event = z.strictObject({
  category: z.enum(eventCategories),
  title: text,
  description: text,
  language: languageTag.optional(),
  date: date.optional(),
  references: z.array(webUrl).min(1),
});

const evidence = z.strictObject({
  kind: z.enum([
    'original-source', 'developer-history', 'official-release', 'independent',
    'community', 'archived', 'historical-installer', 'recollection',
  ]),
  url: webUrl.optional(),
  accessUnconfirmed: z.literal(true).optional(),
  note: text.optional(),
  language: languageTag.optional(),
}).refine((source) => source.url || (source.kind === 'recollection' && source.note), {
  message: 'Include a source URL or an explicitly unverified recollection.',
});

export type ArchiveDate = z.infer<typeof date>;

export const projectSchema = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: text,
  aliases: z.array(text).optional(),
  category: z.enum(projectCategories),
  originalLanguage: languageTag,
  description: localizedText,
  developer: text.optional(),
  developerUrl: webUrl.optional(),
  developerIsGroup: z.literal(true).optional(),
  platform: text.optional(),
  historicalDate: z.strictObject({
    date,
    kind: z.enum(['catalog-date', 'report-date']),
  }).optional(),
  baseSystem: text.optional(),
  kernel: text.optional(),
  developmentYear: z.number().int().min(1).max(9999).optional(),
  lastUpdated: z.iso.date().optional(),
  developmentStatus: z.enum(developmentStatuses),
  verificationStatus: z.enum(verificationStatuses),
  recordCompleteness: z.enum(['documented', 'incomplete', 'unknown']).optional(),
  evidenceProvenance: z.enum([
    'first-party', 'independent-third-party', 'archived-historical', 'community', 'mixed', 'unknown',
  ]).optional(),
  testingStatus: z.enum(['not-tested', 'emulator-tested', 'physical-hardware-tested', 'unknown']).optional(),
  testingNotes: z.record(languageTag, text).optional(),
  evidence: z.array(evidence).optional(),
  sharedMaintainerAccount: text.optional(),
  sourceCodeUrl: webUrl.optional(),
  officialWebsite: webUrl.optional(),
  downloadUrl: webUrl.optional(),
  downloadAvailability: z.enum(['unavailable', 'unknown']).optional(),
  documentation: z.array(webUrl).optional(),
  license: text.optional(),
  screenshots: z.array(z.strictObject({
    url: webUrl,
    credit: text,
    license: text.optional(),
    alt: text.optional(),
    captions: localizedText.optional(),
    embed: z.literal(true).optional(),
    imageSize: z.strictObject({
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    }).optional(),
    sourceUrl: webUrl.optional(),
    capturedAt: date.optional(),
    description: text.optional(),
    language: languageTag.optional(),
  }).refine((item) => !item.embed || item.imageSize, {
    path: ['imageSize'],
    message: 'Record the original image dimensions before embedding.',
  })).optional(),
  releases: z.array(release).optional(),
  events: z.array(event).optional(),
  references: z.array(webUrl).min(1),
  historicalNotes: text.optional(),
  localizedHistory: localizedText.optional(),
}).refine((record) => Object.hasOwn(record.description, record.originalLanguage), {
  path: ['description'],
  message: 'Include a description under the originalLanguage tag.',
});

export type Project = z.infer<typeof projectSchema>;
