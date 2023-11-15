import { describe, expect, it } from 'vitest';
import Main from './Main';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContextResponseData from '../../context/DataContext';
import DataContext from '../../context/DataContext-model';
import {
  fakeDataWithSixElems,
  fakeDataWithTwelveElems,
  fakeDataWithTwentyFourElems,
} from '../../test/fakeData';

describe('Test count list', function () {
  it('Count cards 6', function () {
    const newContext = new DataContext();
    newContext.setCardsData(fakeDataWithSixElems);

    render(
      <ContextResponseData.Provider value={newContext}>
        <Main />
      </ContextResponseData.Provider>,
      { wrapper: BrowserRouter }
    );
    const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
    expect(child.length).toEqual(6);
  });

  it('Count cards 12', function () {
    const newContext = new DataContext();
    newContext.setCardsData(fakeDataWithTwelveElems);

    render(
      <ContextResponseData.Provider value={newContext}>
        <Main />
      </ContextResponseData.Provider>,
      { wrapper: BrowserRouter }
    );
    const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
    expect(child.length).toEqual(12);
  });

  it('Count cards 24', function () {
    const newContext = new DataContext();
    newContext.setCardsData(fakeDataWithTwentyFourElems);

    render(
      <ContextResponseData.Provider value={newContext}>
        <Main />
      </ContextResponseData.Provider>,
      { wrapper: BrowserRouter }
    );
    const child: Array<HTMLElement> = screen.getAllByAltText(/Image of /i);
    expect(child.length).toEqual(24);
  });
});
