import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import Fallback from './components/fallback/Fallback';
import routes from './router/main-router';
import { Provider } from 'react-redux';
import storeApp from './redux/redux-store/store';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.querySelector('.beer')!).render(
  <React.StrictMode>
    <Provider store={storeApp}>
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </Provider>
  </React.StrictMode>
);
