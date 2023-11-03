import RequestData from './RequestData';
import { defer } from 'react-router-dom';

async function loaderSingleCard({
  request,
}: {
  request: Request;
}): Promise<object | null> {
  const fetchData = new RequestData();
  const url: URL = new URL(request.url);
  const id: string | null = url.searchParams.get('ids');

  if (!id) return null;

  return defer({ card: await fetchData.getSingleData(id) });
}

export default loaderSingleCard;
