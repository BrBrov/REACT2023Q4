import FlagsModel from './flags-model';
import ResponseData from '../../models/ResponseData';
import ServerError from '../../models/ServerError';

export interface SearchStore {
  search: string;
}

export interface ItemsPerPageStore {
  itemsPerPage: number;
}

export interface ViewModeStore {
  viewMode: boolean;
}

export interface FlagsStore {
  flags: FlagsModel;
}

export interface CardsStore {
  cards: Array<ResponseData> | ServerError | null;
}

export interface CardStore {
  card: ResponseData | null;
}
