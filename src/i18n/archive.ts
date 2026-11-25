import type { ArchiveDate, Project } from '../data/projects';
import { translate, type Locale } from './index';

export function localizedArchiveText(values: Record<string, string>, locale: Locale, originalLanguage: string) {
  const language = [locale, 'en', originalLanguage].find((tag) => Object.hasOwn(values, tag));
  return language ? { language, text: values[language] } : undefined;
}

export function projectDescription(project: Project, locale: Locale) {
  return localizedArchiveText(project.description, locale, project.originalLanguage)!;
}

export function formatArchiveDate(date: ArchiveDate, locale: Locale) {
  const iso = date.precision === 'year' ? `${date.value}-01-01`
    : date.precision === 'month' ? `${date.value}-01` : date.value;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: date.precision === 'year' ? undefined : 'long',
    day: date.precision === 'day' ? 'numeric' : undefined,
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function formatProjectCount(count: number, locale: Locale) {
  const plural = new Intl.PluralRules(locale).select(count);
  return translate(locale)(plural === 'one' ? 'projectCountOne' : 'projectCountOther')
    .replace('{count}', new Intl.NumberFormat(locale).format(count));
}

export function formatProjectPeriod(project: Project, locale: Locale) {
  const dates = [
    project.developmentYear?.toString().padStart(4, '0'),
    project.lastUpdated,
    project.historicalDate?.date.value,
    ...(project.events ?? []).map((event) => event.date?.value),
    ...(project.releases ?? []).map((release) => release.date?.value),
  ];
  const years = [...new Set(dates.flatMap((date) => date ? [date.slice(0, 4)] : []))].sort();
  if (!years.length) return;

  const formatter = (year: string) => formatArchiveDate({ precision: 'year', value: year }, locale);
  return years.length === 1 ? formatter(years[0]) : `${formatter(years[0])}–${formatter(years.at(-1)!)}`;
}
