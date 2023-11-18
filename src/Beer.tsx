import { Dispatch, ReactNode, useEffect } from 'react';

import './Beer.scss';
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import MissingPage from './components/missing-page/MissingPage';
import Header from './components/header/Header';
import ErrorButton from './components/error-button/Error-Button';
import Fallback from './components/fallback/Fallback';
import QueryParser from './utils/QueryParser';
import useGetAllCardsQuery from './redux/redux-query/useGetAllCards';
import { useDispatch, useSelector } from 'react-redux';
import { actionMainFlag } from './redux/redux-slices/flags-operations';
import { AnyAction } from '@reduxjs/toolkit';
import { FlagAction } from './redux/redux-models/actions-model';
import BeerStore from './redux/redux-models/store-types';

function Beer(): ReactNode {
  const [sParams] = useSearchParams();
  const queryParams = new QueryParser(sParams);
  const dispatchIsLoading: Dispatch<AnyAction> = useDispatch();
  const selectorIsLoading: boolean = useSelector(
    (state: BeerStore) => state.flags.flags.loadingMainPage
  );
  const { data, isLoading, isFetching } = useGetAllCardsQuery(queryParams);

  useEffect(() => {
    const flagData: FlagAction = { flag: isLoading };
    dispatchIsLoading(actionMainFlag(flagData));
  }, [dispatchIsLoading, isLoading, selectorIsLoading]);

  if (selectorIsLoading || isFetching) return <Fallback />;

  const answer: ReactNode | null = checkQueryParams(queryParams);

  if (answer) return answer;

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

  function checkQueryParams(queryParser: QueryParser): ReactNode {
    if (!queryParser.page || !queryParser.items) {
      let url = '?page=';
      url += queryParser.page ? queryParser.page : 1;
      url += '&items=';
      url += queryParser.items ? queryParser.items : 6;
      url + queryParser.search ? `&search=${queryParser.search}` : '';

      return <Navigate to={url} replace={false}></Navigate>;
    }

    return null;
  }
}

export default Beer;
