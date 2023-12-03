import ErrorRecord from './ErrorRecord';

interface Identifier {
  [key: string]: ErrorRecord | null;
}

interface ErrorFormIndicator extends Identifier {
  name: ErrorRecord | null;
  age: ErrorRecord | null;
  email: ErrorRecord | null;
  password: ErrorRecord | null;
  repeatPassword: ErrorRecord | null;
  gender: ErrorRecord | null;
  license: ErrorRecord | null;
  avatar: ErrorRecord | null;
  country: ErrorRecord | null;
}

export default ErrorFormIndicator;
