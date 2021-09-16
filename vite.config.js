import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/time-tracking-dashboard-frontendchallenge/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/time-tracking-dashboard-frontendchallenge/'
    : '/',
  css: {
    preprocessorOptions: {
      scss: {
          additionalData: `@import "src/assets/style.scss";`
      }
    }
  }
})
