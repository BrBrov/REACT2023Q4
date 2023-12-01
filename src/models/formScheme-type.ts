import Avatar from './avatar-model';

interface FormSchemeData {
  name: string | null;
  age: number | null;
  email: string | null;
  password: string | null;
  repeatPassword: string | null;
  gender: string;
  license: boolean;
  avatar: Avatar | null;
  country: string;
}

export default FormSchemeData;
