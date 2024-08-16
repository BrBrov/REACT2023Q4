import { createSlice } from '@reduxjs/toolkit';
import { ItemsPerPageStore } from '../redux-models/store-model';
import itemReducer from '../redux-reducers/item-reducer';

const itemsPerPageInit: ItemsPerPageStore = {
  itemsPerPage: 6,
};

const itemsSlice = createSlice({
  name: 'itemsPerPage',
  initialState: itemsPerPageInit,
  reducers: { itemReducer },
});

export default itemsSlice;
