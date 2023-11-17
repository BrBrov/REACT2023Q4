import { combineReducers } from '@reduxjs/toolkit';
import { reducerSearch } from '../redux-slices/search-operations';
import { reducerFlags } from '../redux-slices/flags-operations';
import { reducerViewMode } from '../redux-slices/view-operations';
import { reducerItems } from '../redux-slices/items-operations';
import queryApi from '../redux-query/queryAPI';

const reducers = combineReducers({
  search: reducerSearch,
  flags: reducerFlags,
  viewMode: reducerViewMode,
  itemsPerPage: reducerItems,
  [queryApi.reducerPath]: queryApi.reducer,
});
export default reducers;
