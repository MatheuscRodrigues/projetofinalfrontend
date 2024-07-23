import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<RestaurantsType[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantSelected: builder.query<RestaurantsType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantListQuery, useGetRestaurantSelectedQuery } = api
export default api
