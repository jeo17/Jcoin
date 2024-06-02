// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export enum State {
  Hot = "HOT",
  SoldOut = "SOLD OUT",
  BestDeals = "BEST DEALS",
  Sale = "SALE",
}

export interface products {
  id: string;
  sku: string;
  imageUrl: string;
  desc: string;
  price: string;
  state?: State | null;
  coupon: number | null;
  rating?: number;
  nbrOfPeople?: number;
  colores?: string[];
  features?: Record<string, any>;
  quantity?: number;
}

// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getBestDeals: builder.query<products, string>({
      query: (name) => `TodayBestDealsData`,
    }),
    getProducts: builder.query<products, string>({
      query: (name) => `ProductsData`,
    }),
    getMyAccessories: builder.query<products, string>({
      query: (name) => `AccessoriesData`,
    }),
    getTrendCategories: builder.query<products, string>({
      query: (name) => `TrendProductsData`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBestDealsQuery,
  useGetProductsQuery,
  useGetMyAccessoriesQuery,
  useGetTrendCategoriesQuery,
} = dataApi;
