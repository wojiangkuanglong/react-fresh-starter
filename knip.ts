import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/app/index.tsx'],
  project: ['src/**/*.ts', 'src/**/*.tsx'],
  ignore: [
    '**/*.d.ts',
  ],
  ignoreBinaries: ['only-allow'],
  rules: {
    devDependencies: 'warn',
    dependencies: 'warn',
  },
};

export default config;
