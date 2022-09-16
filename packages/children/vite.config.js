import { fileURLToPath, URL } from 'node:url'
import qiankun from 'vite-plugin-qiankun';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/sub/sub-vue',
  plugins: [vue(), qiankun('vue3Vite', { useDevMode: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 7316,
    cors: true
  }
})
