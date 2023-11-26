import { ReactNode } from 'react';

import ErrorPage from '../error-page/Error-Page';

function ErrorBoundary(): ReactNode {
  console.log("You caused this error: '" + '' + "'!!!");
  console.log("Reason for error: '" + '' + "'!!!!");

  return <ErrorPage />;
}

export default ErrorBoundary;
