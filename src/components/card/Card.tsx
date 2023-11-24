import { ReactNode, SyntheticEvent } from 'react';
import Image from 'next/image';

import style from './Card.module.scss';
import CardsNotFound from './CardsNotFound';
import ResponseData from '../../models/ResponseData';
import { useRouter } from 'next/router';

function Card(props: { card: ResponseData }): ReactNode {
  const router = useRouter();
  const id = props.card.id;

  if (!props) return <CardsNotFound />;

  const { abv, srm, volume, name, description, ibu, image_url } = props.card;

  return (
    <>
      <div className={style.card} onClick={toCardInfo}>
        <div className={style.card__top}>
          <span className={style.beer_name}>{name}</span>
        </div>
        <div className={style.card__medium}>
          <div className={style.card_image}>
            <div className={style.card_container}>
              <Image
                className={style.card__image}
                src={image_url ? image_url : '/image.png'}
                alt={`Image of ${description}`}
              />
            </div>
          </div>
          <div className={style.description}>
            <span
              className={style.card__volume}
            >{`Volume: ${volume.value}`}</span>
            <span className={style.card__description}>{description}</span>
          </div>
        </div>
        <div className={style.card__bottom}>
          <span className={style.beer_abv}>{`Alcohol: ${abv}%`}</span>
          <span className={style.beer_srm}>{`Color SRM: ${srm}`}</span>
          <span className={style.beer_ibu}>{`Bitterness: ${ibu}`}</span>
        </div>
      </div>
    </>
  );

  function createLinkToCardInfo(sParams: URLSearchParams): string {
    let linkToShowInfo: string = '?page=' + (sParams.get('page') || '1');

    linkToShowInfo += '&items=' + (sParams.get('items') || '6');

    linkToShowInfo += sParams.get('search')
      ? `&search=${sParams.get('search')}`
      : '';

    if (!sParams.get('ids')) linkToShowInfo += `&ids=${id}`;

    return linkToShowInfo;
  }

  async function toCardInfo(e: SyntheticEvent): Promise<void> {
    e.stopPropagation();
    const queryParams = new URLSearchParams(router.asPath);
    await router.push(createLinkToCardInfo(queryParams));
  }
}

export default Card;
