import ServerError from '../../models/ServerError';
import ResponseData from '../../models/ResponseData';

export interface SearchAction {
  search: string;
}

export interface ItemsAction {
  items: number;
}

export interface FlagAction {
  flag: boolean;
}

export interface CardsAction {
  cards: Array<ResponseData> | ServerError | null;
}

export interface CardAction {
  card: ResponseData | null;
}

export interface ViewModeAction {
  viewMode: boolean;
}
