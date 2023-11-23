import { ReactNode, SyntheticEvent, useState } from 'react';

import './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionSearch } from '@/redux/redux-slices/search-operations';
import StoreType from '@/redux/redux-models/wrapper-type';
import { useRouter } from 'next/router';
import QueryParser from '@/utils/QueryParser';

function Header(): ReactNode {
  const router = useRouter();

  const queryParams = new QueryParser(router.asPath);

  const selectorSearch: string = useSelector(
    (state: StoreType) => state.search.search
  );

  const dispatchStore = useDispatch();

  const [inputData, setInput] = useState<string | null>(selectorSearch);

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

  async function onSearch(): Promise<void> {
    let url = `?page=1&items=` + queryParams.items;

    if (inputData) url += `&search=${inputData}`;

    await router.push(url);
  }
}

export default Header;
