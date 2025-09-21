import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App as AntdApp, ConfigProvider } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { routeTree } from '@/routeTree.gen';
import { queryClient } from '@/shared/lib/reactQuery';

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

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
        <ConfigProvider>
          <AntdApp>
            {import.meta.env.DEV && <ReactQueryDevtools buttonPosition="bottom-left" />}
            <RouterProvider router={router} />
          </AntdApp>
        </ConfigProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
