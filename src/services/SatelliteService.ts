import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { LocationRequest, PeopleRequest } from "../type";


export const satelliteAPI = createApi({
  reducerPath: 'satelliteAPI',
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.open-notify.org" }),
  endpoints: (build) => ({
    fetchLocation: build.query<LocationRequest, string>({
      query: () => ({
        url: "/iss-now.json"
      })
    }),
    fetchPeople: build.query<PeopleRequest, string>({
      query: () => ({
        url: "/astros.json"
      })
    })
  })
})