import { RouteObject } from 'react-router-dom';
import loaderSingleCard from '../utils/loaderSingleCard';

const infoRouter: Array<RouteObject> = [
  {
    path: '',
    loader: loaderSingleCard,
    lazy: async () => {
      const m = await import('./../components/card-info/Cards-info');
      return { Component: m.default };
    },
  },
];

export default infoRouter;
