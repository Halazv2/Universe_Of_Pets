import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetProductsResponse, getCategoryResponse } from '../types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ['Kpi', 'Products', 'Category'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'statistics/KPI',
      providesTags: ['Kpi']
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => 'products',
      providesTags: ['Products']
    }),
    setCategory: build.mutation<getCategoryResponse, { name: string; description: string }>({
      query: (category) => ({
        url: 'category',
        method: 'POST',
        body: { ...category }
      }),
      invalidatesTags: ['Category']
    }),
    getCategories: build.query<Array<getCategoryResponse>, void>({
      query: () => 'category',
      providesTags: ['Category']
    }),
    setProducts: build.mutation<
      GetProductsResponse,
      {
        name: string;
        description: string;
        price: number;
        category: Array<string>;
        images: Array<string>;
      }
    >({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: { ...product }
      }),
      invalidatesTags: ['Products']
    })
  })
});

export const { useGetKpisQuery, useGetProductsQuery, useSetCategoryMutation, useGetCategoriesQuery, useSetProductsMutation } = api;
