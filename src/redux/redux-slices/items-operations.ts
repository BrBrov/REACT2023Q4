import itemsSlice from './items-slice';

const { name, reducer, actions } = itemsSlice;

export const nameItems = name;

export const reducerItems = reducer;

export const actionItems = actions.itemReducer;
