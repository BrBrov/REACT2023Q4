import { ReactNode } from 'react';

import './Error-Page.scss';
import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage(): ReactNode {
  const navigate = useNavigate();

  const err = useRouteError() as Error;

  return (
    <>
      <div className="error">
        <div className="error__text-wrapper">
          <span className="error__text">Something went wrong...</span>
          <span className="error__text">Message: {err.message}</span>
          <span className="error__text">{err.name}</span>
          <button
            className="error__page-reload"
            type="button"
            onClick={returnPage}
          >
            <span className="error__reload-text">Reload the page</span>
          </button>
        </div>
      </div>
    </>
  );

  function returnPage(): void {
    navigate(-1);
  }
}

export default ErrorPage;
