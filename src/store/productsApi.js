import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    baseQuery: fetchBaseQuery({ baseUrl: "https://shop-toolkit.herokuapp.com/" }),
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => `products`,
      }),
    }),
  });

  export const { useGetAllProductsQuery } = productsApi;