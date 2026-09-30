// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import vue from '@astrojs/vue';

import mdx from '@astrojs/mdx';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    icon(), 
    vue(), 
    mdx(), 
  sanity({
      projectId: 'dx5mu94s',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: '2024-01-01',
      studioBasePath: '/admin',
    })  
  ]
});