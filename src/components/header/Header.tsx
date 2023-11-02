import { ReactNode, SyntheticEvent, useState } from 'react';

import './Header.scss';
import { createSearchParams, Link, useLocation } from 'react-router-dom';
import UrlBuilder from '../../utils/UrlBuilder';

function Header(): ReactNode {
  const location = useLocation();
  const sParams = createSearchParams(location.search);

  const [inputData, setInput] = useState<string | null>(sParams.get('search'));
  return (
    <>
      <header className="header">
        <input
          className="header__input"
          type="text"
          name="search"
          value={inputData || ''}
          onInput={onInput}
        />
        <Link
          to={new UrlBuilder().createURL(sParams.get('page') || 1, inputData)}
        >
          <button className="header__button" type="button">
            <span className="header__button-text">Search</span>
          </button>
        </Link>
      </header>
    </>
  );

  function onInput(event: SyntheticEvent): void {
    const input = event.target as HTMLInputElement;
    setInput(input.value);
  }
}

export default Header;
