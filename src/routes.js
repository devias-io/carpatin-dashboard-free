import { Navigate } from 'react-router-dom';
import { Layout } from './components/layout';
import { Icons } from './pages/icons';
import { NotFound } from './pages/not-found';
import { Orders } from './pages/orders';
import { Reports } from './pages/reports';
import { Settings } from './pages/settings';
import { Theme } from './pages/theme';

export const routes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" />
  },
  {
    path: 'dashboard',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Reports />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'theme',
        element: <Theme />
      },
      {
        path: 'icons',
        element: <Icons />
      },
      {
        path: '*',
        element: <Navigate to="/404" />
      }
    ]
  },
  {
    path: '404',
    element: <NotFound />
  }
];
