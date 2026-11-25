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

export const projectSchema = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: text,
  aliases: z.array(text).optional(),
  category: z.enum(projectCategories),
  originalLanguage: languageTag,
  description: z.record(languageTag, text),
  developer: text.optional(),
  baseSystem: text.optional(),
  kernel: text.optional(),
  developmentYear: z.number().int().min(1).max(9999).optional(),
  lastUpdated: z.iso.date().optional(),
  developmentStatus: z.enum(developmentStatuses),
  verificationStatus: z.enum(verificationStatuses),
  sourceCodeUrl: webUrl.optional(),
  officialWebsite: webUrl.optional(),
  downloadUrl: webUrl.optional(),
  documentation: z.array(webUrl).optional(),
  license: text.optional(),
  screenshots: z.array(z.strictObject({
    url: webUrl,
    credit: text,
    license: text.optional(),
  })).optional(),
  references: z.array(webUrl).min(1),
  historicalNotes: text.optional(),
}).refine((record) => Object.hasOwn(record.description, record.originalLanguage), {
  path: ['description'],
  message: 'Include a description under the originalLanguage tag.',
});

export type Project = z.infer<typeof projectSchema>;
