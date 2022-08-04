import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api-mobilespecs.azharimm.site/v2/";
// const apiToken = "e76067df14d54a96982839afd8ee5dab";
export const serviceApi = createApi({
  reducePath: "serviceApi",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => ({
        url: `brands`,
      }),
    }),
    getBrand: builder.query({
      query: ({ brand, page }) => ({
        url: `brands/${brand}?page=${page}`,
      }),
    }),
    getLatests: builder.query({
      query: () => ({
        url: `latest`,
      }),
    }),
    getDetail: builder.query({
      query: (phone) => ({
        url: `/${phone}`,
      }),
    }),
    getFavorit: builder.query({
      query: (query) => ({
        url: `/${query}`,
      }),
    }),
    getSearch: builder.query({
      query: (query) => ({
        url: `/search?query=${query}`,
      }),
    }),
  }),
});

export const {
  useGetBrandsQuery,
  useGetBrandQuery,
  useGetLatestsQuery,
  useGetDetailQuery,
  useGetFavoritQuery,
  useGetSearchQuery,
} = serviceApi;
