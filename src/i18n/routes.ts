import { projects } from '../data/project-records';
import { defaultLocale, locales, type Locale } from './index';

export const pages = ['home', 'catalog', 'history', 'contribute', 'about'] as const;
export type Page = (typeof pages)[number];

const sectionRoutes = locales.flatMap((locale) =>
  pages.map((page) => {
    const segments = [
      ...(locale === defaultLocale ? [] : [locale]),
      ...(page === 'home' ? [] : [page]),
    ];
    return {
      locale,
      page,
      segments,
      path: segments.length ? `/${segments.join('/')}/` : '/',
    };
  }),
);

export function pagePath(locale: Locale, page: Page) {
  return sectionRoutes.find((route) => route.locale === locale && route.page === page)!.path;
}

export function projectPath(locale: Locale, id: string) {
  return `${pagePath(locale, 'catalog')}${id}/`;
}

export const publicRoutes = [
  ...sectionRoutes.map((route) => ({ ...route, project: undefined })),
  ...locales.flatMap((locale) => projects.map((project) => ({
    locale,
    page: 'catalog' as const,
    segments: [...(locale === defaultLocale ? [] : [locale]), 'catalog', project.id],
    path: projectPath(locale, project.id),
    project,
  }))),
];
