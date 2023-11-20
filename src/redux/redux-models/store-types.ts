import storeApp from '../redux-store/store';

type BeerStore = ReturnType<typeof storeApp.getState>;

export default BeerStore;
