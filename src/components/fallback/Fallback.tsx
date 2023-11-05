import { ReactNode } from 'react';

function Fallback(): ReactNode {
  return (
    <>
      <div className="fallback">
        <span className="fallback__text">Loading...</span>
      </div>
    </>
  );
}

export default Fallback;
