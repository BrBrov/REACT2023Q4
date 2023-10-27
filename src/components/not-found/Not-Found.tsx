import { Component } from 'react';

import './Not-Found.scss';

class NotFound extends Component<Record<string, number>> {
  public static readonly defaultProps: Readonly<Record<string, number>>;

  render() {
    return (
      <div className="main__result-apson">
        <div className="main__absent-wrapper">
          <span className="main__not-found">
            The beer you are looking for was not found!
          </span>
          <span className="main__not-found">Try looking for another beer</span>
        </div>
      </div>
    );
  }
}

export default NotFound;
