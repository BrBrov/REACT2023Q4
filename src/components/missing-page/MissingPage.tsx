import './MisingPage.scss';
import { ReactNode } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

function MissingPage(): ReactNode {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="missing__wrapper">
      <span className="missing__text">
        {'There are no pages with the requested beer...'}
      </span>
      <button
        type="button"
        className="missing__button"
        onClick={returnToFirstPage}
      >
        <span className="missing__button-text">{'Go to first page'}</span>
      </button>
    </div>
  );

  function returnToFirstPage(): void {
    const sParams: URLSearchParams = createSearchParams(location.search);

    let url: string = location.pathname + '?page=1';

    if (sParams.get('search')) url += `&search=${sParams.get('search')}`;

    navigate(url, { replace: false });
  }
}

export default MissingPage;
