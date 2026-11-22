import { CreditCardOutlined } from '@ant-design/icons';
import { Flex } from 'antd';

export const Logo = () => {
  return (
    <Flex align="center" className="p-4" gap="small">
      <Flex justify="center" align="center" className="w-8 h-8 rounded-lg bg-green-500 text-white">
        <CreditCardOutlined />
      </Flex>
      <span className="font-semibold text-lg">SubHub</span>
    </Flex>
  );
};
