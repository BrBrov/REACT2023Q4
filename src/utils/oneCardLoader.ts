import ResponseData from '../models/ResponseData';
import RequestData from './RequestData';

async function loaderSingleCard({
  request,
}: {
  request: Request;
}): Promise<Array<ResponseData> | null> {
  const fetchData = new RequestData();
  const url: URL = new URL(request.url);
  const id: string | null = url.searchParams.get('ids');

  if (!id) return null;

  return await fetchData.getSingleData(id);
}

export default loaderSingleCard;
