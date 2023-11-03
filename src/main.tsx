import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import router from './router/main-router';

ReactDOM.createRoot(document.querySelector('.beer')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
