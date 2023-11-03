import { RouteObject } from 'react-router-dom';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import infoRouter from './info-router';

const pageRoutes: Array<RouteObject> = [
  {
    path: '',
    element: [<Header key={'header'} />, <Main key={'main'} />],
    children: infoRouter,
  },
];

export default pageRoutes;
