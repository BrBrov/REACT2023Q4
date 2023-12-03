import { ReactNode, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCountryState from '../../redux/countries/getState';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formControlledSchema from '../../utils/formControlledSchema';
import FormCtrlData from '../../models/formControlledType';
import createCardRecordForCtrlForm from '../../utils/createCardRecordForCtrlForm';
import CardRecord from '../../models/CardRecord';
import cardAction from '../../redux/cards/actions';

function FormControlled(): ReactNode {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const country: Array<string> = useSelector(getCountryState);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormCtrlData>({
    resolver: yupResolver<FormCtrlData>(formControlledSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [firstStart, resetStartStatus] = useState<boolean>(true);
  const [isButton, buttonViewSet] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormCtrlData> = function (data: FormCtrlData) {
    createCardRecordForCtrlForm(data).then((record: CardRecord) => {
      dispatcher(cardAction(record));
      navigate('/');
    });
  };

  useEffect(() => {
    if (!firstStart) {
      if (!isValid) {
        buttonViewSet(true);
      } else {
        buttonViewSet(false);
      }
    }
  }, [firstStart, isValid]);

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
                autoComplete={'on'}
                {...register('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
            </div>
          </div>
          {errors.name ? (
            <span className="form_error">{errors.name.message}</span>
          ) : null}
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
              autoComplete={'on'}
              aria-invalid={errors.age ? 'true' : 'false'}
            />
          </div>
          {errors.age ? (
            <span className="form_error">{errors.age.message}</span>
          ) : null}
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
              autoComplete={'on'}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </div>
          {errors.email ? (
            <span className="form_error">{errors.email.message}</span>
          ) : null}
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
              autoComplete={'on'}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
          </div>
          {errors.password ? (
            <span className="form_error">{errors.password.message}</span>
          ) : null}
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
              autoComplete={'on'}
              aria-invalid={errors.repeatPassword ? 'true' : 'false'}
            />
          </div>
          {errors.repeatPassword ? (
            <span className="form_error">{errors.repeatPassword.message}</span>
          ) : null}
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="gender" className="form_label">
                Gender:
              </label>
            </div>
            <select
              id="gender"
              className="input_text"
              {...register('gender')}
              autoComplete={'on'}
              aria-invalid={errors.gender ? 'true' : 'false'}
            >
              <option value="">- Your gender -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {errors.gender ? (
            <span className="form_error">{errors.gender.message}</span>
          ) : null}
        </div>
        <div className="form_record">
          <div className="form_license">
            <input
              id="lincense"
              type="checkbox"
              {...register('license')}
              autoComplete={'on'}
              aria-invalid={errors.license ? 'true' : 'false'}
            />
            <label htmlFor="lincense" className="form_label">
              Accept Terms and Conditions
            </label>
          </div>
          {errors.license ? (
            <span className="form_error">{errors.license.message}</span>
          ) : null}
        </div>
        <div className="form_avatar">
          <label htmlFor="avatar" className="form_label">
            Avatar
          </label>
          <input
            id="avatar"
            type="file"
            {...register('avatar')}
            autoComplete={'on'}
            aria-invalid={errors.avatar ? 'true' : 'false'}
          />
          {errors.avatar ? (
            <span className="form_error">{errors.avatar.message}</span>
          ) : null}
        </div>
        <div className="form_record">
          <div className="form_field">
            <div className="label_wrapper">
              <label htmlFor="countries" className="form_label">
                Country
              </label>
            </div>
            <select
              id="countries"
              {...register('country')}
              aria-invalid={errors.country ? 'true' : 'false'}
              autoComplete={'on'}
            >
              <option value={''}>- Your country -</option>
              {country.map((item: string, id: number) => (
                <option key={id} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {errors.country ? (
            <span className="form_error">{errors.country.message}</span>
          ) : null}
        </div>
        <div className="button_wrapper">
          <button
            type="submit"
            className="button_controlled"
            disabled={isButton}
            onClick={() => {
              if (firstStart) resetStartStatus(false);
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <NavLink to={'/'} className="app_link controlled_text">
        Return to start page
      </NavLink>
    </div>
  );
}

export default FormControlled;
