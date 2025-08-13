import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        id: '/',
        name: 'Ludo Clash',
        short_name: 'LudoC',
        description: 'Compete with players worldwide in the ultimate Ludo showdown!',
        theme_color: '#3b82f6',
        background_color: '#0C0C1D',
        display: 'standalone',
        orientation: 'landscape',
        display_override: ['window-controls-overlay', 'standalone'],
        start_url: '/',
        icons: [
          {
            src: '/mobile-logo-1.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/mobile-log.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
        ],
        screenshots:[
          {
            src: '/desktop.png',
            sizes: '2560x1440',
            type: 'image/png',
            label: 'Ludo clash gameplay',
            form_factor: 'wide'
          },
          {
            src: '/mobile.png',
            sizes: '750x1334',
            type: 'image/png',
            label: 'Ludo clash mobile view',
          },
        ]
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
