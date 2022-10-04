import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ff608300a6msh4b558e1f2386314p1bc2b0jsn712d9dfc4e61"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`,}),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`,}),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery } = shazamCoreApi;
