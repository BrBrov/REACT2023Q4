import { ReactNode, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Main.scss';
import { useDispatch, useSelector } from 'react-redux';
import getCards from '../../redux/cards/getCards';
import CardRecord from '../../models/CardRecord';
import Card from '../Cards/Card';
import cardActionUpdAll from '../../redux/cards/actionUpdAll';

function Main(): ReactNode {
  const cards: Array<CardRecord> = useSelector(getCards);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (cards.some((card: CardRecord) => card.newRecord)) {
      const newCardsForStore: Array<CardRecord> = cards.map(
        (card: CardRecord) => {
          return {
            ...card,
            newRecord: false,
          };
        }
      );
      setTimeout(() => {
        dispatcher(cardActionUpdAll(newCardsForStore));
      }, 5000);
    }
  }, [cards, dispatcher]);

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
      {!cards.length ? (
        <main className="main_container">
          <div className="empty_cards">
            <span className="empty_text">Here is not any cards...</span>
          </div>
        </main>
      ) : (
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
