import { Component, ReactNode } from 'react';

import './Error-Button.scss';

type ErrorButtonState = {
  error: boolean;
};

class ErrorButton extends Component<Record<string, never>, ErrorButtonState> {
  public static readonly defaultProps: Readonly<Record<string, never>>;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render(): ReactNode {
    if (this.state.error) this.pageBroker();

    return (
      <>
        <footer className="footer__smell-section">
          <div className="footer__button-wrapper">
            <button
              type="button"
              className="footer__smell-button"
              onClick={this.throwError.bind(this)}
            >
              <span className="footer__smell-text">Click for error!</span>
            </button>
          </div>
        </footer>
      </>
    );
  }

  private throwError(): void {
    this.setState({ error: true });
  }

  private pageBroker(): void {
    const error: Error = new Error('Smell button caused this error');
    error.name = 'Smell button click';
    throw error;
  }
}

export default ErrorButton;
