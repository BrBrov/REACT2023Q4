import CardRecord from '../../models/CardRecord';
import { ReactNode } from 'react';
import './Card.scss';

function Card(props: CardRecord): ReactNode {
  const {
    name,
    age,
    email,
    gender,
    country,
    controlled,
    avatar,
    password,
    license,
    newRecord,
  } = props;

  let wrapperClass = controlled ? 'bg_control' : 'bg_uncontrol';
  wrapperClass = newRecord ? 'new_card' : wrapperClass;

  return (
    <div className={`card ${wrapperClass}`}>
      <div className="card_wrapper">
        <div className="image_wrapper">
          <img className="image_avatar" src={avatar} alt="Avatar" />
        </div>
        <div className="user_wrapper">
          <span className="text_title">Name: </span>
          <span className="text_value">{name}</span>
        </div>
        <div className="user_wrapper">
          <span className="text_title">Age:</span>
          <span className="text_value">{age}</span>
        </div>
        <div className="user_wrapper">
          <span className="text_title">Gender: </span>
          <span className="text_value">{gender}</span>
        </div>
        <div className="user_wrapper">
          <span className="text_title">E-mail: </span>
          <span className="text_value">{email}</span>
        </div>
        <div className="user_wrapper">
          <span className="text_title">Password: </span>
          <span className="text_value">{password}</span>
        </div>
        <div className="user_wrapper">
          <span className="text_title">Country: </span>
          <span className="text_value">{country}</span>
        </div>
        <div className="user_wrapper">
          <span className="text_title">Accept T&C: </span>
          <span className="text_value">
            {license ? 'accepted' : 'not accepted'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
