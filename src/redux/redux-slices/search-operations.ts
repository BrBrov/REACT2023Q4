import searchSlice from './search-slice';

const { name, reducer, actions } = searchSlice;

export const nameSearch = name;

export const reducerSearch = reducer;

export const actionSearch = actions.search;
