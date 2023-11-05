import { RouteObject } from 'react-router-dom';
import infoRouter from './info-router';

const pageRoutes: Array<RouteObject> = [
  {
    path: '',
    lazy: async () => {
      const Header = await import('../components/header/Header').then(
        (module) => module.default
      );
      const Main = await import('../components/main/Main').then(
        (module) => module.default
      );
      const component = () => (
        <>
          <Header />
          <Main />
        </>
      );

      return { Component: component };
    },
    children: infoRouter,
  },
];

export default pageRoutes;
