import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   manifest: {
    //     start_url: '.',
    //     display: 'standalone',
    //     theme_color: '#06040C',
    //     background_color: '#06040C',
    //     icons: [
    //       {src: 'favicon.svg', type: 'image/svg+xml'},
    //       {src:'favicon.png', sizes: '32x32', type: 'image/png'},
    //     ]
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,svg,mp3}'],
    //     globIgnores: ['**/*.map'],
    //     skipWaiting: true,
    //     clientsClaim: true,
    //     cleanupOutdatedCaches: true,
    //   },
    // }),
  ],
})
