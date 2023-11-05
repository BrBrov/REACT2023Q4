import { createBrowserRouter, RouteObject } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary/Error-Boundary';
import routerLoader from '../utils/routerLoader';
import Redirect from '../components/redirect/Redirect';
import pageRoutes from './page-router';
import Beer from '../Beer';
import PageNotFound from '../components/page-notfound/PageNotFound';

const routes: Array<RouteObject> = [
  {
    path: 'main',
    errorElement: <ErrorBoundary />,
    loader: routerLoader,
    element: <Beer />,
    children: pageRoutes,
  },
  {
    path: '/',
    element: <Redirect />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
