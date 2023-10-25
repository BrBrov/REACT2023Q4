import {Component, ReactNode} from 'react';

import './Error-Button.scss';

type ErrorButtonState = {
  error: boolean;
}

class ErrorButton extends Component<Record<string, never>, ErrorButtonState> {
  public static readonly defaultProps: Readonly<Record<string, never>>;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render(): ReactNode {
    if (this.state.error) {
      const error: Error = new Error('Smell button caused this error');
      error.name = 'Smell button click';
      throw error;
    }

    return (
      <>
        <div className='main__smell-section'>
          <div className='main__button-wrapper'>
            <button type='button' className='main__smell-button' onClick={ this.throwError.bind(this) }>
              <span className='main__smell-text'>Click for error!</span>
            </button>
          </div>
        </div>
      </>
    );
  }

  private throwError(): void {
      this.setState({ error: true });
  }
}

export default ErrorButton;