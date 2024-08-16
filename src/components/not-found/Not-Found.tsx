import { ReactNode } from 'react';

import styles from './Not-Found.module.scss';

function NotFound(): ReactNode {
  return (
    <div className={styles.main__result_apson}>
      <div className={styles.main__absent_wrapper}>
        <span className={styles.main__not_found}>
          The beer you are looking for was not found!
        </span>
        <span className={styles.main__not_found}>
          Try looking for another beer.
        </span>
      </div>
    </div>
  );
}
export default NotFound;
