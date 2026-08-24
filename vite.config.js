import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vike({
      prerender: true // Включает статическую генерацию HTML (SSG) при сборке
    })
  ],
  base: '/lavka/',
})