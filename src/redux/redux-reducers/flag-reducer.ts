import ActionEnum from '../redux-models/action-enum';
import { FlagsStore } from '../redux-models/store-model';
import { AnyAction } from '@reduxjs/toolkit';

function flagsReducer(state: FlagsStore, action: AnyAction): FlagsStore {
  switch (action.type) {
    case ActionEnum.flagMain:
      return {
        ...state,
        flags: {
          ...state.flags,
          loadingMainPage: action.dataBoolean,
        },
      };
    case ActionEnum.flagCards:
      return {
        ...state,
        flags: {
          ...state.flags,
          loadingCardsInfo: action.dataBoolean,
        },
      };
    case ActionEnum.flagCard:
      return {
        ...state,
        flags: {
          ...state.flags,
          loadingSingleCard: action.dataBoolean,
        },
      };
    default:
      return state;
  }
}

export default flagsReducer;
