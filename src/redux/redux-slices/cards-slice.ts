import { createSlice } from '@reduxjs/toolkit';
import { CardsStore } from '../redux-models/store-model';
import cardsReducer from '../redux-reducers/cards-reducer';

const cardsInit: CardsStore = {
  cards: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInit,
  reducers: { cardsReducer },
});

export default cardsSlice;
