import { Card, Flex } from 'antd';

interface KpiCardProps {
  icon: React.ReactNode;
  value: React.ReactNode;
  label: string;
  iconClassName: string;
}

export const KpiCard = ({ icon, value, label, iconClassName }: KpiCardProps) => {
  return (
    <Card className="w-full">
      <Flex align="center" gap="medium">
        <Flex justify="center" align="center" className={`w-12 h-12 rounded-lg text-xl ${iconClassName}`}>
          {icon}
        </Flex>
        <div>
          <p className="text-2xl font-semibold leading-tight">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </Flex>
    </Card>
  );
};
