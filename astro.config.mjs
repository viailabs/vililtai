// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lilt.viai.ai',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN', 'zh-TW'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
