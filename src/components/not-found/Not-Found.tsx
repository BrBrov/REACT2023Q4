import { ReactNode } from 'react';

import './Not-Found.module.scss';

function NotFound(): ReactNode {
  return (
    <div className="main__result-apson">
      <div className="main__absent-wrapper">
        <span className="main__not-found">
          The beer you are looking for was not found!
        </span>
        <span className="main__not-found">Try looking for another beer.</span>
      </div>
    </div>
  );
}
export default NotFound;
