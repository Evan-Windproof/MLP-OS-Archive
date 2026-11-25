import type { ArchiveDate, Project } from '../data/projects';
import type { Locale } from './index';

export function projectDescription(project: Project, locale: Locale) {
  const language = Object.hasOwn(project.description, locale) ? locale : project.originalLanguage;
  return { language, text: project.description[language] };
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
