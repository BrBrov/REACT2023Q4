import StoreType from '../store-type';

function getCountryState(state: StoreType) {
  return state.reducer;
}

export default getCountryState;
