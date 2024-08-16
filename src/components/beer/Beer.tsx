import { Dispatch, lazy, ReactNode, Suspense, useEffect } from 'react';

import { useRouter } from 'next/router';
import QueryParser from '@/utils/QueryParser';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import StoreType from '@/redux/redux-models/wrapper-type';
import { actionItems } from '@/redux/redux-slices/items-operations';
import beer from './Beer.module.scss';
import Fallback from '@/components/fallback/Fallback';

const Main = lazy(() => import('@/components/main/MainComponent'));
const Header = lazy(() => import('@/components/header/Header'));

function Beer(): ReactNode {
  const router = useRouter();
  const queryParams = new QueryParser(router.asPath);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const selectorItemPerPage = useSelector(
    (state: StoreType) => state.itemsPerPage.itemsPerPage
  );

  useEffect(() => {
    if (
      queryParams.items &&
      selectorItemPerPage !== parseInt(queryParams.items)
    ) {
      dispatch(actionItems({ items: parseInt(queryParams.items) }));
    }
  }, [dispatch, queryParams.items, selectorItemPerPage]);

  return (
    <Suspense fallback={<Fallback />}>
      <div className={beer.beer__container}>
        <Header />
        <Main />
      </div>
    </Suspense>
  );
}

export default Beer;
