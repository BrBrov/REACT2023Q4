import { vi } from 'vitest';
import ResponseData from '../models/ResponseData';
import userEvent from '@testing-library/user-event/index';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';

export function mockUseLoader(data: Array<ResponseData> | null): void {
  return vi.mock('react-router-dom', async function (): Promise<object> {
    const actual: object = await vi.importActual('react-router-dom');

    return {
      ...actual,
      useLoaderData: (): { data: Array<ResponseData> | null } => ({
        data: data,
      }),
    };
  });
}

export function mockUseNavigation(): void {
  const mockedNavigate = vi.fn(() => {
    return { state: 'idle' };
  });

  return vi.mock('react-router-dom', async function (): Promise<object> {
    const actualNav: object = await vi.importActual('react-router-dom');
    return {
      ...actualNav,
      useNavigation: mockedNavigate,
    };
  });
}

export function renderWithRouter(ui: ReactElement, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
}

export function mockUseSearchParams() {
  function implementation() {
    return [
      {
        get: function (param: string): string | null {
          switch (param) {
            case 'page':
              return '1';
            case 'items':
              return '6';
            case 'search':
              return 'Lager';
            case 'ids':
              return '1';
            default:
              return null;
          }
        },
      },
    ];
  }
  const mockUseSearchParams = vi.fn(implementation);

  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
      actual,
      useSearchParams: () => mockUseSearchParams,
    };
  });
}

export function mockUseNavigate() {
  const mockedUseNavigate = vi.fn();

  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
  }));
}
