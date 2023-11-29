import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

function Main(): ReactNode {
  return (
    <>
      <header className="main_header">
        <NavLink to={'/uncontrol'}>Uncontrolled form</NavLink>
        <NavLink to={'/control'}>Controlled form</NavLink>
      </header>
      <main className="main_container">
        <span>Here will register cards</span>
      </main>
    </>
  );
}

export default Main;
