import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from '../types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ['Kpi'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'statistics/KPI',
      providesTags: ['Kpi']
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => 'products',
      providesTags: ['Kpi']
    })
  })
});

export const { useGetKpisQuery } = api;
