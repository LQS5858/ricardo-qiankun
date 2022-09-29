import { defineConfig } from 'vite'
import path from 'path'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const useDevMode = mode === 'production'
  const env = loadEnv(mode, process.cwd())
  return {
    base: '/sub/sub-react/',
    plugins: [
      react(),
      qiankun('reactVite', {
        useDevMode: false,
      })],
    server: {
      host: '0.0.0.0',
      cors: true,
      origin: '//localhost:5176',
      port: 5176,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.jsx', '.js']
    },
    define: {
      'process.env': env
    }
  }
})
