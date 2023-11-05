class StorageProcessor {
  private searchString: string | null;

  constructor() {
    this.searchString = localStorage.getItem('search');
  }

  get search(): string | null {
    return this.searchString;
  }

  set search(searchString: string | null) {
    this.searchString = searchString;
    if (!this.searchString) {
      localStorage.clear();
    } else {
      localStorage.setItem('search', this.searchString);
    }
  }
}

export default StorageProcessor;
