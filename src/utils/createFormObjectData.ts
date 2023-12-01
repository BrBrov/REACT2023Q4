import FormRefsObject from '../models/useFormRefs-model';
import FormSchemeData from '../models/formScheme-type';
import Avatar from '../models/avatar-model';

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

function generateAvatar(
  obj: FileList | null | undefined
): Promise<Avatar | null> {
  return new Promise((resolve) => {
    if (!obj || !obj.length) return resolve(null);

    const file: File = obj[0];

    const avatarObj: Avatar = {
      size: file.size,
      ext: file.type,
      pic: '',
    };

    const reader = new FileReader();

    reader.onloadend = (res: ProgressEvent<FileReader>) => {
      avatarObj.pic = res.target!.result ? <string>res.target!.result : null;

      return resolve(avatarObj);
    };

    reader.readAsDataURL(file);
  });
}

export default CreateFormObjectData;
