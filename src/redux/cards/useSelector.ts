import cardsSlice from './slice';
import CardsStore from '../../models/CardsStore';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';
import { CaseReducerActions } from '@reduxjs/toolkit';

const cardsAction: CaseReducerActions<
  { cardReducer: ReducerWithInitialState<CardsStore> },
  'cards'
> = cardsSlice.actions;

export default cardsAction;
