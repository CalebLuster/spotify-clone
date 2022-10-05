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
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,}),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`,}),
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`,}),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`,}),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`,}),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`,}),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetSongsByCountryQuery, useGetSongsByGenreQuery, useGetSongsBySearchQuery } = shazamCoreApi;
