import { defineConfig } from '@kubb/core';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/plugin-ts';
import { pluginClient } from '@kubb/plugin-client';
import { pluginReactQuery } from '@kubb/plugin-react-query';

export default defineConfig({
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
  hooks: {
    done: "pnpm check:unsafe"
  }
})