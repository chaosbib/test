import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API || "http://localhost:8181/api"

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, mode: "cors" }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => ({
        url: "/users",
        method: "GET"
      }),
      providesTags: ['Users']
    })
  })
})

export const {
  useGetUsersQuery 
} = usersApi