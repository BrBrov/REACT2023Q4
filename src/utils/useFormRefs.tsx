import { RefObject, useRef } from 'react';
import FormRefsObject from '../models/useFormRefs-model';

function useFormRefs(): FormRefsObject {
  const nameRef: RefObject<HTMLInputElement> = useRef(null);
  const ageRef: RefObject<HTMLInputElement> = useRef(null);
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);
  const repeatPasswordRef: RefObject<HTMLInputElement> = useRef(null);
  const genderRef: RefObject<HTMLSelectElement> = useRef(null);
  const licenseRef: RefObject<HTMLInputElement> = useRef(null);
  const avatarRef: RefObject<HTMLInputElement> = useRef(null);
  const countryRef: RefObject<HTMLSelectElement> = useRef(null);

  return {
    nameRef,
    ageRef,
    emailRef,
    passwordRef,
    repeatPasswordRef,
    genderRef,
    licenseRef,
    avatarRef,
    countryRef,
  };
}

export default useFormRefs;
