import { PureComponent, ReactNode } from 'react';

import './Beer.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import RequestData from './utils/RequestData';
import ResponseData from './models/ResponseData';

class Beer extends PureComponent<Record<string, never>> {
  public static readonly defaultProps: Readonly<Record<string, never>>;

  private fetcher: RequestData = new RequestData();

  public render(): ReactNode {
    console.log(this.state);
    return (
      <>
        <div className="beer__container">
          <Header
            {...{
              search: this.setSearch.bind(this),
              searchString: this.fetcher.getSearchString(),
            }}
          />
          <Main />
        </div>
      </>
    );
  }

  componentDidMount(): void {
    this.getData(null);
  }

  public setSearch(search: string | null): void {
    this.getData(search);
  }

  private getData(search: string | null): void {
    this.fetcher
      .getResponseData(search)
      .then((data: ResponseData) => this.setState(data));
  }
}

export default Beer;
