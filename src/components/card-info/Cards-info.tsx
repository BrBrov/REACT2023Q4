import { ReactNode, useEffect } from 'react';

import style from './Cards-info.module.scss';
import Fallback from '../fallback/Fallback';
import CardUndefined from './CardUndefined';
import QueryParser from '../../utils/QueryParser';
import useGetSingleCardQuery from '../../redux/redux-query/useGetSingleCard';
import ResponseData from '../../models/ResponseData';
import { useDispatch, useSelector } from 'react-redux';
import { actionCardFlag } from '@/redux/redux-slices/flags-operations';
import { FlagAction } from '@/redux/redux-models/actions-model';
import {useRouter} from "next/router";
import StoreType from "@/redux/redux-models/wrapper-type";
import Image from "next/image";

function CardsInfo(): ReactNode {
  const router = useRouter();
  const queryParams = new QueryParser(router.asPath);
  const dispatchCardFlag = useDispatch();
  const selectorCardFlag = useSelector(
    (state: StoreType) => state.flags.flags.loadingSingleCard
  );

  const { data, isLoading, isFetching } = useGetSingleCardQuery(
    queryParams.ids!,
    { skip: !queryParams.ids }
  );

  useEffect(() => {
    const flag: FlagAction = {
      flag: isLoading,
    };
    dispatchCardFlag(actionCardFlag(flag));
  }, [dispatchCardFlag, isLoading]);

  if (!queryParams.ids) return null;

  if (selectorCardFlag || isFetching) return <Fallback />;

  if (!data) return <CardUndefined prop={onClickCLose} />;

  const card = data[0]! as ResponseData;

  return (
    <div className={style.card}>
      <div className={style.top}>
        <div className={style.close} onClick={onClickCLose}>
          <Image
            className={style.close_img}
            src={'./close.svg'}
            alt="Close card"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className={style.main__info_wrapper}>
        <div className={style.main__img_beer}>
          <img
            className={style.main__image_beer}
            src={card.image_url ? card.image_url : './image.png'}
            alt="Image of beer"
          />
        </div>
        <div className={style.main__info_block}>
          <span className={style.main__beer_name}>{card.name}</span>
          <span className={style.main__beer_tagline}>{card.tagline}</span>
          <div className={style.main__beer_charater}>
            <span className={style.main__beer_alcohol}>{`Alcohol: ${card.abv}%`}</span>
            <span className={style.main__beer_color}>{`Color index: ${card.srm}`}</span>
            <span className={style.main__beer_bitterness}>{`Bitterness: ${card.ibu}`}</span>
          </div>
          <span className={style.brewers_tips}>{`Brewers tips: \"${card.brewers_tips}\"`}</span>
          <div className={style.main__beer_pairings}>
            <span className={style.main__pairing_title}>{'Food pairing:'}</span>
            {createPairing(card)}
          </div>
        </div>
      </div>
    </div>
  );

  function createPairing(card: ResponseData): Array<ReactNode> | ReactNode {
    if (!card.food_pairing || !card.food_pairing.length)
      return <span key={'no pairing'}>No food combination.</span>;

    const pairings = card.food_pairing;

    return pairings.map((item: string, id: number) => (
      <span key={id} className={style.main__food_pairing}>
        {item}
      </span>
    ));
  }

  function onClickCLose(): void {
    router.back();
  }
}

export default CardsInfo;
