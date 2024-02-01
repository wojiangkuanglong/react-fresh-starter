import { type DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    throwOnError: true,
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnReconnect: false,
    staleTime: 10 * 1000,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
