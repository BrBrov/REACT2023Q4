import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import './Beer.scss';
import { BeerState } from './models/Beer-models';
import RequestData from './utils/RequestData';
import ResponseData from './models/ResponseData';
import CardCreator from './utils/CardCreator';
import Header from './components/header/Header';
import Main from './components/main/Main';
import NotFound from './components/not-found/Not-Found';

const fetcher: RequestData = new RequestData();
function Beer(): ReactNode {
  const [state, setState]: [BeerState, Dispatch<SetStateAction<BeerState>>] =
    useState<BeerState>({ cards: null });

  function getData(search: string | null): void {
    fetcher.getResponseData(search).then((data: Array<ResponseData>): void => {
      const cards: Array<ReactNode> | null = createCards(data);
      setState({ cards: cards });
    });
  }

  useEffect(() => getData(fetcher.getSearchString()), []);

  return (
    <>
      <div className="beer__container">
        <Header
          {...{
            search: getData,
            searchString: fetcher.getSearchString(),
          }}
        />
        <Main {...{ cards: state.cards }} />
      </div>
    </>
  );
}

function createCards(
  data: Array<ResponseData> | null
): Array<ReactNode> | null {
  if (!data) return null;

  if (!data.length) return [<NotFound key={1} />];

  return data.map((item: ResponseData) => {
    const cardCreator: CardCreator = new CardCreator(item);
    return cardCreator.getCard();
  });
}

export default Beer;
