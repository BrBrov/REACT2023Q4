import { createSlice } from '@reduxjs/toolkit';
import { FlagsStore } from '../redux-models/store-model';
import flagsReducer from '../redux-reducers/flag-reducer';

const flagsInit: FlagsStore = {
  flags: {
    loadingSingleCard: false,
    loadingCardsInfo: false,
    loadingMainPage: false,
  },
};

const flagsSlice = createSlice({
  name: 'falgs',
  initialState: flagsInit,
  reducers: flagsReducer,
});

export default flagsSlice;
