import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/pages/account/AccountView';
import CustomerListView from 'src/pages/customer/CustomerListView';
import DashboardView from 'src/pages/reports/DashboardView';
import LoginView from 'src/pages/auth/LoginView';
import NotFoundView from 'src/pages/errors/NotFoundView';
import ProductListView from 'src/pages/product/ProductListView';
import RegisterView from 'src/pages/auth/RegisterView';
import SettingsView from 'src/pages/settings/SettingsView';
import Homepage from './pages/homepage';
import SearchResult from './pages/search-result';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Homepage /> },
      { path: '/searchResult', element: <SearchResult /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
