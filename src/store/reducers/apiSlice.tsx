import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getData: build.query({
      query: (search) => `/?name=${search}`,
    }),
    getCard: build.query({
      query: (id = 0) => `/${id}`,
    }),
  }),
});

export const { useGetDataQuery, useGetCardQuery } = dataApi;
