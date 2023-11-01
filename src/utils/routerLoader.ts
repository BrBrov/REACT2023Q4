import fetchData from './RequestData';
import ResponseData from '../models/ResponseData';

export default async function routerLoader({
  request,
}: {
  request: Request;
}): Promise<Array<ResponseData>> {
  const url: URL = new URL(request.url);
  const page: number | null = url.searchParams.get('page')
    ? parseInt(url.searchParams.get('page')!)
    : null;
  fetchData.setPage(page);
  return await fetchData.getResponseData(url.searchParams.get('search'));
}
