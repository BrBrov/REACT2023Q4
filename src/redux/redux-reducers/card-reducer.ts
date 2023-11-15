import ActionEnum from '../redux-models/action-enum';
import { CardStore } from '../redux-models/store-model';
import { PayloadAction } from '@reduxjs/toolkit';
import { CardAction } from '../redux-models/actions-model';

function cardReducer(
  state: CardStore,
  action: PayloadAction<CardAction>
): CardStore {
  if (action.type === ActionEnum.card)
    return {
      ...state,
      card: action.payload.card,
    };

  return state;
}

export default cardReducer;
