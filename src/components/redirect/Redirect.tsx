import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function Redirect(): ReactNode {
  const linkTO = {
    pathname: 'main',
    search:
      `?page=1` +
      `&items=6` +
      `${
        localStorage.getItem('search')
          ? `&search=${localStorage.getItem('search')}`
          : ``
      }`,
  };

  return <Navigate to={linkTO} replace={true} />;
}

export default Redirect;
