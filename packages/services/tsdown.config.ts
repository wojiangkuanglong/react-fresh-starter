import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    api: 'src/api/index.ts',
    faker: 'src/faker/index.ts',
    mock: 'src/mock/index.ts',
    model: 'src/model/index.ts',
    zod: 'src/zod/index.ts',
  },
  dts: true,
  format: ['esm', 'cjs'],
  exports: true,
});
