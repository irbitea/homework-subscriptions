import { Tag } from 'antd';
import type { Subscription } from '../../types';

const statusStyle = {
  active: 'green',
  suspended: 'gold',
  expired: 'red',
};

interface StatusTagProps {
  status: Subscription['status'];
}

export const StatusTag = ({ status }: StatusTagProps) => {
  return (
    <Tag color={statusStyle[status]} className="capitalize" variant="outlined">
      {status}
    </Tag>
  );
};
