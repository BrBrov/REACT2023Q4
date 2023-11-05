import { ReactNode } from 'react';
import RequestData from '../../utils/RequestData';
import { Navigate } from 'react-router-dom';

function Redirect(): ReactNode {
  const fetchData = new RequestData();
  const linkTO = {
    pathname: 'main',
    search:
      `?page=${fetchData.getPage()}` +
      `${
        fetchData.getSearchString()
          ? `&search=${fetchData.getSearchString()}`
          : ``
      }`,
  };

  return (
    <>
      <Navigate to={linkTO} replace={true} />
    </>
  );
}

export default Redirect;
