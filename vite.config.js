import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ❌ 不要写 base: '/hazelli_portfolio/'
  // ✅ 改成这样：
  base: '/',  // 或者直接删除这行
  plugins: [react()],
})

