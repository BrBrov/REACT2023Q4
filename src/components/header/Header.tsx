import { Component, FormEvent, ReactNode } from 'react';

import './Header.scss';
import { HeaderState, PropHeader } from '../../models/Header-models';

class Header extends Component<PropHeader, HeaderState> {
  public static readonly defaultProps: Readonly<PropHeader>;
  constructor(props: PropHeader) {
    super(props);
    this.state = props.searchString
      ? { search: props.searchString }
      : { search: '' };
  }
  public render(): ReactNode {
    console.log(this.props);
    return (
      <>
        <header className="header">
          <input
            className="header__input"
            type="text"
            name="search"
            onInput={this.onInputSearch.bind(this)}
            value={this.state.search}
          />
          <button
            className="header__button"
            type="button"
            onClick={this.onBtnClick.bind(this)}
          >
            <span className="header__button-text">Search</span>
          </button>
        </header>
      </>
    );
  }

  private onInputSearch(e: FormEvent<HTMLInputElement>): void {
    const { value } = e.target as HTMLInputElement;
    this.setState({ search: value });
  }

  private onBtnClick(): void {
    const { search } = this.props as unknown as Readonly<PropHeader>;
    search(this.state.search);
  }
}

export default Header;
