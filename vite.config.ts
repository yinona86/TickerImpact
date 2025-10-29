// vite.config.ts (repo root)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: 'client',                      // app lives in /client
  publicDir: 'public',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'), // support "@/..." imports
    },
  },
  build: {
    outDir: '../dist',                 // write final site to /dist (repo root)
    emptyOutDir: true,
  },
})
