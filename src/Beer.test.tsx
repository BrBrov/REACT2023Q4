import { describe, expect, it, vi } from 'vitest';
import {
  createMemoryRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import routes from './router/main-router';
import { render, screen } from '@testing-library/react';
import Beer from './Beer';
import * as RouterDom from 'react-router-dom';

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );

  return {
    ...actual,
    BrowserRouter: actual.BrowserRouter,
    useLoaderData: vi.fn(),
    useNavigation: vi.fn(),
  };
});

describe('Beer component test', function () {
  it('renders loading state', async () => {
    vi.spyOn(RouterDom, 'useLoaderData').mockReturnValueOnce({
      data: null,
    });

    vi.spyOn(RouterDom, 'useNavigation').mockReturnValueOnce({
      state: 'idle',
    } as RouterDom.Navigation);

    render(
      <BrowserRouter>
        <Beer />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/There are no pages with the requested beer/)
    ).toBeInTheDocument();
  });

  it('Test 404 page', function () {
    const routesTest = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={routesTest} />);

    expect(screen.getByText(/Page not found!/)).toBeInTheDocument();
  });
});
