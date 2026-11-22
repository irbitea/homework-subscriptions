import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex, Grid, Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { User } from './components/Menu/User';
import { MenuPanel } from './components/Menu/MenuPanel';
import { Logo } from './components/Menu/Logo';

const { Content, Sider } = Layout;
const { useBreakpoint } = Grid;

export const AppLayout = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const isDesktop = screens.lg;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isDesktop ? (
        <Sider theme="light" className="top-0 sticky h-screen border-r border-gray-200" width={240}>
          <Flex vertical className="h-full p-3">
            <Logo />
            <MenuPanel />
            <div className="border-t border-gray-200 p-3">
              <User />
            </div>
          </Flex>
        </Sider>
      ) : (
        <>
          <Header className="p-4 bg-white shadow-lg relative z-10 flex items-center justify-between top-0 sticky">
            <Logo />
            <Button type="text" icon={<MenuOutlined />} aria-label="Open menu" onClick={() => setOpen(true)} />
          </Header>
          <Drawer placement="right" open={open} onClose={() => setOpen(false)} footer={<User />}>
            <MenuPanel onMenuClick={() => setOpen(false)} />
          </Drawer>
        </>
      )}
      <Layout>
        <Content className="px-4 md:px-8">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
