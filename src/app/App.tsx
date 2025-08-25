import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App as AntdApp } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';
import router from '@/pages';
import { queryClient } from '@/shared/lib/reactQuery';

const ErrorFallback = () => {
  return <div>error</div>;
};

export const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.error(error, info)}
    >
      <QueryClientProvider client={queryClient}>
        <AntdApp>
          {import.meta.env.DEV && <ReactQueryDevtools buttonPosition="bottom-left" />}
          <RouterProvider router={router} />
        </AntdApp>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
