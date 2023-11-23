import './MisingPage.module.scss';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

function MissingPage(): ReactNode {
  const router = useRouter();

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
    router.back();
  }
}

export default MissingPage;
