import { ReactNode } from 'react';

import './Beer.scss';
import ResponseData from './models/ResponseData';
import CardCreator from './utils/CardCreator';
import NotFound from './components/not-found/Not-Found';
import { Outlet, useLoaderData } from 'react-router-dom';
import MissingPage from './components/missing-page/MissingPage';
import Header from './components/header/Header';
import ErrorButton from './components/error-button/Error-Button';

function Beer(): ReactNode {
  const data = useLoaderData() as Array<ResponseData> | null;

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
    <div className="beer__container">
      <Outlet context={cards} />
    </div>
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
