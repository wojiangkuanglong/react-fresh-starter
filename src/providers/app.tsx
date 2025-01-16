import type * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/lib/reactQuery';

const ErrorFallback = () => {
  return <div>error</div>;
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.error(error, info)}
    >
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
