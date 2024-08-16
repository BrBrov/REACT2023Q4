import { ReactNode, useEffect, useState } from 'react';
import styles from '@/components/fallback/Fallback.module.scss';

type Loading = {
  text: string;
  points: number;
};
function FallbackAnimation(): ReactNode {
  const [loading, setLoading] = useState({ text: 'Loading', points: 0 });

  useEffect(() => {
    setTimeout(() => {
      if (loading.points < 3) {
        const newLoading: Loading = {
          text: loading.text + '.',
          points: loading.points + 1,
        };
        return setLoading(() => newLoading);
      }

      const newLoading: Loading = {
        text: 'Loading',
        points: 0,
      };

      setLoading(() => newLoading);
    }, 500);
  });

  return <span className={styles.fallback__text}>{loading.text}</span>;
}

export default FallbackAnimation;
