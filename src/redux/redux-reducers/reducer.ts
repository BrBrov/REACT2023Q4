import { combineReducers } from '@reduxjs/toolkit';
import { reducerSearch } from '../redux-slices/search-operations';
import { reducerFlags } from '../redux-slices/flags-operations';
import { reducerViewMode } from '../redux-slices/view-operations';
import { reducerItems } from '../redux-slices/items-operations';
import { reducerCards } from '../redux-slices/cards-operations';
import { reducerCard } from '../redux-slices/card-operations';

const reducers = combineReducers({
  search: reducerSearch,
  flags: reducerFlags,
  viewMode: reducerViewMode,
  itemsPerPage: reducerItems,
  cards: reducerCards,
  card: reducerCard,
});
export default reducers;
