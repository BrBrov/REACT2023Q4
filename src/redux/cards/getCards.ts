import StoreType from '../store-type';
import CardRecord from '../../models/CardRecord';

function getCards(state: StoreType): Array<CardRecord> {
  return state.cardReducer.cards;
}

export default getCards;
