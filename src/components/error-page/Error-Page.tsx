import { ReactNode } from 'react';

import './Error-Page.scss';
import { Link } from 'react-router-dom';
import UrlBuilder from '../../utils/UrlBuilder';
import fetchData from '../../utils/RequestData';

function ErrorPage(): ReactNode {
  return (
    <>
      <div className="error">
        <div className="error__text-wrapper">
          <span className="error__text">
            You pressed that smell button and broke the site!!!
          </span>

          <button className="error__page-reload" type="button">
            <Link
              to={new UrlBuilder().createURL(
                fetchData.getPage(),
                fetchData.getSearchString()
              )}
            >
              <span className="error__reload-text">Reload the page</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
