import { ReactNode } from 'react';

import './PageNotFound.scss';
import { useNavigate } from 'react-router-dom';
function PageNotFound(): ReactNode {
  const navigate = useNavigate();

  return (
    <div className="page__not-found">
      <span className="page__title-not_found">404...</span>
      <span className="page__text-not_found">Page not found!</span>
      <button
        className="page__button-not_found"
        type="button"
        onClick={onRedirect}
      >
        <span className="page__button-txt_not_found">Return...</span>
      </button>
    </div>
  );

  function onRedirect(): void {
    navigate('/main?page=1&items=6', { replace: false });
  }
}

export default PageNotFound;
