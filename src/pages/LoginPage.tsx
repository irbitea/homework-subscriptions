import { Flex, Card, Row, Col, Form, Input, Button, Typography } from 'antd';
import { isLoggedIn, login } from '../auth';
import { Navigate, useNavigate } from 'react-router-dom';

const { Text } = Typography;

type LoginValues = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<LoginValues>();

  if (isLoggedIn()) return <Navigate to="/" replace />;

  const onFinish = (values: LoginValues) => {
    if (login(values.email, values.password)) {
      navigate('/');
      return;
    }

    form.setFields([{ name: 'password', value: '', errors: ['Invalid email or password'] }]);
  };

  return (
    <div className="flex min-h-dvh bg-login-panel lg:bg-none p-4 lg:p-3">
      <Row gutter={24} align="stretch" className="flex-1 lg:p-4">
        <Col xs={0} sm={0} md={0} lg={13}>
          <div className="flex h-full items-center justify-center rounded-2xl bg-login-panel p-10">
            <img src="./login-cards-only.png" alt="" className="w-full max-w-2xl" />
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={11}>
          <div className="flex h-full items-center justify-center">
            <Card
              className="flex w-full max-w-md !rounded-2xl lg:h-full lg:max-w-none"
              classNames={{ body: 'flex flex-1 flex-col' }}
            >
              <Flex align="center" vertical justify="center" className="flex-1">
                <div className="w-full max-w-sm">
                  <div className="mt-8 text-center">
                    <h1 className="text-xl font-semibold">Sign In</h1>
                    <Text type="secondary">Please login to continue</Text>
                  </div>

                  <Form form={form} layout="vertical" requiredMark={false} className="mt-8" onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Email is required' }]}>
                      <Input size="large" variant="filled" autoComplete="username" />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Password is required' }]}
                    >
                      <Input.Password size="large" variant="filled" autoComplete="current-password" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" size="large" block className="mt-4">
                      Login
                    </Button>
                  </Form>
                </div>
              </Flex>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};
