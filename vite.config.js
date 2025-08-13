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
        enabled: true
      },
      manifest: {
        name: 'Ludo Clash',
        short_name: 'LudoC',
        description: 'Compete with players worldwide in the ultimate Ludo showdown!',
        theme_color: '#3b82f6',
        background_color: '#0C0C1D',
        display: 'standalone',
        start_url: '/',
        icons: {
          src: '/logo.png',
          size: '512x512',
          type: 'image/png'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
