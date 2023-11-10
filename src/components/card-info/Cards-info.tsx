import { ReactNode, Suspense } from 'react';
import {
  Await,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import './Cards-info.scss';
import ResponseData from '../../models/ResponseData';
import Fallback from '../fallback/Fallback';

function CardsInfo(): ReactNode {
  const [sParams] = useSearchParams();
  const navigate = useNavigate();
  const { data } = useLoaderData() as { data: ResponseData | null };

  if (!sParams.get('ids')) return null;

  if (!data)
    return (
      <Suspense fallback={<Fallback />}>
        <Await resolve={data}>
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
            <div className="main__card-wrong">
              <span className="main__beer-name">
                Card was not found on the page.
              </span>
            </div>
          </div>
        </Await>
      </Suspense>
    );

  const pairings: ReactNode | Array<ReactNode> = createPairing(
    data.food_pairing
  );

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={data}>
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
                src={data.image_url ? data.image_url : './image.png'}
                alt="Image of beer"
              />
            </div>
            <div className="main__info-block">
              <span className="main__beer-name">{data.name}</span>
              <span className="main__beer-tagline">{data.tagline}</span>
              <div className="main__beer-charater">
                <span className="main__beer-alcohol">{`Alcohol: ${data.abv}%`}</span>
                <span className="main__beer-color">{`Color index: ${data.srm}`}</span>
                <span className="main__beer-bitterness">{`Bitterness: ${data.ibu}`}</span>
              </div>
              <span className="brewers_tips">{`Brewers tips: \"${data.brewers_tips}\"`}</span>
              <div className="main__beer-pairings">
                <span className="main__pairing-title">{'Food pairing:'}</span>
                {pairings}
              </div>
            </div>
          </div>
        </div>
      </Await>
    </Suspense>
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
