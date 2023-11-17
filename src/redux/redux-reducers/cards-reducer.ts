import { CardsStore } from '../redux-models/store-model';
import { PayloadAction } from '@reduxjs/toolkit';
import { CardsAction } from '../redux-models/actions-model';

function cardsReducer(
  state: CardsStore,
  action: PayloadAction<CardsAction>
): CardsStore {
  console.log('action into reducer ->', action);
  return {
    ...state,
    cards: action.payload.cards,
  };
}

export default cardsReducer;
