import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../../auth';
import { Avatar, Button, Flex, Typography } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

export const User = () => {
  const user = getUser();
  const navigate = useNavigate();

  return (
    <Flex gap="small" align="center">
      <Avatar className="shrink-0" icon={<UserOutlined />} />
      <div className="min-w-0 flex-1 flex flex-col">
        <Typography.Text className="flex-1" ellipsis>
          {user && user.name}
        </Typography.Text>
        <Typography.Text type="secondary" className="flex-1 !text-xs" ellipsis>
          {user && user.email}
        </Typography.Text>
      </div>
      <Button
        type="text"
        icon={<LogoutOutlined />}
        onClick={() => {
          logout();
          navigate('/login');
        }}
        aria-label="Log out"
      />
    </Flex>
  );
};
