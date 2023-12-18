import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "https://gumzoai.el.r.appspot.com//api/v1/client";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getListData: builder.query({
      query: (query) => query,
    }),
    postListData: builder.mutation({
      query: ({ ...rest }) => ({ method: "POST", ...rest }),
    }),
    putListData: builder.mutation({
      query: ({ ...rest }) => ({ method: "PUT", ...rest }),
    }),
    deleteListData: builder.mutation({
      query: (url) => ({ url, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetListDataQuery,
  usePostListDataMutation,
  usePutListDataMutation,
  useDeleteListDataMutation,
} = apiSlice;
