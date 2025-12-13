// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@vite-pwa/nuxt'],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: false,
    },
  },

  pwa: {
    includeAssets: ['pizza.svg', 'apple-touch-icon.png', 'mask-icon.svg'],
    registerWebManifestInRouteRules: true,
    manifest: {
      name: 'Cyberdough',
      short_name: 'Cyberdough',
      description: 'Pizza dough calculator',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
})
