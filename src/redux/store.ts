import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/useReducer';
import cardReducer from './cards/reducer';

const appStore = configureStore({
  reducer: { countryReducer, cardReducer },
});

export default appStore;
