import { ReactNode } from 'react';

import './Main.scss';
import ErrorButton from '../error-button/Error-Button';
import {
  createSearchParams,
  Location,
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';

function Main(): ReactNode {
  const location = useLocation();
  const navigate = useNavigate();

  const hasOpenCardInfo: 0 | -1 = closeCardInfoPanel(location);

  const cards = useOutletContext<Array<ReactNode> | null>();

  return (
    <>
      <div className="main">
        <main className="main__cards-wrapper">
          <div className="main__main-wrapper">
            <div className="main__cards-panel" onClick={onClickPanel}>
              {cards}
            </div>
            <div className="main__card-info">
              <Outlet key={'card'} />
            </div>
          </div>
          <div className="main__pagination-wrapper">
            <span>Pagination</span>
          </div>
        </main>
        <ErrorButton />
      </div>
    </>
  );

  function closeCardInfoPanel(location: Location): 0 | -1 {
    const sParams = createSearchParams(location.search);
    if (!sParams.get('ids')) return 0;

    return -1;
  }

  function onClickPanel(): void {
    if (hasOpenCardInfo) navigate(hasOpenCardInfo);
  }
}

export default Main;
