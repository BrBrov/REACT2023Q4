import { ReactNode, SyntheticEvent, useState } from 'react';
import './../../styles/formStyle.scss';
import { useSelector } from 'react-redux';
import getCountryState from '../../redux/countries/getState';
import useFormRefs from '../FormControlled/useFormRefs';
import FormRefsObject from '../../models/useFormRefs-model';
import FormSchemeData from '../../models/formScheme-type';
import CreateFormObjectData from '../../utils/createFormObjectData';
import formScheme from '../../utils/formScheme';
import { ValidationError } from 'yup';
import ErrorFormIndicator from '../../models/ErrorFormIndicator';
import createFormErrorStructure from '../../utils/formErrorStructure';

function FormUncontrolled(): ReactNode {
  const formObject: FormRefsObject = useFormRefs();

  const country: Array<string> = useSelector(getCountryState);

  const [errors, setErrors] = useState<ErrorFormIndicator>(
    createFormErrorStructure(null)
  );

  return (
    <div className="form_wrapper">
      <form action="#" onSubmit={handlerSubmit} className="form_style">
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
                ref={formObject.nameRef}
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
              ref={formObject.ageRef}
            />
          </div>
          {errors.age?.status ? (
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
              ref={formObject.emailRef}
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
              ref={formObject.passwordRef}
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
              ref={formObject.repeatPasswordRef}
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
              ref={formObject.genderRef}
            >
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
            <input id="lincense" type="checkbox" ref={formObject.licenseRef} />
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
            name="file"
            ref={formObject.avatarRef}
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
            <select id="countries" ref={formObject.countryRef}>
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
          <button type="submit" className="button_uncontrolled">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  async function handlerSubmit(e: SyntheticEvent): Promise<void> {
    e.preventDefault();

    const FormDataObj: FormSchemeData = await CreateFormObjectData(formObject);

    formScheme
      .validate(FormDataObj, { abortEarly: false })
      .then(() => {
        setErrors(createFormErrorStructure(null));
      })
      .catch((err: ValidationError) => {
        const errStruct = createFormErrorStructure(err.inner);
        setErrors(errStruct);
      });
  }
}

export default FormUncontrolled;
