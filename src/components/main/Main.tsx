import { Component, ReactElement } from 'react';

import './Main.scss';
import { MainProps } from '../../models/Main-models';
import ErrorButton from '../error-button/Error-Button';

type MainState = Record<string, never>;

class Main extends Component<MainProps, MainState> {
  public static readonly defaultProps: Readonly<MainProps> | null;

  public render(): ReactElement {
    const { cards } = this.props as unknown as MainProps;

    return (
      <>
        <div className="main">
          <main className="main__cards-wrapper">{cards}</main>
          <ErrorButton />
        </div>
      </>
    );
  }
}

export default Main;
