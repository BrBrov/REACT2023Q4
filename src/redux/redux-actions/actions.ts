import ActionEnum from '../redux-models/action-enum';
import ResponseData from '../../models/ResponseData';
import ServerError from '../../models/ServerError';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  CardAction,
  CardsAction,
  FlagAction,
  ItemsAction,
  SearchAction,
  ViewModeAction,
} from '../redux-models/actions-model';

export function searchToStore(
  searchString: string
): PayloadAction<SearchAction> {
  return {
    type: ActionEnum.search,
    payload: { search: searchString },
  };
}

export function itemsToStore(countItems: number): PayloadAction<ItemsAction> {
  return {
    type: ActionEnum.items,
    payload: { items: countItems },
  };
}

export function flagMainToStore(value: boolean): PayloadAction<FlagAction> {
  return {
    type: ActionEnum.flagMain,
    payload: { flag: value },
  };
}

export function flagCardsToStore(value: boolean): PayloadAction<FlagAction> {
  return {
    type: ActionEnum.flagCards,
    payload: { flag: value },
  };
}

export function flagCardToStore(value: boolean): PayloadAction<FlagAction> {
  return {
    type: ActionEnum.flagCard,
    payload: { flag: value },
  };
}

export function cardsToStore(
  data: Array<ResponseData> | ServerError | null
): PayloadAction<CardsAction> {
  return {
    type: ActionEnum.data,
    payload: { cards: data },
  };
}

export function cardToStore(
  card: ResponseData | null
): PayloadAction<CardAction> {
  return {
    type: ActionEnum.card,
    payload: { card: card },
  };
}

export function viewModeToStore(mode: boolean): PayloadAction<ViewModeAction> {
  return {
    type: ActionEnum.mode,
    payload: { viewMode: mode },
  };
}
