import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import cardAction from './actions';
import initCardsStore from '../../utils/initCardsStore';
import CardRecord from '../../models/CardRecord';
import CardsStore from '../../models/CardsStore';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';

const cardReducer: ReducerWithInitialState<CardsStore> =
  createReducer<CardsStore>(
    initCardsStore,
    (builder: ActionReducerMapBuilder<{ cards: Array<CardRecord> }>) => {
      builder.addCase(
        cardAction,
        function (
          state: { cards: Array<CardRecord> },
          action: { payload: CardRecord }
        ) {
          return {
            cards: [...state.cards, action.payload],
          } as CardsStore;
        }
      );
    }
  );

export default cardReducer;
