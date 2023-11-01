import ResponseData from '../models/ResponseData';
import StorageProcessor from './StorageProcessor';

class RequestData {
  private readonly page: number;
  private readonly countCards: number;
  private readonly baseURL: string;
  private storage: StorageProcessor;

  constructor() {
    this.page = 1;
    this.countCards = 12;
    this.baseURL = `https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.countCards}`;
    this.storage = new StorageProcessor();
  }

  public getResponseData(search: string | null): Promise<Array<ResponseData>> {
    const url: string = this.generateURL(search);

    return fetch(url, { method: 'GET', mode: 'cors' }).then(
      (response: Response) => response.json()
    );
  }

  public getSearchString(): string | null {
    return this.storage.search;
  }

  private generateURL(search: string | null): string {
    this.storage.search = search ? search : null;

    if (search) {
      this.storage.search = search;
      return (
        this.baseURL + `&beer_name=${this.deleteSpaceFromSearchString(search)}`
      );
    }

    if (this.storage.search) {
      return (
        this.baseURL +
        `&beer_name=${this.deleteSpaceFromSearchString(this.storage.search)}`
      );
    }

    return this.baseURL;
  }

  private deleteSpaceFromSearchString(search: string): string {
    const prepareSearch: string = search.trim();
    return prepareSearch.replaceAll(' ', '_');
  }
}

const fetchData = new RequestData();

export default fetchData;
