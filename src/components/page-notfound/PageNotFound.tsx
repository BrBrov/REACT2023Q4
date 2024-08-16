import { ReactNode } from 'react';

import styles from './PageNotFound.module.scss';
import { useRouter } from 'next/router';

function PageNotFound(): ReactNode {
  const router = useRouter();

  return (
    <div className={styles.not_found_block}>
      <div className={styles.page__not_found}>
        <span className={styles.page__title_not_found}>404...</span>
        <span className={styles.page__text_not_found}>Page not found!</span>
        <button
          className={styles.page__button_not_found}
          type="button"
          onClick={onRedirect}
        >
          <span className={styles.page__button_txt_not_found}>Return...</span>
        </button>
      </div>
    </div>
  );

  async function onRedirect(): Promise<void> {
    await router.push('main?page=1&items=6');
  }
}

export default PageNotFound;
