import { createSlice } from '@reduxjs/toolkit';
import searchReducer from '../redux-reducers/search-reducer';
import { SearchStore } from '../redux-models/store-model';

const initSearch: SearchStore = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initSearch,
  reducers: { search: searchReducer },
});

export default searchSlice;
