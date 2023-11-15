import viewModeSlice from './view-slice';

const { name, reducer, actions } = viewModeSlice;

export const nameViewMode = name;

export const reducerViewMode = reducer;

export const actionViewMode = actions.viewModeReducer;
