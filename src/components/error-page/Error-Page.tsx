import { ReactNode } from 'react';

import './Error-Page.scss';

function ErrorPage(): ReactNode {
  return (
    <>
      <div className="error">
        <div className="error__text-wrapper">
          <span className="error__text">Something went wrong...</span>
          <span className="error__text">Message: </span>
          <span className="error__text"></span>
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

  function returnPage(): void {}
}

export default ErrorPage;
