import { ViewModeStore } from '../redux-models/store-model';
import ActionEnum from '../redux-models/action-enum';
import { PayloadAction } from '@reduxjs/toolkit';
import { ViewModeAction } from '../redux-models/actions-model';

function viewModeReducer(
  state: ViewModeStore,
  action: PayloadAction<ViewModeAction>
): ViewModeStore {
  if (action.type === ActionEnum.mode)
    return {
      ...state,
      viewMode: action.payload.viewMode,
    };

  return state;
}

export default viewModeReducer;
