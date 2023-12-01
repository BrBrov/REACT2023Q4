import { ValidationError } from 'yup';
import ErrorFormIndicator from '../models/ErrorFormIndicator';
import ErrorRecord from '../models/ErrorRecord';

function createFormErrorStructure(errors: Array<ValidationError> | null) {
  const errorStructure: ErrorFormIndicator = {
    name: null,
    age: null,
    email: null,
    password: null,
    repeatPassword: null,
    gender: null,
    license: null,
    avatar: null,
    country: null,
  };

  if (!errors) return errorStructure;

  errors.forEach((err: ValidationError) => {
    if (err.path) {
      errorStructure[`${err.path}`] = new ErrorRecord(err);
    }
  });

  return errorStructure;
}

export default createFormErrorStructure;
