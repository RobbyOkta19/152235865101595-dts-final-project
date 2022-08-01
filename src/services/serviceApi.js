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
      query: (brand) => ({
        url: `brands/${brand}`,
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
  }),
});

export const {
  useGetBrandsQuery,
  useGetBrandQuery,
  useGetLatestsQuery,
  useGetDetailQuery,
} = serviceApi;
