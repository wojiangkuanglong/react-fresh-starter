import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './env/', '');
  const Cookie = env.VITE_PROXY_COOKIE || '';
  return {
    base: env.VITE_CDN_URL || '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    envDir: './env/',
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
      svgr(),
      tailwindcss(),
    ],
    build: {
      outDir: resolve(__dirname, '../../dist'),
      sourcemap: true,
    },
    server: {
      open: true,
      strictPort: true,
      proxy: {
        '/api': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
          headers: {
            Cookie,
          },
        },
      },
    },
  };
});
