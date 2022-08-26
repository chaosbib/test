import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const baseUrl = process.env.REACT_APP_API || 'http://localhost:8181/api'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    mode: 'cors',
    prepareHeaders: async (headers) => {
      headers.set('Authorization', `Bearer ${Cookies.get('token')}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({

    login: builder.mutation({
      query: () => ({
        url: '/login',
        method: 'POST'
      })
    }),

    logout: builder.mutation({
      query: ()  => ({
        url: '/logout',
        method: 'POST'
      })
    })
  })
})

export const {
  useLoginMutation,
  useLogoutMutation
} = authApi