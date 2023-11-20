import FlagsModel from './flags-model';

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
