import FormRefsObject from '../models/useFormRefs-model';
import FormSchemeData from '../models/formScheme-type';
import Avatar from '../models/avatar-model';
import generateAvatar from './generateAvatar';

async function CreateFormObjectData(
  formData: FormRefsObject
): Promise<FormSchemeData> {
  const avatar: Avatar | null = await generateAvatar(
    formData.avatarRef.current?.files
  );
  return {
    name: formData.nameRef.current?.value,
    age: formData.ageRef.current?.value,
    email: formData.emailRef.current?.value,
    password: formData.passwordRef.current?.value,
    repeatPassword: formData.repeatPasswordRef.current?.value,
    gender: formData.genderRef.current?.value,
    license: formData.licenseRef.current?.checked,
    avatar: avatar,
    country: formData.countryRef.current?.value,
  } as unknown as FormSchemeData;
}

export default CreateFormObjectData;
