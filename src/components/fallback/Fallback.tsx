import { ReactNode, useEffect, useState } from 'react';
import './Fallback.scss';

type Loading = {
  text: string;
  points: number;
};

function Fallback(): ReactNode {
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

  return (
    <>
      <div className="fallback">
        <span className="fallback__text">{loading.text}</span>
      </div>
    </>
  );
}

export default Fallback;
