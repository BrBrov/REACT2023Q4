import { configureStore } from '@reduxjs/toolkit';
import reducers from '../redux-reducers/reducer';

const storeApp = configureStore({
  reducer: reducers,
  devTools: true,
});

export default storeApp;
