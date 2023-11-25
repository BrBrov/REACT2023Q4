import {Dispatch, ReactNode, Suspense, useEffect, useRef} from 'react';

import {useRouter} from 'next/router';
import QueryParser from '@/utils/QueryParser';
import {useDispatch, useSelector} from 'react-redux';
import {AnyAction} from '@reduxjs/toolkit';
import StoreType from '@/redux/redux-models/wrapper-type';
import {actionItems} from '@/redux/redux-slices/items-operations';
import Header from '@/components/header/Header';
import Main from '@/components/main/MainComponent';
import beer from './Beer.module.scss';
import Fallback from '@/components/fallback/Fallback';

function Beer(): ReactNode {
  const router = useRouter();
  const queryParams = new QueryParser(router.asPath);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const selectorItemPerPage = useSelector(
    (state: StoreType) => state.itemsPerPage.itemsPerPage
  );
  const selectorIsLoading: boolean = useSelector(
    (state: StoreType) => state.flags.flags.loadingMainPage
  );

  const views = useRef(
    <>
      <Header/>
      <Main/>
    </>
  );

  useEffect(() => {
    if (
      queryParams.items &&
      selectorItemPerPage !== parseInt(queryParams.items)
    ) {
      dispatch(actionItems({items: parseInt(queryParams.items)}));
    }

    views.current = selectorIsLoading ? (
      <Fallback/>
    ) : (
      <>
        <Header/>
        <Main/>
      </>
    );
  }, [dispatch, queryParams.items, selectorIsLoading, selectorItemPerPage]);

  return (
    <Suspense>
      <div className={beer.beer__container}>{views.current}</div>
    </Suspense>
  );
}

export default Beer;
