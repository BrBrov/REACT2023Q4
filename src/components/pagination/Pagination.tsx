import './Pagination.scss';
import { ReactNode } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

function Pagination(): ReactNode {
  const location = useLocation();
  const navigate = useNavigate();

  const page = createSearchParams(location.search).get('page');

  return (
    <div className="pagination">
      <div className="pagination__page-wrapper">
        <span className="pagination__text-page">{'Page: '}</span>
        <span className="pagination__page">{page}</span>
      </div>
      <div className="pagination__panel-wrapper">
        <button
          type="button"
          className="pagination__button"
          onClick={onPageDown}
        >
          <span className="pagination__button-text">⇦</span>
        </button>
        <button type="button" className="pagination__button" onClick={onPageUp}>
          <span className="pagination__button-text">⇨</span>
        </button>
      </div>
    </div>
  );

  function onPageDown(): void {
    const sParams: URLSearchParams = createSearchParams(location.search);
    let enteredPage: number = checkEnteredPage(sParams.get('page')) - 1;

    enteredPage = enteredPage < 1 ? 1 : enteredPage;

    goToPage(enteredPage, sParams);
  }

  function onPageUp(): void {
    const sParams: URLSearchParams = createSearchParams(location.search);
    const enteredPage: number = checkEnteredPage(sParams.get('page')) + 1;

    goToPage(enteredPage, sParams);
  }

  function checkEnteredPage(enteredPage: string | null): number {
    let pageConverted = 1;

    if (enteredPage) pageConverted = parseInt(enteredPage);

    if (isNaN(pageConverted)) return pageConverted;

    return pageConverted;
  }

  function goToPage(page: number, sParams: URLSearchParams): void {
    let url: string = location.pathname + '?page=' + page;

    if (sParams.get('search')) url = url + '&search=' + sParams.get('search');

    navigate(url, { replace: false });
  }
}

export default Pagination;
