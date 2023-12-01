import StoreType from '../store-type';

function getCountryState(state: StoreType): Array<string> {
  return state.countryReducer;
}

export default getCountryState;
