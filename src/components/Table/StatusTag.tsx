import { Tag } from 'antd';
import type { SubscriptionStatus } from '../../types';

const statusStyle: Record<SubscriptionStatus, string> = {
  active: 'green',
  suspended: 'gold',
  expired: 'red',
};

interface StatusTagProps {
  status: SubscriptionStatus;
}

export const StatusTag = ({ status }: StatusTagProps) => {
  return (
    <Tag color={statusStyle[status]} className="capitalize" variant="outlined">
      {status}
    </Tag>
  );
};
