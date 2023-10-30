import { Component, ReactNode } from 'react';

import './Error-Page.scss';
import { ErrorPageProps } from '../../models/ErrorPage-model';

type ErrorPageState = Record<string, never>;

class ErrorPage extends Component<ErrorPageProps, ErrorPageState> {
  public static readonly defaultProps: Readonly<ErrorPageProps>;

  render(): ReactNode {
    return (
      <>
        <div className="error">
          <div className="error__text-wrapper">
            <span className="error__text">
              You pressed that smell button and broke the site!!!
            </span>
            <button
              className="error__page-reload"
              type="button"
              onClick={this.onClick.bind(this)}
            >
              <span className="error__reload-text">Reload the page</span>
            </button>
          </div>
        </div>
      </>
    );
  }

  private onClick(): void {
    const { reloader } = this.props as unknown as ErrorPageProps;
    reloader();
  }
}

export default ErrorPage;
