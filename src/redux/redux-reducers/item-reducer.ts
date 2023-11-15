import ActionEnum from '../redux-models/action-enum';
import { PayloadAction } from '@reduxjs/toolkit';
import { ItemsPerPageStore } from '../redux-models/store-model';
import { ItemsAction } from '../redux-models/actions-model';

function itemReducer(
  state: ItemsPerPageStore,
  action: PayloadAction<ItemsAction>
): ItemsPerPageStore {
  if (action.type === ActionEnum.items)
    return {
      ...state,
      itemsPerPage: action.payload.items,
    };

  return state;
}

export default itemReducer;
