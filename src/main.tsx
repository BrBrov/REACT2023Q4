import React from 'react';
import ReactDOM from 'react-dom/client';
import Beer from './Beer';
import './index.scss';
import ErrorBoundary from './components/error-boundary/Error-Boundary';

ReactDOM.createRoot(document.querySelector('.beer')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Beer />
    </ErrorBoundary>
  </React.StrictMode>
);
