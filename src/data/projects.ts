import type { Locale } from '../i18n';

export const projectCategories = [
  'independent-os',
  'linux-distribution',
  'desktop-customization',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: { en: string } & Partial<Record<Locale, string>>;
  developer?: string;
  baseSystem?: string;
  kernel?: string;
  developmentYear?: number;
  developmentStatus: 'active' | 'discontinued' | 'archived' | 'unknown';
  verificationStatus: 'verified' | 'partially-verified' | 'unverified';
  sourceCodeUrl?: string;
  officialWebsite?: string;
  downloadUrl?: string;
  license?: string;
  screenshots?: string[];
  references?: string[];
}
