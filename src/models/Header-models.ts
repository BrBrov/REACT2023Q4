export interface PropHeader {
  search(param: string | null): void;
  searchString: string | null;
}

export interface HeaderState {
  search: string;
}
