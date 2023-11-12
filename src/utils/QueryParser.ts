class QueryParser {
  private pageQuery: string | null = '1';
  private countElements: string | null = '6';
  private searchQuery: string | null = null;
  private idsElem: string | null = null;

  constructor(url: string) {
    this.parseQueryString(url);
  }

  get page(): string | null {
    return this.pageQuery;
  }

  get items(): string | null {
    return this.countElements;
  }

  get search(): string | null {
    return this.searchQuery;
  }

  get ids(): string | null {
    return this.idsElem;
  }

  private parseQueryString(queryString: string): void {
    const url = new URL(queryString);
    const sParams = new URLSearchParams(url.search);
    this.pageQuery = this.checkNumber(sParams.get('page'));
    this.countElements = this.checkCountPage(sParams.get('items'));
    this.searchQuery = this.deleteSpaceFromSearchString(sParams.get('search'));
    this.idsElem = this.checkNumber(sParams.get('ids'));
  }

  private checkNumber(num: string | null): string | null {
    if (!num || Array.isArray(num)) return null;

    const parsedNum = parseInt(num);

    if (isNaN(parsedNum)) return null;

    return num;
  }

  private checkCountPage(count: string | null): string | null {
    if (!count || Array.isArray(count)) return null;

    const countNumber = parseInt(count!);

    if (isNaN(countNumber)) return null;

    if (countNumber !== 6 && countNumber !== 12 && countNumber !== 24)
      return null;

    return count;
  }

  private deleteSpaceFromSearchString(search: string | null): string {
    if (!search) return '';

    const prepareSearch: string = search.trim();
    return prepareSearch.replaceAll(' ', '_');
  }
}

export default QueryParser;
