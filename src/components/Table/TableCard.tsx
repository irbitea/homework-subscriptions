import { Card, Empty, Flex, Pagination, Spin } from 'antd';
import { paginationConfig, type Subscription } from '../../types';
import { CardRow } from './CardRow';
import { useState } from 'react';
import { StatusTag } from './StatusTag';
import { formatCurrency, formatDate } from '../../format';

export interface ResponsiveTableCardProps {
  filteredData: Subscription[];
  loading?: boolean;
}

export const TableCard = ({ filteredData, loading }: ResponsiveTableCardProps) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(paginationConfig.defaultPageSize ?? 10);

  const pageItems = filteredData.slice((page - 1) * pageSize, page * pageSize);

  if (loading) return <Spin className="block mx-auto" />;

  if (filteredData.length === 0) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <Flex vertical gap="medium">
      {pageItems.map((subscription) => (
        <Card key={subscription.id} title={subscription.customerName} size="small">
          <Flex vertical gap="small">
            <CardRow label="Product" value={subscription.productName} />
            <CardRow label="Status" value={<StatusTag status={subscription.status} />} />
            <CardRow label="Quantity" value={subscription.quantity} />
            <CardRow label="Monthly cost" value={formatCurrency(subscription.monthlyCost)} />
            <CardRow label="Renewal date" value={formatDate(subscription.renewalDate)} />
          </Flex>
        </Card>
      ))}
      <Pagination
        {...paginationConfig}
        current={page}
        align="center"
        pageSize={pageSize}
        total={filteredData.length}
        onChange={(newPage, newPageSize) => {
          setPage(newPage);
          setPageSize(newPageSize);
        }}
      />
    </Flex>
  );
};
