import { rename, rmdir } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import { defaultLocale, locales } from './src/i18n/index.ts';

export default defineConfig({
  site: 'https://mlpos.evanwindproof.top/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [{
    name: 'localized-static-error-pages',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        // Workers looks for the nearest 404.html while Astro emits nested pages as index.html.
        await Promise.all(locales.filter((locale) => locale !== defaultLocale).map(async (locale) => {
          const pageDirectory = new URL(`${locale}/404/`, dir);
          await rename(new URL('index.html', pageDirectory), new URL(`${locale}/404.html`, dir));
          await rmdir(pageDirectory);
        }));
      },
    },
  }],
});
