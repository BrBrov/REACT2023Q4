import { ReactNode } from 'react';

import styles from './Error-Page.module.scss';
import { useRouter } from 'next/router';

function ErrorPage(): ReactNode {
  const router = useRouter();
  return (
    <div className={styles.error_wrapper}>
      <div className={styles.error}>
        <div className={styles.error__text_wrapper}>
          <span className={styles.error__text}>Something went wrong...</span>
          <span className={styles.error__text}>Message: </span>
          <span className={styles.error__text}></span>
          <button
            className={styles.error__page_reload}
            type="button"
            onClick={returnPage}
          >
            <span className={styles.error__reload_text}>Reload the page</span>
          </button>
        </div>
      </div>
    </div>
  );

  function returnPage(): void {
    router.reload();
  }
}

export default ErrorPage;
