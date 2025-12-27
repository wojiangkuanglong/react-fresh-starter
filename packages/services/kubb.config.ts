import { defineConfig } from '@kubb/core';
import { pluginClient } from '@kubb/plugin-client';
import { pluginFaker } from '@kubb/plugin-faker';
import { pluginMsw } from '@kubb/plugin-msw';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/plugin-ts';
import { pluginZod } from '@kubb/plugin-zod';

export default defineConfig({
  input: {
    path: 'https://petstore3.swagger.io/api/v3/openapi.json',
  },
  output: {
    path: './src',
    clean: false,
  },
  plugins: [
    pluginOas({
      output: {
        path: './json',
        barrelType: false,
      },
    }),
    pluginTs({
      output: {
        path: './model',
        barrelType: false,
      },
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      enumType: 'asConst',
      enumSuffix: 'Enum',
      dateType: 'date',
      unknownType: 'unknown',
      optionalType: 'questionToken',
    }),
    pluginFaker({
      output: {
        path: './faker',
        barrelType: false,
        banner: `/* eslint-disable no-alert, no-console */\n// @ts-nocheck`,
      },
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      dateType: 'date',
      unknownType: 'unknown',
    }),
    pluginMsw({
      output: {
        path: './mock',
        barrelType: false,
        banner: '/* eslint-disable no-alert, no-console */\n// @ts-nocheck',
      },
      parser: 'faker',
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      handlers: true,
    }),
    pluginClient({
      output: {
        path: './api',
        barrelType: false,
      },
      importPath: '@repo/lib/client',
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      parser: 'client',
      pathParamsType: 'object',
      urlType: 'export',
      operations: true,
    }),
    pluginZod({
      output: {
        path: './zod',
        barrelType: false,
      },
      group: { type: 'tag', name: ({ group }) => `${group}Schemas` },
      typed: true,
      dateType: 'stringOffset',
      unknownType: 'unknown',
      importPath: 'zod',
      version: '4',
    }),
  ],
  hooks: {
    done: ['pnpm check:apiunsafe'],
  },
});
