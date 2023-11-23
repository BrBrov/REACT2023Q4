import { configureStore } from '@reduxjs/toolkit';
import reducers from '../redux-reducers/reducer';
import queryApi from '@/redux/redux-query/queryAPI';
import BeerStore from '@/redux/redux-models/store-types';
import { createWrapper } from 'next-redux-wrapper';

export function buildStore() {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(queryApi.middleware);
    },
    devTools: true,
  });
}

//

const storeAppWrapper = createWrapper<BeerStore>(buildStore, { debug: true });
export default storeAppWrapper;
