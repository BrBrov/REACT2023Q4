import { http, HttpResponse, PathParams } from 'msw';
import {
  fakeDataWithSixElems,
  fakeDataWithTwelveElems,
  fakeDataWithTwentyFourElems,
} from './fakeData';
import ResponseData from '../models/ResponseData';
import { setupServer } from 'msw/node';

const handlers = [
  http.get('v2/beer', ({ params }: { params: PathParams }) => {
    const { ids } = params;

    if (ids) {
      const item = fakeDataWithTwentyFourElems.find(
        (beer: ResponseData) => beer.id === parseInt(ids as string)
      );
      return item ? HttpResponse.json([item]) : HttpResponse.json([]);
    }

    const { per_page } = params;

    if (!per_page || Array.isArray(per_page)) {
      return HttpResponse.json(fakeDataWithSixElems);
    }

    const items = parseInt(per_page as string);

    if (items <= 6) {
      return HttpResponse.json(fakeDataWithSixElems);
    }

    if (items > 6 && items <= 12) {
      return HttpResponse.json(fakeDataWithTwelveElems);
    }

    if (items > 12) {
      return HttpResponse.json(fakeDataWithTwentyFourElems);
    }
  }),
];

const mswServer = setupServer(...handlers);

export default mswServer;
