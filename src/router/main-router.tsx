import { createBrowserRouter, RouteObject } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary/Error-Boundary';
import routerLoader from '../utils/routerLoader';
import Redirect from '../components/redirect/Redirect';
import pageRoutes from './page-router';

const routes: Array<RouteObject> = [
  {
    path: 'main',
    errorElement: <ErrorBoundary />,
    loader: routerLoader,
    lazy: async () => {
      const m = await import('./../Beer');
      return { Component: m.default };
    },
    children: pageRoutes,
  },
  {
    path: '*',
    element: <Redirect />,
  },
];

const router = createBrowserRouter(routes);

export default router;
