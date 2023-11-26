import BeerStore from '@/redux/redux-models/store-types';

type StoreType = ReturnType<BeerStore['getState']>;

export default StoreType;
