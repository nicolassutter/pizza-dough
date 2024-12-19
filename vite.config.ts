import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      autoInstall: true,
      iconCustomizer(_collection, _icon, props) {
        props.width = '1em'
        props.height = '1em'
      },
    }),
    VitePWA({
      includeAssets: ['pizza.svg', 'apple-touch-icon.png', 'mask-icon.svg'],
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
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
