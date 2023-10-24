class StorageProcessor {
  private searchString: string | null;

  constructor() {
    this.searchString = localStorage.getItem('search');
  }

  get search(): string | null {
    return this.searchString;
  }

  set search(searchString: string) {
    this.searchString = searchString;
    localStorage.setItem('search', searchString);
  }
}

export default StorageProcessor;
