import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Умный base: для GitHub Pages  /yacht-spa/, для localhost  /
  base: process.env.NODE_ENV === 'production' ? '/yacht-spa/' : '/'
})
