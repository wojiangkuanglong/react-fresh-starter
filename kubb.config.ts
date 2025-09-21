import { defineConfig } from '@kubb/core';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/plugin-ts';
import { pluginClient } from '@kubb/plugin-client';
import { pluginRedoc } from '@kubb/plugin-redoc';

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
        barrelType: false
      },
      importPath: '@/shared/lib/client',
      group: {
        type: 'tag',
        name: ({ group }) => `${group}`,
      },
      parser: 'client',
      pathParamsType: "object",
      urlType: 'export',
      operations: true
    }),
    pluginRedoc({
      output: {
        path: '../../../public/docs/index.html',
      },
    }),
  ],
  hooks: {
    done: "pnpm check:unsafe"
  }
})
