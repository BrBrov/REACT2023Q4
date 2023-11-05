import { ReactNode, SyntheticEvent, useState } from 'react';

import './Header.scss';
import {
  createSearchParams,
  Location,
  useLocation,
  useNavigate,
} from 'react-router-dom';

function Header(): ReactNode {
  const location = useLocation();
  const navigate = useNavigate();
  const sParams = createSearchParams(location.search);

  const [inputData, setInput] = useState<string | null>(sParams.get('search'));

  const searchURL = createSearchLink(location, inputData);

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
  }

  function onSearch(): void {
    navigate(searchURL, { replace: false });
  }

  function createSearchLink(location: Location, input: string | null): string {
    let url = location.pathname + `?page=1`;

    if (input) url += `&search=${input}`;

    return url;
  }
}

export default Header;
