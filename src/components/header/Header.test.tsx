import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, Mocked } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from './../../components/header/Header';
import StorageProcessor from './../../utils/StorageProcessor';

vi.mock('../utils/StorageProcessor', () => {
  return {
    __esModule: true,
    default: vi.fn(() => ({
      get search() {
        return 'test';
      },
      set search(value) {
        if (!value) {
          localStorage.clear();
        } else {
          localStorage.setItem('search', value);
        }
      },
    })),
  };
});

vi.mock('react-router-dom', async () => {
  const actual: typeof import('react-router-dom') =
    await vi.importActual('react-router-dom');

  return {
    ...actual,
    BrowserRouter: actual.BrowserRouter,
    useLoaderData: vi.fn(),
    useNavigation: vi.fn(),
  };
});

describe('Test header', () => {
  it('saves entered value to local storage on Search button click', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const input: HTMLInputElement = screen.getByRole('textbox');
    const button: HTMLButtonElement = screen.getByRole('button');

    fireEvent.input(input, { target: { value: 'test' } });
    fireEvent.click(button);

    const storageProcessorMock =
      new StorageProcessor() as Mocked<StorageProcessor>;

    expect(storageProcessorMock.search).toBe('test');
  });

  it('retrieves the value from local storage upon mounting', async () => {
    const storageProcessorMock =
      new StorageProcessor() as Mocked<StorageProcessor>;

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(storageProcessorMock.search).toBe('test');
    });
  });
});
