import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getCountryState from '../../redux/countries/getState';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formControlledSchema from '../../utils/formControlledSchema';
import FormCtrlData from '../../models/formControlledType';

function FormControlled(): ReactNode {
  const country: Array<string> = useSelector(getCountryState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCtrlData>({
    resolver: yupResolver<FormCtrlData>(formControlledSchema),
  });

  console.log('Error -> \n', errors);
  const onSubmit: SubmitHandler<FormCtrlData> = (data) =>
    console.log(data.avatar);
  return (
    <div className="form_wrapper">
      <form action="#" className="form_style" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="name" className="form_label">
                Name:
              </label>
            </div>
            <div className="input_wrapper">
              <input
                id="name"
                className="input_text"
                type="text"
                {...register('name')}
              />
            </div>
          </div>
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="age" className="form_label">
                Age:
              </label>
            </div>
            <input
              id="age"
              className="input_text"
              type="number"
              {...register('age')}
            />
          </div>
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="email" className="form_label">
                Email:
              </label>
            </div>
            <input
              id="email"
              className="input_text"
              type="text"
              {...register('email')}
            />
          </div>
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="password" className="form_label">
                Password:
              </label>
            </div>
            <input
              id="password"
              className="input_text"
              type="password"
              {...register('password')}
            />
          </div>
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="password_repeat" className="form_label">
                Password repeat:
              </label>
            </div>
            <input
              id="password_repeat"
              className="input_text"
              type="password"
              {...register('repeatPassword')}
            />
          </div>
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="gender" className="form_label">
                Gender:
              </label>
            </div>
            <select id="gender" className="input_text" {...register('gender')}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="form_record">
          <div className="form_license">
            <input id="lincense" type="checkbox" {...register('license')} />
            <label htmlFor="lincense" className="form_label">
              Accept Terms and Conditions
            </label>
          </div>
        </div>
        <div className="form_avatar">
          <label htmlFor="avatar" className="form_label">
            Avatar
          </label>
          <input
            id="avatar"
            type="file"
            {...register('avatar')}
            accept="image/png, image/jpeg"
          />
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="countries" className="form_label">
                Country
              </label>
            </div>
            <select id="countries" {...register('country')}>
              {country.map((item: string, id: number) => (
                <option key={id} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="button_wrapper">
          <button type="submit" className="button_uncontrolled">
            Submit
          </button>
        </div>
      </form>
      <NavLink to={'/'} className="app_link uncontrolled_text">
        Return to start page
      </NavLink>
    </div>
  );
}

export default FormControlled;
