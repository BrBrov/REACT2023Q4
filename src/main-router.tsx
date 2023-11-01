import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import Beer from './Beer';
import ErrorBoundary from './components/error-boundary/Error-Boundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import routerLoader from './utils/routerLoader';
import fetchData from './utils/RequestData';

const routes: Array<RouteObject> = [
  {
    path: ':params',
    element: <Beer />,
    errorElement: <ErrorBoundary />,
    loader: routerLoader,
    action: routerLoader,
    children: [
      {
        path: '',
        element: [<Header key={'header'} />, <Main key={'main'} />],
      },
    ],
  },
  {
    path: '/',
    element: (
      <Navigate
        to={{
          pathname: 'main',
          search:
            `?page=${fetchData.getPage()}` +
            `${
              fetchData.getSearchString()
                ? `&search=${fetchData.getSearchString()}`
                : ``
            }`,
        }}
        replace={true}
      />
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
