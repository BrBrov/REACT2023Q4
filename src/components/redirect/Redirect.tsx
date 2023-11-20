import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function Redirect(): ReactNode {
  const linkTO = {
    pathname: 'main',
    search: `?page=1` + `&items=6`,
  };

  return <Navigate to={linkTO} replace={false} />;
}

export default Redirect;
