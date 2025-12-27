import { Outlet } from '@tanstack/react-router';
import { Layout as AntdLayout, Menu, MenuProps } from 'antd';

const { Content, Sider } = AntdLayout;

export const Layout = () => {
  return (
    <AntdLayout style={{ height: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={['/']}
          items={[
            {
              key: '/',
              label: '首页',
            },
          ]}
        />
      </Sider>
      <AntdLayout>
        <Content style={{ margin: '24px 16px 0' }}>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};
