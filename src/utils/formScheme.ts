import { boolean, number, object, string } from 'yup';

const msgForEmptyField = 'Field must be filled in';

const formScheme = object().shape({
  name: string().required(msgForEmptyField),
  age: number().required(msgForEmptyField).positive('Age have to be positive'),
  email: string().required(msgForEmptyField).email('Entered email is wrong'),
  password: string().required(msgForEmptyField),
  repeatPassword: string().required(msgForEmptyField),
  gender: boolean().required(),
  license: boolean().required().isTrue(),
  avatar: string(),
  country: string().required(),
});

export default formScheme;
