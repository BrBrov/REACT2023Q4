import { ReactNode } from 'react';

import './Error-Page.scss';
import { Link, useLocation } from 'react-router-dom';

function ErrorPage(): ReactNode {
  const location = useLocation();

  const linkToReload = location.pathname + location.search;
  return (
    <>
      <div className="error">
        <div className="error__text-wrapper">
          <span className="error__text">
            You pressed that smell button and broke the site!!!
          </span>
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
