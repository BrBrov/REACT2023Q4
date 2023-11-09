import RequestData from './RequestData';
import ResponseData from '../models/ResponseData';
import { defer } from 'react-router-dom';
import ServerError from '../models/ServerError';

export default async function routerLoader({
  request,
}: {
  request: Request;
}): Promise<object> {
  const fetchData = new RequestData(request.url);

  if (!fetchData.checkQueryParams()) {
    const redirectURL = fetchData.getURLForRedirect();
    const data: ServerError = {
      statusCode: -1,
      message: redirectURL,
      error: 'Redirect',
    };

    return { data: data };
  }

  const data: Array<ResponseData> | ServerError =
    await fetchData.getResponseData();

  if ('statusCode' in data) {
    return { data: data };
  }

  if (!Array.isArray(data) || !data.length) return { data: null };

  return defer({ data: data });
}
