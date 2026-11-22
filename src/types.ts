import type { PaginationProps } from 'antd';

export type SubscriptionStatus = 'active' | 'expired' | 'suspended';

export interface Subscription {
  id: string;
  customerName: string;
  productName: string;
  status: SubscriptionStatus;
  quantity: number;
  monthlyCost: number;
  renewalDate: string;
}

export const paginationConfig: PaginationProps = {
  showSizeChanger: true,
  defaultPageSize: 30,
  pageSizeOptions: [10, 30, 50],
};
