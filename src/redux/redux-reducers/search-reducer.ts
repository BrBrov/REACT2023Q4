import { PayloadAction } from '@reduxjs/toolkit';
import { SearchStore } from '../redux-models/store-model';
import { SearchAction } from '../redux-models/actions-model';

function searchReducer(
  state: SearchStore,
  action: PayloadAction<SearchAction>
): SearchStore {
  return {
    ...state,
    search: action.payload.search,
  };
}

export default searchReducer;
