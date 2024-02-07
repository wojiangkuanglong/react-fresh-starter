import { type KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/main.tsx'],
  project: ['src/**/*.ts', 'src/**/*.tsx'],
  ignore: [
    '**/*.d.ts',
    'src/components/ui/**/*.tsx',
    'src/services/**/*.ts',
    'src/__mocks__/**/*.ts',
  ],
  ignoreBinaries: ['only-allow'],
  ignoreDependencies: [],
  rules: {
    devDependencies: 'warn',
  },
};

export default config;
