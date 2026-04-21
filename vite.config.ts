import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // Split into smaller parallel-loadable chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // React core — rarely changes, long-term cached
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            // Framer Motion — large animation library, separate chunk
            'motion-vendor': ['motion/react'],
            // Matter.js physics — only needed below fold in PhysicsCards
            'matter-vendor': ['matter-js'],
          },
        },
      },
      minify: 'esbuild',
      target: 'es2015',
    },
  };
});
