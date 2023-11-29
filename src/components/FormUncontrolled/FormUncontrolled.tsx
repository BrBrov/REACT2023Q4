import { ReactNode, SyntheticEvent } from 'react';
import './../../styles/formStyle.scss';
import { useSelector } from 'react-redux';
import getCountryState from '../../redux/countries/getState';
import useFormRefs from '../FormControlled/useFormRefs';
import FormRefsObject from '../../models/useFormRefs-model';

function FormUncontrolled(): ReactNode {
  const {
    nameRef,
    ageRef,
    emailRef,
    passwordRef,
    repeatPasswordRef,
    genderRef,
    licenseRef,
    avatarRef,
    countryRef,
  }: FormRefsObject = useFormRefs();

  const country: Array<string> = useSelector(getCountryState);

  return (
    <div className="form_wrapper">
      <form action="#" onSubmit={handlerSubmit} className="form_style">
        <div className="form_record">
          <label htmlFor="name" className="form_label">
            Name:
          </label>
          <input id="name" type="text" ref={nameRef} />
        </div>
        <div className="form_record">
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" ref={ageRef} />
        </div>
        <div className="form_record">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div className="form_record">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <div className="form_record">
          <label htmlFor="password_repeat">Password repeat:</label>
          <input id="password_repeat" type="password" ref={repeatPasswordRef} />
        </div>
        <div className="form_record">
          <label htmlFor="gender">Gender:</label>
          <input id="gender" type="checkbox" ref={genderRef} />
        </div>
        <div className="form_record">
          <label htmlFor="lincense">Accept Terms and Conditions</label>
          <input id="lincense" type="checkbox" ref={licenseRef} />
        </div>
        <div className="form_record">
          <label htmlFor="avatar">Avatar</label>
          <input id="avatar" type="file" ref={avatarRef} />
        </div>
        <div className="form_record">
          <label htmlFor="countries">Country</label>
          <select id="countries" ref={countryRef}>
            {country.map((item: string, id: number) => (
              <option key={id} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="button_wrapper">
          <button type="submit" className="button_uncontrolled">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  function handlerSubmit(e: SyntheticEvent): void {
    e.preventDefault();
    console.dir(nameRef.current?.value);
  }
}

export default FormUncontrolled;
