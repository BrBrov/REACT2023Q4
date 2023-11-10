import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import Fallback from './components/fallback/Fallback';
import routes from './router/main-router';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.querySelector('.beer')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </React.StrictMode>
);
