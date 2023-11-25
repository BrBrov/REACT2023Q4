import styles from './MisingPage.module.scss';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

function MissingPage(): ReactNode {
  const router = useRouter();

  return (
    <div className={styles.missing__wrapper}>
      <span className={styles.missing__text}>
        {'There are no pages with the requested beer...'}
      </span>
      <button
        type="button"
        className={styles.missing__button}
        onClick={returnToFirstPage}
      >
        <span className={styles.missing__button_text}>{'Go to previous page'}</span>
      </button>
    </div>
  );

  function returnToFirstPage(): void {
    router.back();
  }
}

export default MissingPage;
