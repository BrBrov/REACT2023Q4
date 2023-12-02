import Avatar from './avatar-model';

interface FormSchemeData {
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
  license: NonNullable<boolean | undefined>;
  avatar: Avatar | null;
  country: string;
}

export default FormSchemeData;
