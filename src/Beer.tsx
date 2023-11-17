import { ReactNode } from 'react';

import './Beer.scss';
import { Outlet, useSearchParams } from 'react-router-dom';
import MissingPage from './components/missing-page/MissingPage';
import Header from './components/header/Header';
import ErrorButton from './components/error-button/Error-Button';
import Fallback from './components/fallback/Fallback';
import QueryParser from './utils/QueryParser';
import useGetAllCardsQuery from './redux/redux-query/useGetAllCards';

function Beer(): ReactNode {
  const [sParams] = useSearchParams();
  const queryParams = new QueryParser(sParams);
  const { data, isLoading, isFetching } = useGetAllCardsQuery(queryParams);

  if (isLoading || isFetching) return <Fallback />;

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

  return (
    <div className="beer__container">
      <Outlet />
    </div>
  );
}

export default Beer;
