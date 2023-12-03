import FormCtrlData from '../models/formControlledType';
import Avatar from '../models/avatar-model';
import generateAvatar from './generateAvatar';
import CardRecord from '../models/CardRecord';

async function createCardRecordForCtrlForm(
  form: FormCtrlData
): Promise<CardRecord> {
  const avatar: Avatar | null = await generateAvatar(form.avatar);

  return {
    controlled: true,
    newRecord: true,
    name: form.name,
    age: form.age,
    email: form.email,
    password: form.password,
    gender: form.gender,
    license: form.license,
    avatar: avatar!.pic,
    country: form.country,
  } as unknown as CardRecord;
}

export default createCardRecordForCtrlForm;
