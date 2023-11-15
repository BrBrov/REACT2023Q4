import { ReactNode, SyntheticEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Header.scss';

function Header(): ReactNode {
  const [sParams, setNewParams] = useSearchParams();

  const [inputData, setInput] = useState<string | null>('');

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
        <button className="header__button" type="button" onClick={onSearch}>
          <span className="header__button-text">Search</span>
        </button>
      </header>
    </>
  );

  function onInput(event: SyntheticEvent): void {
    const input = event.target as HTMLInputElement;
    setInput(input.value);
    //TODO
    // context.setSearchString(input.value || null);
  }

  function onSearch(): void {
    let url = `?page=1&items=` + sParams.get('items');

    if (inputData) url += `&search=${inputData}`;

    setNewParams(url);
  }
}

export default Header;
