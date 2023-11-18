import { render, screen, fireEvent } from '@testing-library/react';
import { vi, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from './../../components/header/Header';
import { Provider } from 'react-redux';
import storeApp from '../../redux/redux-store/store';
import BeerStore from '../../redux/redux-models/store-types';
import { searchToStore } from '../../redux/redux-actions/actions';
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

describe('Test header', () => {
  it('saves entered value to store on Search button click', async () => {
    render(
      <Provider store={storeApp}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const input: HTMLInputElement = screen.getByRole('textbox');
    const button: HTMLButtonElement = screen.getByRole('button');

    fireEvent.input(input, { target: { value: 'test' } });
    fireEvent.click(button);

    const state: BeerStore = storeApp.getState();
    expect(state.search.search).toBe('test');
  });

  it('retrieves the value from store upon mounting', async () => {
    const inputAction = searchToStore('test');

    storeApp.dispatch(inputAction);

    render(
      <Provider store={storeApp}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input.value).toBe('test');
  });
});
