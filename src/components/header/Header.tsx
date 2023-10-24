import { Component, ReactElement } from 'react';

import './Header.scss';

class Header extends Component {
  public render(): ReactElement {
    return (
      <>
        <header className="header">
          <input className="header__input" type="text" name="search" />
          <button className="header__button" type="button">
            <span className="header__button-text">Search</span>
          </button>
        </header>
      </>
    );
  }
}

export default Header;
