import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Beer from './Beer';
import ErrorBoundary from './components/error-boundary/Error-Boundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import routerLoader from './utils/routerLoader';
import CardsInfo from './components/card-info/Cards-info';
import Redirect from './components/redirect/Redirect';
import loaderSingleCard from './utils/oneCardLoader';

const routes: Array<RouteObject> = [
  {
    path: 'main',
    element: <Beer />,
    errorElement: <ErrorBoundary />,
    loader: routerLoader,
    children: [
      {
        path: '',
        element: [<Header key={'header'} />, <Main key={'main'} />],
        children: [
          {
            path: '',
            loader: loaderSingleCard,
            element: <CardsInfo key={'card'} />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Redirect />,
  },
];

const router = createBrowserRouter(routes);

export default router;
