import RequestData from './RequestData';
import { defer } from 'react-router-dom';
import ResponseData from '../models/ResponseData';
import ServerError from '../models/ServerError';

async function loaderSingleCard({
  request,
}: {
  request: Request;
}): Promise<object | null> {
  const fetchData = new RequestData();
  const url: URL = new URL(request.url);
  const id: string | null = url.searchParams.get('ids');

  if (!id) return null;

  const data: Array<ResponseData> | ServerError =
    await fetchData.getSingleData(id);

  if ('statusCode' in data) {
    const error = new Error(data.message);
    error.name = data.error;
    error.cause = data.statusCode;

    throw error;
  }

  return defer({ card: data });
}

export default loaderSingleCard;
