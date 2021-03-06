import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// const developServerPort = '50100'
// const developServerPort = import.meta.env.VITE_APP_CURRENT_YEAR || '50100'
const developServerPort = process.env.VITE_APP_BAKEND_PORT || '50100'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src', // index.html path
  build: {
    target: 'esnext',
    // root (= ./src) から見た相対パスで指定
    outDir: '../dist',
    emptyOutDir: true,
  },
  // base: '/',
  base: '/admin/', // reverse proxy setting.
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: path.join(__dirname, './src/'),
      },
    ],
    /* alias: {
      '@/': path.join(__dirname, './src/'),
    }, */
  },
  server: {
    open: true,
    port: 8080, //default 3000
    // Configure custom proxy rules for the dev server.
    proxy: {
      // '/api': 'http://localhost:8000/api',
      /* '/api': {
        target: 'http://localhost:8000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }, */
      // TODO remove comment out when using swagger mock server
      /* '/api': {
        target: 'http://localhost:3200/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }, */
      // TODO remove comment out when using backend server
      /* '/api': {
        // target: 'http://localhost:50100/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }, */
      // TODO set server port.
      '/api': {
        target: `http://localhost:${developServerPort}/api`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
