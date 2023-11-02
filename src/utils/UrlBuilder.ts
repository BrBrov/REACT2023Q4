class UrlBuilder {
  private readonly pageTitle: string = '?page=';
  private readonly searchTitle: string = '&search=';

  public createURL(
    pageCount: number | string,
    searchString: string | null
  ): string {
    const page: string =
      typeof pageCount === 'number' ? pageCount.toString() : pageCount;

    let urlPath = this.pageTitle + `${page}`;

    urlPath = searchString
      ? urlPath + this.searchTitle + searchString
      : urlPath;

    return urlPath;
  }
}

export default UrlBuilder;
