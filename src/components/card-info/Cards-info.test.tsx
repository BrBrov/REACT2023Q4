import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/redux-store/store';
import mswServer from '../../test/msw';

import CardsInfo from './Cards-info';

describe('CardsInfo Component', () => {
  beforeAll(() => mswServer.listen());
  afterEach(() => mswServer.resetHandlers());
  afterAll(() => mswServer.close());

  it('renders card when ids parameter is present', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/cards?ids=1']}>
          <Routes>
            <Route path="/cards/*" element={<CardsInfo />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      const cardNameElement = screen.getByText(/Buzz/);
      expect(cardNameElement).toBeInTheDocument();
    }, {
      timeout: 5000,
    });
  });

  it('does not render card when ids parameter is not present', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/cards']}>
          <Routes>
            <Route path="/cards/*" element={<CardsInfo />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const noCardElement = screen.queryByText(/Card 1/);
    expect(noCardElement).toBeNull();
  });
});
