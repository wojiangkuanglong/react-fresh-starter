import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './env/', '');
  const Cookie = env.VITE_PROXY_COOKIE || '';
  return {
    base: process.env.CDN_URL || '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    envDir: './env/',
    plugins: [
      react(),
      svgr(),
      tailwindcss(),
      webUpdateNotice({
        logVersion: true,
        injectFileBase: '/dist/',
      })
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router'],
            library: ['antd'],
          },
        },
      },
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
    optimizeDeps: {
      force: true,
    },
  };
});
