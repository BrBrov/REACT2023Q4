import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './Main.scss';
import { useSelector } from 'react-redux';
import getCards from '../../redux/cards/getCards';
import CardRecord from '../../models/CardRecord';
import Card from '../Cards/Card';

function Main(): ReactNode {
  const cards = useSelector(getCards);
  console.log(cards);
  return (
    <>
      <header className="main_header">
        <NavLink to={'/uncontrol'} className="app_link header_text">
          Uncontrolled form
        </NavLink>
        <NavLink to={'/control'} className="app_link header_text">
          Controlled form
        </NavLink>
      </header>
      {!cards.length ? null : (
        <main className="main_container">
          {cards.map((card: CardRecord, index: number) => (
            <Card key={index} {...card} />
          ))}
        </main>
      )}
    </>
  );
}

export default Main;
