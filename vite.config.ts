import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import viteCompression from 'vite-plugin-compression';
// import compress from 'vite-plugin-compress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // compress()
    // viteCompression({
    //   algorithm: 'gzip', // or 'brotli'
    //   threshold: 1024, // minimum file size to compress (in bytes)
    // }),
  ],
});