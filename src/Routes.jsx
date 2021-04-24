import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/pages/account/AccountView';
import CustomerListView from 'src/pages/customer/CustomerListView';
import DashboardView from 'src/pages/reports/DashboardView';
import LoginView from 'src/pages/auth/Login';
import NotFoundView from 'src/pages/errors/NotFoundView';
import ProductListView from 'src/pages/product/ProductListView';
import RegisterView from 'src/pages/auth/Register';
import SettingsView from 'src/pages/settings/SettingsView';
import PostPage from 'src/components/post-page';
import PlaceBid from 'src/components/PlaceBid';
import Homepage from './pages/homepage';
import SearchResult from './pages/search-result';
import ProjectResult from './pages/project-result';
import FreelancerProfile from './pages/account/AccountView/ProfileView';
import EmployerProfile from './pages/account/AccountView/EmployerProfile/EmployerProfile';
import Wallet from './pages/Wallet';
import MyFavorities from './pages/my-favorities';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'profile', element: <FreelancerProfile /> },
      { path: 'eprofile', element: <EmployerProfile /> },
      { path: 'account', element: <AccountView /> },
      { path: 'post', element: <PostPage /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'wallet', element: <Wallet /> },
      { path: 'myfavorities', element: <MyFavorities /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'bid', element: <PlaceBid /> },
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '/', element: <Homepage /> },
      { path: '/searchResult', element: <SearchResult /> },
      { path: '/projectResult', element: <ProjectResult /> },
      { path: '/walletallet', element: <ProjectResult /> },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
