import { useRouteError } from 'react-router-dom';
import { ReactNode } from 'react';

import ErrorPage from '../error-page/Error-Page';

function ErrorBoundary(): ReactNode {
  const error = useRouteError() as Error;
  console.log("You caused this error: '" + error.name + "'!!!");
  console.log("Reason for error: '" + error.cause + "'!!!!");

  return <ErrorPage />;
}

export default ErrorBoundary;
