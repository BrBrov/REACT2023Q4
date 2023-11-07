import { ReactNode, useContext } from 'react';

import './Main.scss';
import ErrorButton from '../error-button/Error-Button';
import { Outlet } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import ResponseData from '../../models/ResponseData';
import NotFound from '../not-found/Not-Found';
import CardCreator from '../../utils/CardCreator';
import ContextResponseData from '../../context/DataContext';
import DataContext from '../../models/DataContext-model';

function Main(): ReactNode {
  //TODO
  // const [sParams] = useSearchParams();

  // const hasOpenCardInfo: boolean = closeCardInfoPanel(sParams);

  const contextData = useContext<DataContext>(ContextResponseData);

  const cards = createCards(contextData.getAllCardsData());

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

  //TODO
  // function closeCardInfoPanel(sParams: URLSearchParams): boolean {
  //   return !sParams.get('ids');
  // }

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

  function onClickPanel(): void {}
}

export default Main;
