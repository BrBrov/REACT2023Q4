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

  //TODO: For control links. Must be delete!!!!
  console.dir('Redirect');

  return (
    <>
      <Navigate to={linkTO} replace={true} />
    </>
  );
}

export default Redirect;
