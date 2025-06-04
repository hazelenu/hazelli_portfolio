import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 将 username 和 repo-name 改成你自己的
export default defineConfig({
  base: '/portfolio-site/',  // very important!
  plugins: [react()]
})

