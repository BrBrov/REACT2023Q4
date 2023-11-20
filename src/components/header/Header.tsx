import { ReactNode, SyntheticEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import BeerStore from '../../redux/redux-models/store-types';
import { SearchStore } from '../../redux/redux-models/store-model';
import { actionSearch } from '../../redux/redux-slices/search-operations';

function Header(): ReactNode {
  const [sParams, setNewParams] = useSearchParams();
  const selectorSearch: SearchStore = useSelector(
    (state: BeerStore) => state.search
  );

  const dispatchStore = useDispatch();

  const [inputData, setInput] = useState<string | null>(selectorSearch.search);

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
    dispatchStore(actionSearch({ search: input.value }));
    setInput(input.value);
  }

  function onSearch(): void {
    let url = `?page=1&items=` + sParams.get('items');

    if (inputData) url += `&search=${inputData}`;

    setNewParams(url);
  }
}

export default Header;
