import { ReactNode } from 'react';
import {
  createSearchParams,
  Location,
  useLoaderData,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import './Cards-info.scss';
import ResponseData from '../../models/ResponseData';

function CardsInfo(): ReactNode {
  const location = useLocation();
  const navigate = useNavigate();

  const closeURL: 0 | -1 = createCloseLink(location);

  const data = useLoaderData() as Array<ResponseData> | null;

  if (!data) return null;

  const beer = data[0];

  const pairings = createPairing(beer.food_pairing);

  return (
    <div className="main__single-card">
      <div className="main__close-wrapper">
        <div className="main__close-img" onClick={onClickCLose}>
          <img
            className="main__close-image"
            src={'./close.svg'}
            alt="Close card"
          />
        </div>
      </div>
      <div className="main__info-wrapper">
        <div className="main__img-beer">
          <img
            className="main__image-beer"
            src={beer.image_url ? beer.image_url : './image.png'}
            alt="Image of beer"
          />
        </div>
        <div className="main__info-block">
          <span className="main__beer-name">{beer.name}</span>
          <span className="main__beer-tagline">{beer.tagline}</span>
          <div className="main__beer-charater">
            <span className="main__beer-alcohol">{`Alcohol: ${beer.abv}%`}</span>
            <span className="main__beer-color">{`Color index: ${beer.srm}`}</span>
            <span className="main__beer-bitterness">{`Bitterness: ${beer.ibu}`}</span>
          </div>
          <span className="brewers_tips">{`Brewers tips: \"${beer.brewers_tips}\"`}</span>
          <div className="main__beer-pairings">
            <span className="main__pairing-title">{'Food pairing:'}</span>
            {pairings}
          </div>
        </div>
      </div>
    </div>
  );

  function createPairing(
    pairings: Array<string>
  ): Array<ReactNode> | ReactNode {
    if (!pairings || !pairings.length)
      return <span key={'no pairing'}>No food combination.</span>;
    return pairings.map((item: string, id: number) => (
      <span key={id} className="main__food-pairing">
        {item}
      </span>
    ));
  }

  function createCloseLink(location: Location): 0 | -1 {
    const sParams = createSearchParams(location.search);

    if (!sParams.get('ids')) return 0;

    return -1;
  }

  function onClickCLose(): void {
    navigate(closeURL);
  }
}

export default CardsInfo;
