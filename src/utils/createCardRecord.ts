import FormSchemeData from '../models/formScheme-type';
import CardRecord from '../models/CardRecord';

function createCardRecord(form: FormSchemeData): CardRecord {
  return <CardRecord>{
    controlled: false,
    license: form.license,
    age: form.age!,
    country: form.country,
    email: form.country,
    gender: form.gender,
    name: form.name!,
    password: form.password!,
    picture: <string>form.avatar?.pic,
  };
}

export default createCardRecord;
