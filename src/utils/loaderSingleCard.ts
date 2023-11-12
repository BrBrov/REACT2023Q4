import ResponseData from '../models/ResponseData';
import RequestData from './RequestData';
import { defer } from 'react-router-dom';

async function loaderSingleCard({
  request,
}: {
  request: Request;
}): Promise<object> {
  const fetchData = new RequestData(request.url);

  if (fetchData.checkIdsParam()) {
    const data: ResponseData | null = await fetchData.getSingleCardData();
    return defer({ data: data });
  }

  return { data: undefined };
}

export default loaderSingleCard;
