import { defaultLocale, locales, type Locale } from './index';

export const pages = ['home', 'catalog', 'history', 'contribute', 'about'] as const;
export type Page = (typeof pages)[number];

export const publicRoutes = locales.flatMap((locale) =>
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
  return publicRoutes.find((route) => route.locale === locale && route.page === page)?.path
    ?? publicRoutes.find((route) => route.locale === defaultLocale && route.page === page)!.path;
}
