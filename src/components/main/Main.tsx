import { ReactNode } from 'react';

import './Main.scss';
import ErrorButton from '../error-button/Error-Button';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import useGetAllCardsQuery from '../../redux/redux-query/useGetAllCards';
import QueryParser from '../../utils/QueryParser';
import ResponseData from '../../models/ResponseData';
import CardCreator from '../../utils/CardCreator';
import NotFound from '../not-found/Not-Found';

function Main(): ReactNode {
  const [sParams] = useSearchParams();
  const queryParams = new QueryParser(sParams);
  const navigate = useNavigate();

  const data = useGetAllCardsQuery(queryParams)
    .data as Array<ResponseData> | null;

  const cards: Array<ReactNode> | null = createCards(data);

  return (
    <div className="main">
      <main className="main__cards-wrapper">
        <div className="main__main-wrapper">
          <div className="main__cards-panel" onClick={onClickPanel}>
            {cards}
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

  function createCards(
    data: Array<ResponseData> | null
  ): Array<ReactNode> | null {
    if (!data) return null;

    if (!data.length) return [<NotFound key={-1} />];

    return data.map((item: ResponseData) => {
      const cardCreator: CardCreator = new CardCreator(item, item.id);
      return cardCreator.getCard();
    });
  }

  function onClickPanel(): void {
    const isOpenCardsInfo: boolean = closeCardInfoPanel();
    if (isOpenCardsInfo) navigate(-1);
  }
}

export default Main;
