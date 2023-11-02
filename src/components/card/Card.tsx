import { ReactNode, useDeferredValue } from 'react';

import './Card.scss';
import { CardProps } from '../../models/Card-model';
import {
  createSearchParams,
  Link,
  Location,
  useLocation,
} from 'react-router-dom';

function Card(props: CardProps): ReactNode {
  const { id, name, description, image_url, volume, ibu, srm, abv } = props;
  const ids: number = useDeferredValue(id);

  const location = useLocation();

  const sParams = createSearchParams(location.search);

  const linkToShowInfo = createLinkToCardInfo(location, sParams);

  return (
    <>
      <Link to={linkToShowInfo} className="card">
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
            <span className="card__volume">{`Volume: ${volume.value} ${volume.unit}`}</span>
            <span className="card__description">{description}</span>
          </div>
        </div>
        <div className="card__bottom">
          <span className="card__beer-abv">{`Alcohol: ${abv}%`}</span>
          <span className="card__beer-srm">{`Color SRM: ${srm}`}</span>
          <span className="card__beer-ibu">{`Bitterness: ${ibu}`}</span>
        </div>
      </Link>
    </>
  );

  function createLinkToCardInfo(
    location: Location,
    sParams: URLSearchParams
  ): string {
    let linkToShowInfo: string =
      location.pathname + '?page=' + (sParams.get('page') || '1');

    linkToShowInfo += sParams.get('search')
      ? `&search=${sParams.get('search')}`
      : '';

    linkToShowInfo += `&ids=${ids}`;

    return linkToShowInfo;
  }
}

export default Card;
