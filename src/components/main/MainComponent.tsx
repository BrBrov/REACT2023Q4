import { Dispatch, ReactNode, useEffect, useState } from 'react';

import ErrorButton from '../error-button/ErrorButton';
import Pagination from '../pagination/Pagination';
import useGetAllCardsQuery from '../../redux/redux-query/useGetAllCards';
import QueryParser from '../../utils/QueryParser';
import ResponseData from '../../models/ResponseData';
import CardCreator from '../../utils/CardCreator';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { actionCardsFlag } from '@/redux/redux-slices/flags-operations';
import { FlagAction } from '@/redux/redux-models/actions-model';
import { useRouter } from 'next/router';
import mainStyles from './MainComponent.module.scss';
import Header from '@/components/header/Header';
import MissingPage from '@/components/missing-page/MissingPage';
import CardsInfo from '@/components/card-info/Cards-info';
import NotFound from '@/components/not-found/Not-Found';
import FallbackAnimation from '@/components/fallback/FallbackAnimation';

function MainComponent(): ReactNode {
  const [mode, setMode] = useState<boolean>(false);
  const router = useRouter();

  const queryParams = new QueryParser(router.asPath);

  const dispatchCardsInfo: Dispatch<AnyAction> = useDispatch();

  const { data, isFetching } = useGetAllCardsQuery(queryParams);

  useEffect(() => {
    const flag: FlagAction = { flag: isFetching };
    dispatchCardsInfo(actionCardsFlag(flag));
    if (queryParams.items) {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [dispatchCardsInfo, isFetching, queryParams.items]);

  return isFetching ? (
    <div className={mainStyles.block}>
      <FallbackAnimation />
    </div>
  ) : (
    <div className={mainStyles.block}>
      <div className={mainStyles.wrapper}>
        <div className={mainStyles.segment}>
          <div className={mainStyles.panel} onClick={onClickPanel}>
            {createCards(data as Array<ResponseData> | null) || (
              <div className="missing__page">
                <Header />
                <MissingPage />
                <div className="missing__error-button">
                  <ErrorButton />
                </div>
              </div>
            )}
          </div>
          <div className={mainStyles.info}>{mode ? <CardsInfo /> : null}</div>
        </div>
        <Pagination />
      </div>
      <ErrorButton />
    </div>
  );

  function closeCardInfoPanel(): boolean {
    return !!queryParams.ids;
  }

  function createCards(
    data: Array<ResponseData> | null
  ): Array<ReactNode> | null {
    if (!data) return null;

    if (!data.length) return [<NotFound key={-1} />];

    return data.map((item: ResponseData) => {
      const cardCreator: CardCreator = new CardCreator(item, item.id);
      return cardCreator.getCard();
    });
  }

  function onClickPanel(): void {
    const isOpenCardsInfo: boolean = closeCardInfoPanel();
    if (isOpenCardsInfo) router.back();
  }
}

export default MainComponent;
