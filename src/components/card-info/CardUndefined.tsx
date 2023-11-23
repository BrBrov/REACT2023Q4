import { ReactNode } from 'react';

function CardUndefined({ prop }: { prop: () => void }): ReactNode {
  return (
    <div className="main__single-card">
      <div className="main__close-wrapper">
        <div className="main__close-img" onClick={prop}>
          <img
            className="main__close-image"
            src={'./close.svg'}
            alt="Close card"
          />
        </div>
      </div>
      <div className="main__card-wrong">
        <span className="main__beer-name">Card was not found on the page.</span>
      </div>
    </div>
  );
}

export default CardUndefined;
