import { ReactNode } from 'react';

function Fallback(): ReactNode {
  //TODO: delete!!!
  console.log('Suspense');
  return (
    <>
      <div className="fallback">
        <span className="fallback__text">Loading...</span>
      </div>
    </>
  );
}

export default Fallback;
