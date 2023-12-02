import { number, object, string } from 'yup';
import formScheme from './formScheme';

const formUncontrolledShema = formScheme.shape({
  avatar: object({
    size: number()
      .nonNullable()
      .min(1, 'Avatar size must be more then null')
      .max(500000, 'Avatar size must be less then 500kb')
      .typeError('Avatar size is wrong')
      .required(),
    ext: string()
      .matches(
        /(png|jp?eg)/,
        'Picture must be with extension .png or .jpeg/.jpg'
      )
      .required(),
    pic: string().nonNullable().required(),
  }),
});

export default formUncontrolledShema;
