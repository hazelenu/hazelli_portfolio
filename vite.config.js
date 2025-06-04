import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hazelli_portfolio/', // <--- ⚠️ 用你的 repo 名称（注意：带斜杠）
  plugins: [react()],
})
