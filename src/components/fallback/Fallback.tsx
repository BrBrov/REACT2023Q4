import { ReactNode } from 'react';
import styles from './Fallback.module.scss';
import FallbackAnimation from '@/components/fallback/FallbackAnimation';

function Fallback(): ReactNode {
  return (
    <>
      <div className={styles.fallback}>
        <FallbackAnimation />
      </div>
    </>
  );
}

export default Fallback;
