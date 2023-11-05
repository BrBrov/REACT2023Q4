import RequestData from './RequestData';
import ResponseData from '../models/ResponseData';
import { defer, redirect } from 'react-router-dom';
import ServerError from '../models/ServerError';

export default async function routerLoader({
  request,
}: {
  request: Request;
}): Promise<object | Response | null> {
  const fetchData = new RequestData();
  const url: URL = new URL(request.url);
  const sParams: URLSearchParams = url.searchParams;
  const search = sParams.get('search');
  const urlForRedirect = search ? `?page=1&search=${search}` : '?page=1';

  const pageEntered: string | null = sParams.get('page');

  if (pageEntered === null) return redirect(urlForRedirect);

  const page = parseInt(pageEntered);

  if (isNaN(page) || page < 1) {
    return redirect(urlForRedirect);
  }

  fetchData.setPage(page);
  const data: Array<ResponseData> | ServerError =
    await fetchData.getResponseData(url.searchParams.get('search'));

  if ('statusCode' in data) {
    const error = new Error(data.message);
    error.name = data.error;
    error.cause = data.statusCode;

    throw error;
  }

  if (!data.length && page > 1) return null;

  return defer({ data: data });
}
