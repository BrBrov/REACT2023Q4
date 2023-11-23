import { Dispatch, ReactNode, useEffect } from 'react';

import { useRouter } from 'next/router';
import QueryParser from '@/utils/QueryParser';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import StoreType from '@/redux/redux-models/wrapper-type';
import { actionItems } from '@/redux/redux-slices/items-operations';
import { actionMainFlag } from '@/redux/redux-slices/flags-operations';
import { FlagAction } from '@/redux/redux-models/actions-model';
import useGetAllCardsQuery from '@/redux/redux-query/useGetAllCards';
import Fallback from '@/components/fallback/Fallback';
import Header from '@/components/header/Header';
import MissingPage from '@/components/missing-page/MissingPage';
import ErrorButton from '@/components/error-button/Error-Button';

function Beer(): ReactNode {
  const router = useRouter();
  const queryParams = new QueryParser(router.asPath);
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const selectorIsLoading: boolean = useSelector(
    (state: StoreType) => state.flags.flags.loadingMainPage
  );
  const selectorItemPerPage = useSelector(
    (state: StoreType) => state.itemsPerPage.itemsPerPage
  );

  const { data, isLoading, isFetching } = useGetAllCardsQuery(queryParams);

  useEffect(() => {
    const flagData: FlagAction = { flag: isLoading };
    dispatch(actionMainFlag(flagData));
    if (
      queryParams.items &&
      selectorItemPerPage !== parseInt(queryParams.items)
    ) {
      dispatch(actionItems({ items: parseInt(queryParams.items) }));
    }
  }, [
    dispatch,
    isLoading,
    queryParams.items,
    selectorIsLoading,
    selectorItemPerPage,
  ]);

  if (selectorIsLoading || isFetching) return <Fallback />;

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

  return <div className="beer__container"></div>;
}

export default Beer;
