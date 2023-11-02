import { ReactNode } from 'react';

import './Main.scss';
import ErrorButton from '../error-button/Error-Button';
import { Outlet, useOutletContext } from 'react-router-dom';

function Main(): ReactNode {
  // const location = useLocation();
  // const sParams = createSearchParams(location.search);

  const cards = useOutletContext<Array<ReactNode> | null>();

  return (
    <>
      <div className="main">
        <main className="main__cards-wrapper">
          <div className="main__main-wrapper">
            <div className="main__cards-panel">{cards}</div>
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
}

export default Main;
