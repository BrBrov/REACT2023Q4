import { ReactNode } from 'react';

import './Card.scss';
import { useSearchParams } from 'react-router-dom';
import CardsNotFound from './CardsNotFound';
import ResponseData from '../../models/ResponseData';

function Card(props: { id: number }): ReactNode {
  const ids: number = props.id;

  const [sParams, setNewParams] = useSearchParams();

  const card: ResponseData | null = null; //TODO want to edit

  const urlToBack: string = createLinkToCardInfo(sParams);

  if (!card) return <CardsNotFound />;

  const { abv, srm, volume, name, description, ibu, image_url } = card;

  return (
    <>
      <div className="card" onClick={toCardInfo}>
        <div className="card__top">
          <span className="card__beer-name">{name}</span>
        </div>
        <div className="card__medium">
          <div className="card__image-wrapper">
            <div className="card__image-container">
              <img
                className="card__image"
                src={image_url ? image_url : '/image.png'}
                alt={`Image of ${description}`}
              />
            </div>
          </div>
          <div className="card__description-wrapper">
            <span className="card__volume">{`Volume: ${volume} ${volume}`}</span>
            <span className="card__description">{description}</span>
          </div>
        </div>
        <div className="card__bottom">
          <span className="card__beer-abv">{`Alcohol: ${abv}%`}</span>
          <span className="card__beer-srm">{`Color SRM: ${srm}`}</span>
          <span className="card__beer-ibu">{`Bitterness: ${ibu}`}</span>
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

    if (!sParams.get('ids')) linkToShowInfo += `&ids=${ids}`;

    return linkToShowInfo;
  }

  function toCardInfo(): void {
    setNewParams(urlToBack);
  }
}

export default Card;
