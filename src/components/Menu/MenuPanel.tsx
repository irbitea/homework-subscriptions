import {
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  FileTextOutlined,
  BarChartOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { type MenuProps, Menu } from 'antd';

interface MenuPanelProps {
  onMenuClick?: () => void;
}

export const MenuPanel = ({ onMenuClick }: MenuPanelProps) => {
  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = [
    {
      key: 'overview',
      label: 'Overview',
      type: 'group',
      children: [
        { key: '1', label: 'Subscriptions', icon: <AppstoreOutlined /> },
        { key: '2', label: 'Customers', icon: <TeamOutlined /> },
        { key: '3', label: 'Products', icon: <ShopOutlined /> },
      ],
    },
    {
      key: 'billing',
      label: 'Billing',
      type: 'group',
      children: [
        { key: '4', label: 'Invoices', icon: <FileTextOutlined /> },
        { key: '5', label: 'Reports', icon: <BarChartOutlined /> },
      ],
    },
    {
      key: 'system',
      label: 'System',
      type: 'group',
      children: [
        { key: '6', label: 'Settings', icon: <SettingOutlined /> },
        { key: '7', label: 'Help', icon: <InfoCircleOutlined /> },
      ],
    },
  ];

  return (
    <Menu
      theme="light"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
      className="flex-1"
      style={{ borderInlineEnd: 'none' }}
      onClick={onMenuClick}
    />
  );
};
