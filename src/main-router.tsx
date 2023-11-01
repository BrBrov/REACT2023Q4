import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Beer from './Beer';
import ErrorBoundary from './components/error-boundary/Error-Boundary';

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Beer />,
    errorElement: <ErrorBoundary />,
  },
];

const router = createBrowserRouter(routes);

export default router;
