// vite.config.ts (at repo root)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: 'client',                 // the app lives in /client
  publicDir: 'public',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'), // <-- alias @ → /client/src
    },
  },
  build: {
    outDir: 'dist',               // output into /client/dist
    emptyOutDir: true,
  },
})
