import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OneCharterDate } from "pages/MainPage/MainPage";

type CreateApiType = {
  info: {
    count: number;
    pages: number;
    next: string;
  };
  results: OneCharterDate[];
};

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://rickandmortyapi.com/api/character/`,
  }),
  endpoints: (build) => ({
    getCard: build.query<CreateApiType, string>({
      query: (name) => `?name=${name}`,
    }),
  }),
});

export const { useGetCardQuery } = cardApi;
