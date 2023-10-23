import React from 'react';
import ReactDOM from 'react-dom/client';
import Beer from './Beer';
import './index.scss';

ReactDOM.createRoot(document.querySelector('.beer')!).render(
  <React.StrictMode>
    <Beer />
  </React.StrictMode>
);
