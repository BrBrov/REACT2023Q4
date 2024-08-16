import flagsSlice from './flags-slice';

const { name, reducer, actions } = flagsSlice;

export const nameFlags = name;

export const reducerFlags = reducer;

export const actionMainFlag = actions.flagsMainReducer;

export const actionCardsFlag = actions.flagsCardsReducer;

export const actionCardFlag = actions.flagsCardReducer;
