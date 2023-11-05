import { ReactNode, Suspense } from 'react';

import './Beer.scss';
import ResponseData from './models/ResponseData';
import CardCreator from './utils/CardCreator';
import NotFound from './components/not-found/Not-Found';
import { Await, Outlet, useLoaderData } from 'react-router-dom';
import MissingPage from './components/missing-page/MissingPage';
import Header from './components/header/Header';
import ErrorButton from './components/error-button/Error-Button';
import Fallback from './components/fallback/Fallback';

function Beer(): ReactNode {
  const { data } = useLoaderData() as { data: Array<ResponseData> | null };

  if (!data)
    return (
      <div className="missing__page">
        <Header />
        <MissingPage />
        <div className="missing__error-button">
          <ErrorButton />
        </div>
      </div>
    );

  const cards: Array<ReactNode> | null = createCards(data);

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={data}>
        <div className="beer__container">
          <Outlet context={cards} />
        </div>
      </Await>
    </Suspense>
  );

  function createCards(
    data: Array<ResponseData> | null
  ): Array<ReactNode> | null {
    if (!data) return null;

    if (!data.length) return [<NotFound key={-1} />];

    return data.map((item: ResponseData) => {
      const cardCreator: CardCreator = new CardCreator(item);
      return cardCreator.getCard();
    });
  }
}

export default Beer;
