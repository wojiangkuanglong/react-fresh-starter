import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import kubb from 'unplugin-kubb/vite';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/plugin-ts';
import { pluginClient } from '@kubb/plugin-client';
import { pluginReactQuery } from '@kubb/plugin-react-query';
import {  UserConfig } from '@kubb/core'

const kubbConfig: UserConfig = {
  input: {
    path: 'https://petstore.swagger.io/v2/swagger.json',
  },
  output: {
    path: './src/shared/services',
    clean: true,
  },
  plugins: [
    pluginOas({
      generators: [],
    }),
    pluginTs({
      output: {
        path: './model',
      },
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      enumType: "asConst",
      enumSuffix: 'Enum',
      dateType: 'date',
      unknownType: 'unknown',
      optionalType: 'questionToken',
    }),
    pluginClient({
      output: {
        path: './api',
      },
      importPath: '@/shared/lib/client',
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      parser: 'client',
      pathParamsType: "object",
    }),
    pluginReactQuery({
      output: {
        path: './react-query',
      },
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      pathParamsType: "object",
      mutation: {
        methods: ['post'],
      },
      query: {
        methods: ['get'],
        importPath: "@tanstack/react-query"
      },
      suspense: false
    }),
  ],
}

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
      webUpdateNotice({
        logVersion: true,
        injectFileBase: '/dist/',
      }),
      kubb({
        config: kubbConfig
      }),
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
