import { PureComponent, ReactNode } from 'react';

import './Beer.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import RequestData from './utils/RequestData';
import ResponseData from './models/ResponseData';
import { BeerProps, BeerState } from './models/Beer-models';
import CardCreator from './utils/CardCreator';

class Beer extends PureComponent<BeerProps, BeerState> {
  public static readonly defaultProps: Readonly<Record<string, never>>;

  private fetcher: RequestData = new RequestData();

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cards: null,
    };
  }

  public render(): ReactNode {
    return (
      <>
        <div className="beer__container">
          <Header
            {...{
              search: this.setSearch.bind(this),
              searchString: this.fetcher.getSearchString(),
            }}
          />
          <Main {...{ cards: this.state.cards }} />
        </div>
      </>
    );
  }

  componentDidMount(): void {
    this.getData(this.fetcher.getSearchString());
  }

  public setSearch(search: string | null): void {
    this.getData(search);
  }

  private getData(search: string | null): void {
    this.fetcher.getResponseData(search).then((data: Array<ResponseData>) => {
      const cards = this.createCards(data);
      this.setState({ cards: cards });
    });
  }

  private createCards(
    data: Array<ResponseData> | null
  ): Array<ReactNode> | null {
    if (!data) return null;

    return data.map((item: ResponseData) => {
      const cardCreator = new CardCreator(item);
      return cardCreator.getCard();
    });
  }
}

export default Beer;
