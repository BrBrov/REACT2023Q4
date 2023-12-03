import FormSchemeData from '../models/formScheme-type';
import CardRecord from '../models/CardRecord';

function createCardRecord(form: FormSchemeData): CardRecord {
  return {
    controlled: false,
    license: form.license,
    age: form.age!,
    country: form.country,
    email: form.country,
    gender: form.gender,
    name: form.name!,
    password: form.password!,
    avatar: <string>form.avatar?.pic,
  } as unknown as CardRecord;
}

export default createCardRecord;
