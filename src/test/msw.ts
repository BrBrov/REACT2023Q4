import { http, HttpResponse, PathParams } from 'msw';
import {
  fakeDataWithSixElems,
  fakeDataWithTwelveElems,
  fakeDataWithTwentyFourElems,
} from './fakeData';
import ResponseData from '../models/ResponseData';
import { setupServer } from 'msw/node';

function handleRequest({ params }: { params: PathParams }) {
  const { ids, per_page, page } = params;

  if (ids) {
    const item: ResponseData | undefined = fakeDataWithTwentyFourElems.find(
      (beer: ResponseData) => beer.id === parseInt(ids as string)
    );
    return item ? HttpResponse.json([item]) : HttpResponse.json([]);
  }

  const items = parseInt(
    (per_page as string[] | undefined)?.[0] ||
    (page as string[] | undefined)?.[0] ||
    '0'
  );

  if (items <= 6) {
    return HttpResponse.json(fakeDataWithSixElems);
  }

  if (items <= 12) {
    return HttpResponse.json(fakeDataWithTwelveElems);
  }

  return HttpResponse.json(fakeDataWithTwentyFourElems);
}

const handlers = [
  http.get('v2/beer', handleRequest),
  http.get('main', handleRequest),
];

const mswServer = setupServer(...handlers);

export default mswServer;
