import { ReactNode } from 'react';

import './Main.scss';
import ErrorButton from '../error-button/Error-Button';
import { useOutletContext } from 'react-router-dom';

function Main(): ReactNode {
  const cards = useOutletContext<Array<ReactNode | null>>();

  return (
    <>
      <div className="main">
        <main className="main__cards-wrapper">{cards}</main>
        <ErrorButton />
      </div>
    </>
  );
}

export default Main;
