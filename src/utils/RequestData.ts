import ResponseData from '../models/ResponseData';
import StorageProcessor from './StorageProcessor';
import ServerError from '../models/ServerError';
import QueryParser from './QueryParser';

class RequestData {
  private storage: StorageProcessor;
  private readonly queryParams: QueryParser;

  constructor(url: string) {
    this.storage = new StorageProcessor();
    this.queryParams = new QueryParser(url);
  }

  public async getResponseData(): Promise<Array<ResponseData> | ServerError> {
    const url: string | null = this.generateURL();

    if (!url)
      return {
        statusCode: 400,
        message: 'You entered incorrect query parameters.',
        error: 'Wrong query parameters!',
      };

    const response: Response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    return response.json();
  }

  public checkQueryParams(): boolean {
    const page: string | null = this.queryParams.page;
    const items: string | null = this.queryParams.items;

    return !(!page && !items);
  }

  public getURLForRedirect(): string {
    let url = 'main';

    url += '?page=' + `${this.queryParams.page ? this.queryParams.page : '1'}`;
    url +=
      '&items=' + `${this.queryParams.items ? this.queryParams.items : '6'}`;
    url += this.queryParams.search ? `&search=${this.queryParams.search}` : '';

    return url;
  }
  private generateURL(): string | null {
    if (this.storage.search !== this.queryParams.search) {
      this.storage.search = this.queryParams.search;
    }
    if (!this.queryParams.page || !this.queryParams) return null;

    if (!this.queryParams.items) return null;

    let url = `https://api.punkapi.com/v2/beers?page=${this.queryParams.page}&per_page=${this.queryParams.items}`;

    if (this.queryParams.search) url += `&beer_name=${this.storage.search}`;

    if (this.queryParams.ids) url += `&ids=${this.queryParams.ids}`;

    return url;
  }
}

export default RequestData;
