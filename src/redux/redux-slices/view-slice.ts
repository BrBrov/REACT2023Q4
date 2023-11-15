import { createSlice } from '@reduxjs/toolkit';
import { ViewModeStore } from '../redux-models/store-model';
import viewModeReducer from '../redux-reducers/view-reducer';

const viewModeInit: ViewModeStore = {
  viewMode: false,
};

const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState: viewModeInit,
  reducers: { viewModeReducer },
});

export default viewModeSlice;
