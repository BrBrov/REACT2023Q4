import {describe, it, vi, expect } from "vitest";
import {fakeDataWithSixElems} from "../../test/fakeData";
import ResponseData from "../../models/ResponseData";
import {render, screen, waitFor} from "@testing-library/react";
import Card from "./Card";

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

describe('Cards test', function () {
  it('Card view test', function () {
    fakeDataWithSixElems.map(async (card: ResponseData) => {
      render(<Card card={card}/>);
      await waitFor(() => {
        expect(screen.getByText(card.name)).toBeInTheDocument();
        expect(screen.getByAltText(`Image of ${card.description}`)).toBeInTheDocument();
        expect(screen.getByText(`${card.description}`)).toBeInTheDocument();
        expect(screen.getByText(`Volume: ${card.volume.value}`)).toBeInTheDocument();
        expect(screen.getByText(`Alcohol: ${card.abv}%`)).toBeInTheDocument();
        expect(screen.getByText(`Color SRM: ${card.srm}`)).toBeInTheDocument();
        expect(screen.getByText(`Bitterness: ${card.ibu}`)).toBeInTheDocument();
      });
    })
  })
});