import { ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './Cards-info.scss';
import Fallback from '../fallback/Fallback';
import CardUndefined from './CardUndefined';
import QueryParser from '../../utils/QueryParser';
import useGetSingleCardQuery from '../../redux/redux-query/useGetSingleCard';
import ResponseData from '../../models/ResponseData';

function CardsInfo(): ReactNode {
  const [sParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParams = new QueryParser(sParams);

  const { data, isLoading, isFetching } = useGetSingleCardQuery(
    queryParams.ids!
  );

  if (!queryParams.ids) return null;

  if (isLoading || isFetching) return <Fallback />;

  if (!data) return <CardUndefined prop={onClickCLose} />;

  const card = data[0]! as ResponseData;

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
            src={card.image_url ? card.image_url : './image.png'}
            alt="Image of beer"
          />
        </div>
        <div className="main__info-block">
          <span className="main__beer-name">{card.name}</span>
          <span className="main__beer-tagline">{card.tagline}</span>
          <div className="main__beer-charater">
            <span className="main__beer-alcohol">{`Alcohol: ${card.abv}%`}</span>
            <span className="main__beer-color">{`Color index: ${card.srm}`}</span>
            <span className="main__beer-bitterness">{`Bitterness: ${card.ibu}`}</span>
          </div>
          <span className="brewers_tips">{`Brewers tips: \"${card.brewers_tips}\"`}</span>
          <div className="main__beer-pairings">
            <span className="main__pairing-title">{'Food pairing:'}</span>
            {createPairing(card)}
          </div>
        </div>
      </div>
    </div>
  );

  function createPairing(card: ResponseData): Array<ReactNode> | ReactNode {
    if (!card.food_pairing || !card.food_pairing.length)
      return <span key={'no pairing'}>No food combination.</span>;

    const pairings = card.food_pairing;

    return pairings.map((item: string, id: number) => (
      <span key={id} className="main__food-pairing">
        {item}
      </span>
    ));
  }

  function createCloseLink(sParams: URLSearchParams): 0 | -1 {
    if (!sParams.get('ids')) return 0;

    return -1;
  }

  function onClickCLose(): void {
    const closeURL: 0 | -1 = createCloseLink(sParams);
    navigate(closeURL);
  }
}

export default CardsInfo;
