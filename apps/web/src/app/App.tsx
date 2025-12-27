import { StyleProvider } from '@ant-design/cssinjs';
import { queryClient } from '@repo/lib';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { App as AntdApp, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import { routeTree } from '@/routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider layer>
        <ConfigProvider locale={zhCN}>
          <AntdApp>
            {import.meta.env.VITE_REACT_QUERY_DEVTOOLS === 'true' && (
              <ReactQueryDevtools buttonPosition="top-right" />
            )}
            <RouterProvider router={router} />
          </AntdApp>
        </ConfigProvider>
      </StyleProvider>
    </QueryClientProvider>
  );
};
