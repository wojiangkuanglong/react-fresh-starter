import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['./src/app/index.tsx'],
  project: ['./src/**/*.{ts,tsx,css,scss}'],
  ignore: ['**/*.d.ts', './src/routeTree.gen.ts'],
  ignoreBinaries: ['only-allow'],
  rules: {
    devDependencies: 'warn',
    dependencies: 'warn',
    binaries: 'warn',
  },
};

export default config;
