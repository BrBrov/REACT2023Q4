import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import countryList from '../../utils/countryList';
import countryAction from './actions';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';

const reducerCountry: ReducerWithInitialState<Array<string>> = createReducer<
  Array<string>
>(countryList, (builder: ActionReducerMapBuilder<Array<string>>) => {
  builder.addCase(countryAction, (state: Array<string>) => state);
});

export default reducerCountry;
