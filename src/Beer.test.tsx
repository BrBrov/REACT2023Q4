import { describe, it, vi, expect } from 'vitest';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './router/main-router';
import Beer from './Beer';
import { render, screen } from '@testing-library/react';
import ResponseData from './models/ResponseData';

describe('Beer test', () => {
  const routerTest = createBrowserRouter(routes);

  vi.mock('react-router-dom', async function (): Promise<object> {
    const actual: object = await vi.importActual('react-router-dom');

    return {
      ...actual,
      useLoaderData: (): { data: Array<ResponseData> | null } => ({
        data: null,
      }),
    };
  });

  it('Test render component', () => {
    render(<Beer />, { wrapper: () => <RouterProvider router={routerTest} /> });

    const elemText = screen.getByText(
      /There are no pages with the requested beer/
    );

    console.log(elemText);

    expect(elemText.textContent).toEqual(
      'There are no pages with the requested beer...'
    );
  });
});
