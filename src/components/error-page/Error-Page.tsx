import { ReactNode } from 'react';

import './Error-Page.scss';
import { ErrorPageProps } from '../../models/ErrorPage-model';

function ErrorPage(props: ErrorPageProps): ReactNode {
  function onClick(): void {
    const { reloader } = props;
    reloader();
  }

  return (
    <>
      <div className="error">
        <div className="error__text-wrapper">
          <span className="error__text">
            You pressed that smell button and broke the site!!!
          </span>
          <button
            className="error__page-reload"
            type="button"
            onClick={onClick}
          >
            <span className="error__reload-text">Reload the page</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
