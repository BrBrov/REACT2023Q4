import { ReactNode } from 'react';

import './Card.scss';
import { CardProps } from '../../models/Card-model';
import {
  createSearchParams,
  Location,
  useLocation,
  useNavigate,
} from 'react-router-dom';

function Card(props: CardProps): ReactNode {
  const { id, name, description, image_url, volume, ibu, srm, abv } = props;
  const ids: number = id;

  const location = useLocation();
  const navigate = useNavigate();

  const linkToShowInfo = createLinkToCardInfo(location);

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
            <span className="card__volume">{`Volume: ${volume.value} ${volume.unit}`}</span>
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

  function createLinkToCardInfo(location: Location): string {
    const sParams = createSearchParams(location.search);

    let linkToShowInfo: string =
      location.pathname + '?page=' + (sParams.get('page') || '1');

    linkToShowInfo += sParams.get('search')
      ? `&search=${sParams.get('search')}`
      : '';

    if (!sParams.get('ids')) linkToShowInfo += `&ids=${ids}`;

    return linkToShowInfo;
  }

  function toCardInfo(): void {
    navigate(linkToShowInfo, { replace: false });
  }
}

export default Card;
