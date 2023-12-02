import { boolean, number, object, ref, string } from 'yup';

const msgForEmptyField = 'Field must be filled in';

const formScheme = object().shape({
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
  password: string()
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      'Must be 1 number, 1 uppercase and 1 lowercase letter, 1 special character'
    )
    .min(6, 'Must be 6 and more character')
    .required(msgForEmptyField)
    .defined(),
  repeatPassword: string()
    .oneOf([ref('password')], 'First and second passwords is not equal')
    .required(msgForEmptyField)
    .defined(),
  gender: string().required().defined(),
  license: boolean().oneOf([true], 'You have to accept conditions'),
  country: string().required().defined(),
});

export default formScheme;
