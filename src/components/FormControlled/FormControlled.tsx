import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

function FormControlled(): ReactNode {
  return (
    <div>
      <span>Here will controlled form</span>
      <NavLink to={'/'}>Go to main</NavLink>
    </div>
  );
}

export default FormControlled;
