import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Reply = {
  orderId: string
}
type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
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
    }),
    purchase: builder.mutation<Reply, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantListQuery,
  useGetRestaurantSelectedQuery,
  usePurchaseMutation
} = api

export default api
