import './Pagination.scss';
import { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemsPerPage from '../items-page/ItemsPerPage';

function Pagination(): ReactNode {
  const [sParams, setNewParams] = useSearchParams();

  return (
    <div className="pagination">
      <div className="pagination__page-wrapper">
        <span className="pagination__text-page">{'Page: '}</span>
        <span className="pagination__page">{sParams.get('page')}</span>
      </div>
      <ItemsPerPage />
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
    let enteredPage: number = checkEnteredPage(sParams.get('page')) - 1;

    enteredPage = enteredPage < 1 ? 1 : enteredPage;

    goToPage(enteredPage);
  }

  function onPageUp(): void {
    const enteredPage: number = checkEnteredPage(sParams.get('page')) + 1;

    goToPage(enteredPage);
  }

  function checkEnteredPage(enteredPage: string | null): number {
    let pageConverted = 1;

    if (Array.isArray(enteredPage)) return 1;

    if (enteredPage) pageConverted = parseInt(enteredPage);

    if (isNaN(pageConverted) || Array.isArray(enteredPage))
      return pageConverted;

    return pageConverted;
  }

  function goToPage(page: number): void {
    let url: string = '?page=' + page + '&items=' + sParams.get('items');

    if (sParams.get('search')) url = url + '&search=' + sParams.get('search');

    setNewParams(url, { replace: false });
  }
}

export default Pagination;
