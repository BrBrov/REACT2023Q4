import cardsSlice from './slice';
import { Reducer } from '@reduxjs/toolkit';
import CardsStore from '../../models/CardsStore';

const cardReducer: Reducer<CardsStore> = cardsSlice.reducer;

export default cardReducer;
