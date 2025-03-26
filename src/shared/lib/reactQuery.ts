import { QueryClient } from '@tanstack/react-query';
import type { DefaultOptions } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    throwOnError: true,
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnReconnect: false,
    staleTime: 10 * 1000,
    networkMode: 'always',
  },
  mutations: {
    networkMode: 'always',
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
