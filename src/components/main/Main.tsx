import { ReactNode, useContext } from 'react';

import './Main.scss';
import ErrorButton from '../error-button/Error-Button';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import ResponseData from '../../models/ResponseData';
import NotFound from '../not-found/Not-Found';
import CardCreator from '../../utils/CardCreator';
import ContextResponseData from '../../context/DataContext';
import DataContext from '../../models/DataContext-model';

function Main(): ReactNode {
  const [sParams] = useSearchParams();
  const navigate = useNavigate();

  const contextData = useContext<DataContext>(ContextResponseData);

  const cards: Array<ReactNode> | null = createCards(contextData);

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

  function createCards(contextData: DataContext): Array<ReactNode> | null {
    const data: Array<ResponseData> | null = contextData.getAllCardsData();

    if (!data) return null;

    if (!data.length) return [<NotFound key={-1} />];

    return data.map((item: ResponseData) => {
      const cardCreator: CardCreator = new CardCreator(contextData, item.id);
      return cardCreator.getCard();
    });
  }

  function onClickPanel(): void {
    const isOpenCardsInfo: boolean = closeCardInfoPanel();
    if (isOpenCardsInfo) navigate(-1);
  }
}

export default Main;
