// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: import.meta.env.SITE_URL || 'https://portfolio.alexrecuenco.com',
    integrations: [mdx(), sitemap()],
    env: {
        schema: {
            PORT: envField.number({access: 'public',gt:0, lt:65536, default: 3000, context: 'server'}),
        }
    }
});
