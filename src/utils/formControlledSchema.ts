import formScheme from './formScheme';
import { mixed, ObjectSchema } from 'yup';
import FormCtrlData from '../models/formControlledType';

const formControlledSchema: ObjectSchema<FormCtrlData> = formScheme.shape({
  avatar: mixed((input): input is FileList => input instanceof FileList)
    .required('You have to load avatar')
    .test(
      'isAvatar',
      'You have to load avatar',
      function (value: FileList | undefined) {
        if (!value || !value[0]) return false;

        return true;
      }
    )
    .test(
      'isTypeImg',
      'Avatar must be png or jpeg',
      function (value: FileList | undefined): boolean {
        if (!value || !value[0]) return false;

        if (!value[0].type.match(/(png|jp?eg)/g)) return false;

        return true;
      }
    )
    .test(
      'isSizeImg',
      'Avatar must be less then 500kB',
      function (value: FileList | undefined): boolean {
        if (!value || !value[0]) return false;

        if (value[0].size > 500000) return false;

        return true;
      }
    )
    .defined(),
});

export default formControlledSchema;
