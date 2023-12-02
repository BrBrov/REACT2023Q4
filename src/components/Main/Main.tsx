import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './Main.scss';

function Main(): ReactNode {
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
      <main className="main_container">
        <span>Here will register cards</span>
      </main>
    </>
  );
}

export default Main;
