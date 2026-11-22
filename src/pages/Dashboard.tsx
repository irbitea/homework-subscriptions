import { Alert, Card, Flex, Grid, Segmented, Select } from 'antd';
import { AppstoreOutlined, CheckCircleOutlined, EuroOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { KpiCard } from '../components/KPICard';
import { useMemo, useState } from 'react';
import { SubscriptionTable } from '../components/Table/SubscriptionTable';
import { formatCurrency } from '../format';
import { fetchSubscriptions } from '../api';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../auth';

const { useBreakpoint } = Grid;

export const Dashboard = () => {
  const user = getUser();

  const {
    data = [],
    isPending,
    isError,
  } = useQuery({
    queryFn: fetchSubscriptions,
    queryKey: ['subscriptions'],
  });

  const screens = useBreakpoint();
  const isDesktop = screens.xl;
  const isMobile = screens.md;

  const [customer, setCustomer] = useState('all');
  const [status, setStatus] = useState('all');

  const customerOptions = useMemo(
    () =>
      [...new Set(data.map((customer) => customer.customerName))].sort().map((name) => ({ label: name, value: name })),
    [data],
  );

  const filtered = useMemo(
    () =>
      data.filter(
        (item) =>
          (customer === 'all' || item.customerName === customer) && (status === 'all' || item.status === status),
      ),
    [data, customer, status],
  );

  const kpiValues = useMemo(() => {
    const active = filtered.filter((data) => data.status === 'active');
    const expired = filtered.filter((data) => data.status === 'expired');
    const monthlyCost = active.reduce((sum, data) => sum + data.monthlyCost, 0);

    return {
      total: filtered.length,
      active: active.length,
      expired: expired.length,
      monthlyCost: monthlyCost,
    };
  }, [filtered]);

  return (
    <div className="mx-auto px-4 py-8 flex flex-col gap-8">
      <Card className="w-full">
        <div className="flex flex-col justify-start gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-2xl mb-1 font-semibold">Welcome, {user && user.name}</h1>
            <p className="text-gray-500">Track subscriptions, renewals and monthly costs across all your customers</p>
          </div>
          <Flex className="flex flex-col xl:flex-row" gap="medium">
            <Flex vertical gap={2}>
              <label className="text-xs text-gray-500" htmlFor="customers">
                Customers
              </label>
              <Select
                id="customers"
                value={customer}
                className="w-full xl:w-48"
                placeholder="Select a customer"
                options={[{ label: 'All Customers', value: 'all' }, ...customerOptions]}
                onChange={(value) => setCustomer(value ?? 'all')}
                allowClear
              />
            </Flex>
            <Flex vertical gap={2}>
              <label className="text-xs text-gray-500" htmlFor="status">
                Subscription status
              </label>
              <Segmented
                id="status"
                block={!isDesktop}
                vertical={!isMobile}
                className="flex-1"
                value={status}
                placeholder="Subscription status"
                onChange={(value) => setStatus(value)}
                options={[
                  { value: 'all', label: 'All' },
                  { value: 'active', label: 'Active' },
                  { value: 'suspended', label: 'Suspended' },
                  { value: 'expired', label: 'Expired' },
                ]}
              />
            </Flex>
          </Flex>
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard
          icon={<AppstoreOutlined />}
          value={kpiValues.total}
          label="Total subscriptions"
          iconClassName="bg-blue-100 text-blue-600"
        />
        <KpiCard
          icon={<CheckCircleOutlined />}
          value={kpiValues.active}
          label="Active subscriptions"
          iconClassName="bg-green-100 text-green-600"
        />
        <KpiCard
          icon={<ExclamationCircleOutlined />}
          value={kpiValues.expired}
          label="Expired subscriptions"
          iconClassName="bg-red-100 text-red-600"
        />
        <KpiCard
          icon={<EuroOutlined />}
          value={formatCurrency(kpiValues.monthlyCost)}
          label="Total monthly cost"
          iconClassName="bg-blue-100 text-blue-600"
        />
      </div>

      <Card>
        <h2 className="text-base mb-1 font-semibold">All subscriptions</h2>
        <p className="text-gray-500 mb-4">
          Showing {filtered.length} of {data.length}
        </p>
        {isError ? (
          <Alert
            type="error"
            showIcon
            title="Error while fetching data"
            description="Please refresh the page and try again"
          />
        ) : (
          <SubscriptionTable data={filtered} loading={isPending} />
        )}
      </Card>
    </div>
  );
};
