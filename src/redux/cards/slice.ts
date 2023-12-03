import { createSlice } from '@reduxjs/toolkit';
import initCardsStore from '../../utils/initCardsStore';
import cardReducer from './reducer';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initCardsStore,
  reducers: { cardReducer },
});

export default cardsSlice;
