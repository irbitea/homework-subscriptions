import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { webappTheme } from '../webappTheme.ts';
import { Dashboard } from './pages/Dashboard.tsx';
import { ProtectedRoute } from './ProtectedRoute.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { AppLayout } from './AppLayout.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <StyleProvider layer>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={webappTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Dashboard />} />
                </Route>
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </QueryClientProvider>
    </StyleProvider>
  );
}

export default App;
