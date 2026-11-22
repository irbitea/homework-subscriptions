import { Grid, Table, type TableProps } from 'antd';
import { paginationConfig, type Subscription, type SubscriptionStatus } from '../../types';
import { TableCard } from './TableCard';
import { StatusTag } from './StatusTag';
import { formatCurrency, formatDate } from '../../format';

const { useBreakpoint } = Grid;

export interface SubscriptionTableProps {
  data: Subscription[];
  loading?: boolean;
}

export const SubscriptionTable = ({ data, loading }: SubscriptionTableProps) => {
  const screens = useBreakpoint();
  const isDesktop = screens.md;

  const columns: TableProps<Subscription>['columns'] = [
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
      fixed: true,
      sorter: (a, b) => a.customerName.localeCompare(b.customerName),
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
      sorter: (a, b) => a.productName.localeCompare(b.productName),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: SubscriptionStatus) => <StatusTag status={status} />,
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: 'Monthly Cost',
      dataIndex: 'monthlyCost',
      key: 'monthlyCost',
      render: (monthlyCost: number) => formatCurrency(monthlyCost),
      sorter: (a, b) => a.monthlyCost - b.monthlyCost,
    },
    {
      title: 'Renewal Date',
      dataIndex: 'renewalDate',
      key: 'renewalDate',
      render: (date: string) => formatDate(date),
      sorter: (a, b) => a.renewalDate.localeCompare(b.renewalDate),
    },
  ];

  return (
    <>
      {isDesktop ? (
        <Table<Subscription>
          rowKey="id"
          columns={columns}
          dataSource={data}
          size="small"
          pagination={{
            ...paginationConfig,
            placement: ['bottomEnd'],
          }}
          scroll={{ x: 'max-content' }}
          loading={loading}
        />
      ) : (
        <TableCard filteredData={data} loading={loading} />
      )}
    </>
  );
};
