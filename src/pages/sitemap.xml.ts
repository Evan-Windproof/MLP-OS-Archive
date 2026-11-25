import type { APIRoute } from 'astro';
import { publicRoutes } from '../i18n/routes';

export const GET: APIRoute = ({ site }) => {
  const urls = publicRoutes.map(({ path }) => `  <url><loc>${new URL(path, site).href}</loc></url>`);
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
