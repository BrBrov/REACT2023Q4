import appStore from './store';

type StoreType = ReturnType<typeof appStore.getState>;

export default StoreType;
