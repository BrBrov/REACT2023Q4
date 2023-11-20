import { RouteObject } from 'react-router-dom';

const infoRouter: Array<RouteObject> = [
  {
    path: '',
    lazy: async () => {
      const m = await import('./../components/card-info/Cards-info');
      return { Component: m.default };
    },
  },
];

export default infoRouter;
