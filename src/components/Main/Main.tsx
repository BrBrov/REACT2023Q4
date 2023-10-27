import { Component, ReactElement } from 'react';

import './Main.scss';
import { MainProps, MainState } from '../../models/Main-models';
import ErrorButton from '../error-button/Error-Button';

class Main extends Component<MainProps, MainState> {
  public static readonly defaultProps: Readonly<MainProps> | null;

  public render(): ReactElement {
    const { cards } = this.props as unknown as MainProps;

    return (
      <>
        <main className="main">
          <div className="main__cards-wrapper">{cards}</div>
          <ErrorButton />
        </main>
      </>
    );
  }
}

export default Main;
