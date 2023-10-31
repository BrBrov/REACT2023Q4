import {
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useState,
} from 'react';

import './Header.scss';
import { HeaderState, HeaderProps } from '../../models/Header-models';

function Header(props: HeaderProps): ReactNode {
  const initState: HeaderState = props.searchString
    ? { search: props.searchString }
    : { search: '' };
  const [state, setState]: [
    HeaderState,
    Dispatch<SetStateAction<HeaderState>>,
  ] = useState<HeaderState>(initState);

  function onInputSearch(e: FormEvent<HTMLInputElement>): void {
    const { value } = e.target as HTMLInputElement;
    setState({ search: value });
  }

  function onBtnClick(): void {
    const { search } = props;
    search(state.search);
  }

  function onEnterPress(e: SyntheticEvent): void {
    const { key } = e.nativeEvent as KeyboardEvent;
    if (key === 'Enter') return onBtnClick();
  }
  return (
    <>
      <header className="header">
        <input
          className="header__input"
          type="text"
          name="search"
          onInput={onInputSearch}
          onKeyDown={onEnterPress}
          value={state.search}
        />
        <button className="header__button" type="button" onClick={onBtnClick}>
          <span className="header__button-text">Search</span>
        </button>
      </header>
    </>
  );
}

export default Header;
