import { ReactNode, SyntheticEvent, useState } from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';
import UrlBuilder from '../../utils/UrlBuilder';
import fetchData from '../../utils/RequestData';

function Header(): ReactNode {
  const [inputData, setInput] = useState<string | null>(
    fetchData.getSearchString()
  );

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
        <button
          className="header__button"
          type="button"
          onClick={() => console.log('click')}
        >
          <Link to={new UrlBuilder().createURL(fetchData.getPage(), inputData)}>
            <span className="header__button-text">Search</span>
          </Link>
        </button>
      </header>
    </>
  );

  function onInput(event: SyntheticEvent): void {
    const input = event.target as HTMLInputElement;
    setInput(input.value);
  }
}

export default Header;
