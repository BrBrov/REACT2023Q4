import cardsSlice from './cards-slice';

const { name, reducer, actions } = cardsSlice;

export const nameCards = name;

export const reducerCards = reducer;

export const actionCards = actions.cardsReducer;
