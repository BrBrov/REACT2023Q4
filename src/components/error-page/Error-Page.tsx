import { ReactNode } from 'react';

import './Error-Page.scss';
import { Link, useLocation, useRouteError } from 'react-router-dom';

function ErrorPage(): ReactNode {
  const location = useLocation();

  const err = useRouteError() as Error;

  const linkToReload = location.pathname + location.search;

  return (
    <>
      <div className="error">
        <div className="error__text-wrapper">
          <span className="error__text">Something went wrong...</span>
          <span className="error__text">Message: {err.message}</span>
          <span className="error__text">{err.name}</span>
          <Link to={linkToReload}>
            <button className="error__page-reload" type="button">
              <span className="error__reload-text">Reload the page</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
