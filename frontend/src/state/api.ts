import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetOrdersResponse, GetProductsResponse, getCategoryResponse } from '../types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ['Kpi', 'Products', 'Category', 'Orders'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'statistics/KPI',
      providesTags: ['Kpi']
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => 'products',
      providesTags: ['Products']
    }),
    getProduct: build.query<GetProductsResponse, string>({
      query: (id) => `products/byId/${id}`,
      providesTags: ['Products']
    }),
    updateProduct: build.mutation<GetProductsResponse, FormData>({
      query: (product) => ({
        url: `products/${product.get('id')}`,
        method: 'PUT',
        body: product
      }),
      invalidatesTags: ['Products']
    }),
    deleteProduct: build.mutation<GetProductsResponse, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Products']
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
    setProducts: build.mutation<GetProductsResponse, FormData>({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product
      }),
      invalidatesTags: ['Products']
    }),
    getOrders: build.query<Array<GetOrdersResponse>, void>({
      query: () => 'orders',
      providesTags: ['Orders']
    }),
    allUsers: build.query<Array<GetOrdersResponse>, void>({
      query: () => 'orders/allUsers',
      providesTags: ['Orders']
    })
  })
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useSetCategoryMutation,
  useGetCategoriesQuery,
  useSetProductsMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetOrdersQuery,
  useAllUsersQuery
} = api;
