import { createSlice } from '@reduxjs/toolkit';
import countryList from '../../utils/countryList';
import reducerCountry from './reducer';

const sliceCountry = createSlice({
  name: 'countries',
  initialState: countryList,
  reducers: { reducerCountry },
});

export default sliceCountry;
