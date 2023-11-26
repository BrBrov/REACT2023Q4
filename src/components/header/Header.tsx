import { ReactNode, SyntheticEvent, useState } from 'react';

import style from './Header.module.scss';
import { useRouter } from 'next/router';
import QueryParser from '@/utils/QueryParser';

function Header(): ReactNode {
  const router = useRouter();

  const queryParams = new QueryParser(router.asPath);

  const [inputData, setInputData] = useState<string>(queryParams.search ?? '');

  return (
    <>
      <header className={style.header}>
        <input
          className={style.header__input}
          type="text"
          name="search"
          value={inputData}
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
    setInputData(input.value);
  }

  async function onSearch(): Promise<void> {
    let url = `?page=1&items=` + queryParams.items;
    if (inputData) url += `&search=${inputData}`;
    await router.push(url);
  }
}

export default Header;
