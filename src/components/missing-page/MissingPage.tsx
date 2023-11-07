import './MisingPage.scss';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

function MissingPage(): ReactNode {
  const navigate = useNavigate();

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
        <span className="missing__button-text">{'Go to previous page'}</span>
      </button>
    </div>
  );

  function returnToFirstPage(): void {
    navigate(-1);
  }
}

export default MissingPage;
