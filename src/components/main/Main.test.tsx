import { describe, expect, it } from 'vitest';
import Main from './Main';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeApp from '../../redux/redux-store/store';
import mswServer from '../../test/msw';

describe('Test count list', function () {
  beforeAll(() => mswServer.listen());
  afterAll(() => mswServer.close());

  it('Count cards 6', async function () {
    render(
      <Provider store={storeApp}>
        <MemoryRouter initialEntries={['main?page=1&items=6']}>
          <Main />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
      expect(child.length).toEqual(6);
    });
  });

  it('Count cards 12', async function () {
    render(
      <Provider store={storeApp}>
        <MemoryRouter initialEntries={['main?page=1&items=12']}>
          <Main />
        </MemoryRouter>
      </Provider>
    );
    let child: Array<HTMLElement> | undefined = undefined;
    await waitFor(() => {
      child = screen.getAllByAltText(/Image of /i);
    });
    expect(child!.length).toEqual(12);
  });

  it('Count cards 24', async function () {
    render(
      <Provider store={storeApp}>
        <MemoryRouter initialEntries={['main?page=1&items=24']}>
          <Main />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
      expect(child.length).toEqual(24);
    });
  });
});
