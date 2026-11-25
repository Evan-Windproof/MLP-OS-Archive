import { projects } from '../data/project-records';
import { projectCategories, type Project, type ProjectCategory } from '../data/projects';
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

export function categoryPath(locale: Locale, category: ProjectCategory) {
  return `${pagePath(locale, 'catalog')}category/${category}/`;
}

interface PublicRoute {
  locale: Locale;
  page: Page;
  segments: string[];
  path: string;
  project?: Project;
  category?: ProjectCategory;
}

export const publicRoutes: PublicRoute[] = [
  ...sectionRoutes,
  ...locales.flatMap((locale) => projectCategories.map((category) => ({
    locale,
    page: 'catalog' as const,
    segments: [...(locale === defaultLocale ? [] : [locale]), 'catalog', 'category', category],
    path: categoryPath(locale, category),
    category,
  }))),
  ...locales.flatMap((locale) => projects.map((project) => ({
    locale,
    page: 'catalog' as const,
    segments: [...(locale === defaultLocale ? [] : [locale]), 'catalog', project.id],
    path: projectPath(locale, project.id),
    project,
  }))),
];
