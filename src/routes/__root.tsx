import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from '@tanstack/react-router';
import { Layout, Menu, type MenuProps } from 'antd';
import { useMemo } from 'react';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const contentStyle: React.CSSProperties = {
  height: 'calc(100vh - 64px)',
  overflow: 'auto',
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>404</p>
        <Link to="/">回到首页</Link>
      </div>
    );
  },
});

function RootComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(
    (): MenuItem[] => [
      {
        key: 'sub1',
        label: '导航栏',
        children: [
          { key: '/', label: '首页', onClick: () => navigate({ to: '/' }) },
          { key: '/markdown', label: 'markdown', onClick: () => navigate({ to: '/markdown' }) },
          {
            key: 'settings',
            label: '设置',
            children: [
              {
                key: '/settings/a',
                label: '设置A',
                onClick: () => navigate({ to: '/settings/a' }),
              },
              {
                key: '/settings/b',
                label: '设置B',
                onClick: () => navigate({ to: '/settings/b' }),
              },
            ],
          },
        ],
      },
    ],
    [navigate],
  );

  const selectedKeys = useMemo(() => {
    const currentPath = location.pathname;
    return [currentPath];
  }, [location.pathname]);

  return (
    <Layout hasSider>
      <Sider theme="light" style={siderStyle}>
        <Menu
          className="h-full"
          theme="light"
          mode="inline"
          defaultOpenKeys={['sub1', 'settings']}
          selectedKeys={selectedKeys}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{ backgroundColor: '#fff' }}
          className=" border-b-blue-300 border-b flex justify-end"
        >
          header
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
