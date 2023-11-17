import { FlagsStore } from '../redux-models/store-model';
import { PayloadAction } from '@reduxjs/toolkit';
import { FlagAction } from '../redux-models/actions-model';

function flagsMainReducer(
  state: FlagsStore,
  action: PayloadAction<FlagAction>
): FlagsStore {
  return {
    ...state,
    flags: {
      ...state.flags,
      loadingMainPage: action.payload.flag,
    },
  };
}

function flagsCardsReducer(
  state: FlagsStore,
  action: PayloadAction<FlagAction>
): FlagsStore {
  return {
    ...state,
    flags: {
      ...state.flags,
      loadingCardsInfo: action.payload.flag,
    },
  };
}

function flagsCardReducer(
  state: FlagsStore,
  action: PayloadAction<FlagAction>
): FlagsStore {
  return {
    ...state,
    flags: {
      ...state.flags,
      loadingSingleCard: action.payload.flag,
    },
  };
}

const flagsReducer = { flagsMainReducer, flagsCardsReducer, flagsCardReducer };

export default flagsReducer;
