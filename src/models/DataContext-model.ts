import ResponseData from './ResponseData';
import StorageProcessor from '../utils/StorageProcessor';

class DataContext {
  private cardsData: Array<ResponseData> | null;
  private searchString: StorageProcessor;

  constructor() {
    this.cardsData = null;
    this.searchString = new StorageProcessor();
  }

  public setCardsData(data: Array<ResponseData> | null): void {
    this.cardsData = data;
  }

  public setSearchString(search: string | null): void {
    this.searchString.search = search;
  }

  public getAllCardsData(): Array<ResponseData> | null {
    return this.cardsData;
  }

  public getSearchString(): string | null {
    return this.searchString.search;
  }

  public getSingleCardData(ids: number): ResponseData | null {
    if (!this.cardsData) return null;

    return this.cardsData.find((item: ResponseData) => ids === item.id) || null;
  }
}

export default DataContext;
