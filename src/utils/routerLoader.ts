import RequestData from './RequestData';
import ResponseData from '../models/ResponseData';
import { redirect } from 'react-router-dom';

export default async function routerLoader({
  request,
}: {
  request: Request;
}): Promise<Array<ResponseData> | Response | null> {
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
  const data: Array<ResponseData> = await fetchData.getResponseData(
    url.searchParams.get('search')
  );

  if (!data.length && page > 1) return null;

  return data;
}
