import { Component, ReactNode } from 'react';

import './Card.scss';
import { CardProps } from '../../models/Card-model';

class Card extends Component<CardProps, Record<string, never>> {
  public static readonly defaultProps: Readonly<CardProps>;

  constructor(props: CardProps) {
    super(props);
  }
  render(): ReactNode {
    const { name, description, image_url, volume, ibu, srm, abv } = this
      .props as unknown as Readonly<CardProps>;
    return (
      <div className="card">
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
    );
  }
}

export default Card;
