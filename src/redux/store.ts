import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/useReducer';

const appStore = configureStore({
  reducer: {
    [countryReducer.name]: countryReducer,
  },
});

export default appStore;
