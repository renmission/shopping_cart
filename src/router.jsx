import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './layouts/authLayout';
import BaseLayout from './layouts/baseLayout';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/mainLayout';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ForgotPassword/changePassword';
import Profile from './pages/Profile';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
