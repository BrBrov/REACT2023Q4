import StorageProcessor from '../utils/StorageProcessor';

describe('StorageProcessor', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves the entered value to local storage on set', () => {
    const storageProcessor = new StorageProcessor();
    storageProcessor.search = 'test';

    expect(localStorage.getItem('search')).toBe('test');
  });

  it('clears local storage when search is set to null', () => {
    const storageProcessor = new StorageProcessor();
    storageProcessor.search = 'test';

    storageProcessor.search = null;

    expect(localStorage.getItem('search')).toBeNull();
  });

  it('retrieves the value from local storage upon instantiation', () => {
    localStorage.setItem('search', 'initialValue');

    const storageProcessor = new StorageProcessor();

    expect(storageProcessor.search).toBe('initialValue');
  });
});
