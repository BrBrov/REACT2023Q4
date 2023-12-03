import FormSchemeData from './formScheme-type';

interface FormCtrlData extends Omit<FormSchemeData, 'avatar'> {
  avatar?: FileList | undefined;
}

export default FormCtrlData;
