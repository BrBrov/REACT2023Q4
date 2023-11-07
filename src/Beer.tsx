import React, { ReactNode, useContext } from 'react';

import './Beer.scss';
import ResponseData from './models/ResponseData';
import { Outlet, useLoaderData } from 'react-router-dom';
import MissingPage from './components/missing-page/MissingPage';
import Header from './components/header/Header';
import ErrorButton from './components/error-button/Error-Button';
import DataContext from './models/DataContext-model';
import ContextResponseData from './context/DataContext';

function Beer(): ReactNode {
  const ContextData = useContext<DataContext>(ContextResponseData);
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
