import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test-vue3-task-for-antirek',
  plugins: [vue()],
});
