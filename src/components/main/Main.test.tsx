import { describe, expect, it } from 'vitest';
import Main from './Main';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeApp from '../../redux/redux-store/store';
import mswServer from '../../test/msw';

const renderMainWithRouter = (items: number) => {
  return render(
    <Provider store={storeApp}>
      <MemoryRouter initialEntries={[`main?page=1&items=${items}`]}>
        <Main />
      </MemoryRouter>
    </Provider>
  );
};

describe('Test count list', function () {
  beforeAll(() => mswServer.listen());
  afterAll(() => mswServer.close());

  it('Count cards 6', async function () {
    const {container} = renderMainWithRouter(6);

    await waitFor(() => {
      const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
      expect(child.length).toEqual(6);
    },
      {
        container: container,
        timeout: 5000,
      });
  });

  it('Count cards 12', async function () {
    const {container} = renderMainWithRouter(12);

    await waitFor(() => {
        const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
        expect(child.length).toEqual(12);
      },
      {
        container: container,
        timeout: 5000,
      });
  });

  it('Count cards 24', async function () {
    const {container} = renderMainWithRouter(24);

    await waitFor(() => {
        const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
        expect(child.length).toEqual(24);
      },
      {
        container: container,
        timeout: 5000
      });
  });
});
