import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import QueryParser from '../../utils/QueryParser';
import ResponseData from '../../models/ResponseData';
import ServerError from '../../models/ServerError';

const queryApi = createApi({
  reducerPath: 'card',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.punkapi.com/v2/beers',
  }),
  endpoints: (build) => ({
    getSingleCard: build.query<ResponseData, string>({
      query: (id: string | null) => {
        if (!id) return {} as FetchArgs;

        return `?ids=${id}`;
      },
    }),
    getAllCards: build.query<
      Array<ResponseData> | ServerError | null,
      QueryParser
    >({
      query: (arg: QueryParser) => {
        let url = '?page=';
        url += arg.page ? arg.page : 1;
        url += '&per_page=';
        url += arg.items ? arg.items : 6;
        url += arg.search ? `&beer_name=${arg.search}` : '';

        return url;
      },
    }),
  }),
});

export default queryApi;
