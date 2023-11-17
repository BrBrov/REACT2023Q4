import { RouteObject } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary/Error-Boundary';
import Redirect from '../components/redirect/Redirect';
import pageRoutes from './page-router';
import Beer from '../Beer';
import PageNotFound from '../components/page-notfound/PageNotFound';

const routes: Array<RouteObject> = [
  {
    path: 'main',
    errorElement: <ErrorBoundary />,
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

export default routes;
