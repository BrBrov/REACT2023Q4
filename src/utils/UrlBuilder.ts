class UrlBuilder {
  private readonly pageTitle: string = '?page=';
  private readonly searchTitle: string = '&search=';

  public createURL(page: number, searchString: string | null): string {
    let urlPath = this.pageTitle + `${page}`;

    urlPath = searchString
      ? urlPath + this.searchTitle + searchString
      : urlPath;

    return urlPath;
  }
}

export default UrlBuilder;
