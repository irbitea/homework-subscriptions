import { Flex } from 'antd';

interface CardRowProps {
  label: string;
  value: React.ReactNode;
}

export const CardRow = ({ label, value }: CardRowProps) => {
  return (
    <Flex justify="space-between" align="center" className="text-sm px-2 py-1.5 rounded-md even:bg-gray-100">
      <span>{label}</span>
      <span>{value}</span>
    </Flex>
  );
};
