import { PayloadAction } from '@reduxjs/toolkit';
import { ItemsPerPageStore } from '../redux-models/store-model';
import { ItemsAction } from '../redux-models/actions-model';

function itemReducer(
  state: ItemsPerPageStore,
  action: PayloadAction<ItemsAction>
): ItemsPerPageStore {
  return {
    ...state,
    itemsPerPage: action.payload.items,
  };
}

export default itemReducer;
