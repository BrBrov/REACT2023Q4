import {ReactNode, SyntheticEvent, useEffect, useState} from 'react';

import style from './Header.module.scss';
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

  useEffect(() => {
    if(inputData !== queryParams.search) {
      dispatchStore(actionSearch({ search: queryParams.search ?? '' }));
      setInput(queryParams.search);
    }
  }, [queryParams.search, inputData]);

  return (
    <>
      <header className={style.header}>
        <input
          className={style.header__input}
          type="text"
          name="search"
          value={inputData || ''}
          onInput={onInput}
        />
        <button
          className={style.header__button}
          type="button"
          onClick={onSearch}
        >
          <span className={style.header__buttonText}>Search</span>
        </button>
      </header>
    </>
  );

  function onInput(event: SyntheticEvent): void {
    const input = event.target as HTMLInputElement;
    setInput(input.value);
  }

  async function onSearch(): Promise<void> {
    dispatchStore(actionSearch({ search: inputData ?? '' }));
    let url = `?page=1&items=` + queryParams.items;

    if (inputData) url += `&search=${inputData}`;
    await router.push(url);
  }
}

export default Header;
