import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

import './Error-Button.scss';

type ErrorButtonState = {
  error: boolean;
};

function ErrorButton(): ReactNode {
  const [state, setError]: [
    ErrorButtonState,
    Dispatch<SetStateAction<ErrorButtonState>>,
  ] = useState<ErrorButtonState>({ error: false });

  function throwError(): void {
    setError({ error: true });
  }

  if (state.error) pageBroker();

  return (
    <>
      <footer className="footer__smell-section">
        <div className="footer__button-wrapper">
          <button
            type="button"
            className="footer__smell-button"
            onClick={throwError}
          >
            <span className="footer__smell-text">Click for error!</span>
          </button>
        </div>
      </footer>
    </>
  );
}

function pageBroker(): void {
  const error: Error = new Error('Smell button caused this error');
  error.name = 'Smell button click';
  throw error;
}

export default ErrorButton;
