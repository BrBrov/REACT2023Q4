import { describe, expect, it } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './router/main-router';
import { render, screen } from '@testing-library/react';

describe('Beer component test', function () {
  it('Test 404 page', function () {
    const routesTest = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={routesTest} />);

    expect(screen.getByText(/Page not found!/)).toBeInTheDocument();
  });
});
