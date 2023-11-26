import ActionEnum from '../redux-models/action-enum';
import { PayloadAction } from '@reduxjs/toolkit';
import {
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

export function viewModeToStore(mode: boolean): PayloadAction<ViewModeAction> {
  return {
    type: ActionEnum.mode,
    payload: { viewMode: mode },
  };
}
