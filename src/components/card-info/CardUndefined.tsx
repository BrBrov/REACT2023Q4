import { ReactNode } from 'react';
import style from './Cards-info.module.scss';

function CardUndefined({ prop }: { prop: () => void }): ReactNode {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <div className={style.close} onClick={prop}>
          <img
            className={style.close_img}
            src={'./close.svg'}
            alt="Close card"
          />
        </div>
      </div>
      <div className={style.main__card_wrong}>
        <span className={style.main__beer_name}>
          Card was not found on the page.
        </span>
      </div>
    </div>
  );
}

export default CardUndefined;
