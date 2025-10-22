// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Get site URL from environment variable or use default
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://gh360hunting.com';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  server: {
    port: 4321,
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
