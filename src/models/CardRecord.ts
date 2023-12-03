import Form from './card';

interface CardRecord extends Form {
  controlled: boolean;
  newRecord: boolean;
}

export default CardRecord;
