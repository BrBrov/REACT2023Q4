import ActionEnum from '../redux-models/action-enum';
import { CardsStore } from '../redux-models/store-model';
import { PayloadAction } from '@reduxjs/toolkit';
import { CardsAction } from '../redux-models/actions-model';

function cardsReducer(
  state: CardsStore,
  action: PayloadAction<CardsAction>
): CardsStore {
  if (action.type === ActionEnum.data)
    return {
      ...state,
      cards: action.payload.cards,
    };

  return state;
}

export default cardsReducer;
