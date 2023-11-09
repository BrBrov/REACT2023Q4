import { ReactNode, useState } from 'react';

import './Beer.scss';
import ResponseData from './models/ResponseData';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import MissingPage from './components/missing-page/MissingPage';
import Header from './components/header/Header';
import ErrorButton from './components/error-button/Error-Button';
import DataContext from './models/DataContext-model';
import ContextResponseData from './context/DataContext';
import ServerError from './models/ServerError';
import Fallback from './components/fallback/Fallback';

function Beer(): ReactNode {
  const ContextData = new DataContext();
  const navigator = useNavigation();
  const [ready, setReady] = useState(navigator.state);

  if (ready !== navigator.state) {
    setReady(navigator.state);
  }

  const { data } = useLoaderData() as {
    data: ResponseData[] | ServerError | null;
  };

  if (ready === 'loading') return <Fallback />;

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

  if ('statusCode' in data) {
    const error = new Error(data.message);
    error.name = data.error;
    error.cause = data.statusCode;
    throw error;
  }

  ContextData.setCardsData(data);

  return (
    <div className="beer__container">
      <ContextResponseData.Provider value={ContextData}>
        <Outlet />
      </ContextResponseData.Provider>
    </div>
  );
}

export default Beer;
