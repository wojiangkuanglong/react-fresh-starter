import { operations } from '@repo/services/api/operations';

export type OperationKey = keyof typeof operations;

export const getQueryKey = (key: OperationKey) => {
  return `${operations[key].method}-${operations[key].path}`;
};

export type QueryParamsType<T> = T extends (...args: infer P) => unknown ? P[0] : never;
