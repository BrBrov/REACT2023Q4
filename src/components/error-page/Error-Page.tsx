import { ReactNode } from 'react';

import './Error-Page.scss';
import { Link } from 'react-router-dom';

function ErrorPage(): ReactNode {
  return (
    <>
      <div className="error">
        <div className="error__text-wrapper">
          <span className="error__text">
            You pressed that smell button and broke the site!!!
          </span>
          <button className="error__page-reload" type="button">
            <Link to={'/'} className="error__reload-text">
              Reload the page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
