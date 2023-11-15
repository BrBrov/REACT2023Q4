import ActionEnum from '../redux-models/action-enum';
import { PayloadAction } from '@reduxjs/toolkit';
import { SearchStore } from '../redux-models/store-model';
import { SearchAction } from '../redux-models/actions-model';

function searchReducer(
  state: SearchStore,
  action: PayloadAction<SearchAction>
): SearchStore {
  if (action.type === ActionEnum.search)
    return {
      ...state,
      search: action.payload.search,
    };

  return state;
}

export default searchReducer;
