import { describe, expect, it, vi } from 'vitest';
import {
  createMemoryRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import routes from './router/main-router';
import { render, screen } from '@testing-library/react';
import Beer from './Beer';
import { Provider } from 'react-redux';
import storeApp from './redux/redux-store/store';
import mswServer from './test/msw';
import BeerStore from './redux/redux-models/store-types';

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );

  return {
    ...actual,
    BrowserRouter: actual.BrowserRouter,
    useSearchParams: vi.fn().mockImplementation(() => {
      const obj = {
        sParams: new URLSearchParams('main?page=1&items=6'),
        setSParams: function (
          value:
            | string
            | string[][]
            | Record<string, string>
            | URLSearchParams
            | undefined
        ) {
          this.sParams = new URLSearchParams(value);
        },
      };

      const { sParams, setSParams } = obj;
      return [sParams, setSParams.bind(obj)];
    }),
  };
});

describe('Beer component test', function () {
  beforeAll(() => mswServer.listen());
  afterAll(() => mswServer.close());

  it('Renders loading state', async () => {
    expect.assertions(1);

    render(
      <Provider store={storeApp}>
        <BrowserRouter>
          <Beer />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it('Test 404 page', function () {
    const routesTest = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={routesTest} />);

    expect(screen.getByText(/Page not found!/)).toBeInTheDocument();
  });

  it('Test store on start into Beer component', function () {
    render(
      <Provider store={storeApp}>
        <BrowserRouter>
          <Beer />
        </BrowserRouter>
      </Provider>
    );

    const state: BeerStore = storeApp.getState();

    expect(state.itemsPerPage.itemsPerPage).toBe(6);
    expect(state.search.search).toBe('');
  });
});
