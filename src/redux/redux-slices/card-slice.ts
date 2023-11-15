import { createSlice } from '@reduxjs/toolkit';
import { CardStore } from '../redux-models/store-model';
import cardReducer from '../redux-reducers/card-reducer';

const cardInit: CardStore = {
  card: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState: cardInit,
  reducers: { cardReducer },
});

export default cardSlice;
