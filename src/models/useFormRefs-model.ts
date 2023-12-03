import { RefObject } from 'react';

interface FormRefsObject {
  nameRef: RefObject<HTMLInputElement>;
  ageRef: RefObject<HTMLInputElement>;
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
  repeatPasswordRef: RefObject<HTMLInputElement>;
  genderRef: RefObject<HTMLSelectElement>;
  licenseRef: RefObject<HTMLInputElement>;
  avatarRef: RefObject<HTMLInputElement>;
  countryRef: RefObject<HTMLSelectElement>;
}

export default FormRefsObject;
