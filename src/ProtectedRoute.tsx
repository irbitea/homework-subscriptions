import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from './auth';

export const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />;
};
