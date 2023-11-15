import flagsSlice from './flags-slice';

const { name, reducer, actions } = flagsSlice;

export const nameFlags = name;

export const reducerFlags = reducer;

export const actionFlags = actions.flagsReducer;
