import { Dispatch, ReactNode, useEffect } from 'react';

import ErrorButton from '../error-button/ErrorButton';
import Pagination from '../pagination/Pagination';
import useGetAllCardsQuery from '../../redux/redux-query/useGetAllCards';
import QueryParser from '../../utils/QueryParser';
import ResponseData from '../../models/ResponseData';
import CardCreator from '../../utils/CardCreator';
import NotFound from '../not-found/Not-Found';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { actionCardsFlag } from '@/redux/redux-slices/flags-operations';
import { FlagAction } from '@/redux/redux-models/actions-model';
import { useRouter } from 'next/router';
import mainStyles from './MainComponent.module.scss';
import Header from '@/components/header/Header';
import MissingPage from '@/components/missing-page/MissingPage';

function MainComponent(): ReactNode {
  const router = useRouter();

  const queryParams = new QueryParser(router.asPath);

  const dispatchCardsInfo: Dispatch<AnyAction> = useDispatch();

  const { data, isLoading } = useGetAllCardsQuery(queryParams);

  useEffect(() => {
    const flag: FlagAction = { flag: isLoading };
    dispatchCardsInfo(actionCardsFlag(flag));
  }, [dispatchCardsInfo, isLoading]);

  const cards: Array<ReactNode> | null = createCards(
    data as Array<ResponseData> | null
  );

  return (
    <div className={mainStyles.block}>
      <div className={mainStyles.wrapper}>
        <div className={mainStyles.segment}>
          <div className={mainStyles.panel} onClick={onClickPanel}>
            {cards || (
              <div className="missing__page">
                <Header />
                <MissingPage />
                <div className="missing__error-button">
                  <ErrorButton />
                </div>
              </div>
            )}
          </div>
          <div className={mainStyles.info}></div>
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
