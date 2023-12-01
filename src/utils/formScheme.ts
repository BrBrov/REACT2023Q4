import { boolean, number, object, ObjectSchema, ref, string } from 'yup';

import FormSchemeData from '../models/formScheme-type';

const msgForEmptyField = 'Field must be filled in';

const formScheme: ObjectSchema<FormSchemeData> = object().shape({
  name: string()
    .matches(/^[A-Z]/, 'Name must be start from upper case letter')
    .required(msgForEmptyField)
    .defined(),
  age: number()
    .typeError('Age must be a number')
    .required(msgForEmptyField)
    .positive('Age have to be more then null')
    .defined(),
  email: string()
    .required(msgForEmptyField)
    .email('Entered email is wrong')
    .defined(),
  password: string().required(msgForEmptyField).defined(),
  repeatPassword: string()
    .oneOf([ref('password')], 'First and second passwords is not equal')
    .required(msgForEmptyField)
    .defined(),
  gender: string().required().defined(),
  license: boolean().required().defined(),
  avatar: object({
    size: number()
      .nonNullable()
      .min(1, 'Avatar size must be more then null')
      .max(500000, 'Avatar size must be less then 500kb')
      .typeError('Avatar size is wrong')
      .required(),
    ext: string()
      .matches(
        /(png|jp?eg)/,
        'Picture must be with extension .png or .jpeg/.jpg'
      )
      .required(),
    pic: string().nonNullable().required(),
  }),
  country: string().required().defined(),
});

export default formScheme;
