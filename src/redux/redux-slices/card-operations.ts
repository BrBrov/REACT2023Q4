import cardSlice from './card-slice';

const { name, reducer, actions } = cardSlice;

export const nameCard = name;

export const reducerCard = reducer;

export const actionCard = actions.cardReducer;
