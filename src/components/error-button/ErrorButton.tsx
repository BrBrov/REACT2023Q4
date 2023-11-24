import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

import btn from './ErrorButton.module.scss';

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
    <div className={btn.section}>
      <div className={btn.wrapper}>
        <button type="button" className={btn.button} onClick={throwError}>
          <span className={btn.text}>Click for error!</span>
        </button>
      </div>
    </div>
  );
}

function pageBroker(): void {
  const error: Error = new Error('Smell button caused this error');
  error.name = 'Smell button was clicked';
  error.cause = 'Press button';
  throw error;
}

export default ErrorButton;
