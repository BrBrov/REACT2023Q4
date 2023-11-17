import { configureStore } from '@reduxjs/toolkit';
import reducers from '../redux-reducers/reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import queryApi from '../redux-query/queryAPI';

const storeApp = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(queryApi.middleware);
  },
  devTools: true,
});

setupListeners(storeApp.dispatch);
export default storeApp;
