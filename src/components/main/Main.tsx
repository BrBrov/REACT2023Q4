import { ReactNode } from 'react';

import './Main.scss';
import ErrorButton from '../error-button/Error-Button';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/Pagination';

function Main(): ReactNode {
  const [sParams] = useSearchParams();
  const navigate = useNavigate();

  // const cards: Array<ReactNode> | null = createCards(contextData);

  return (
    <div className="main">
      <main className="main__cards-wrapper">
        <div className="main__main-wrapper">
          <div className="main__cards-panel" onClick={onClickPanel}>
            Here will be cards.
          </div>
          <div className="main__card-info">
            <Outlet />
          </div>
        </div>
        <Pagination />
      </main>
      <ErrorButton />
    </div>
  );

  function closeCardInfoPanel(): boolean {
    return !!sParams.get('ids');
  }
  // TODO must be used
  // function createCards(
  //   data: Array<ResponseData> | null
  // ): Array<ReactNode> | null {
  //   if (!data) return null;
  //
  //   if (!data.length) return [<NotFound key={-1} />];
  //
  //   return data.map((item: ResponseData) => {
  //     const cardCreator: CardCreator = new CardCreator(data, item.id);
  //     return cardCreator.getCard();
  //   });
  // }

  function onClickPanel(): void {
    const isOpenCardsInfo: boolean = closeCardInfoPanel();
    if (isOpenCardsInfo) navigate(-1);
  }
}

export default Main;
