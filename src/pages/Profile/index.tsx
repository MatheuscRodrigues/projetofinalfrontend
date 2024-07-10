import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodList from '../../components/FoodList'
import RestaurantBanner from '../../components/RestaurantBanner'
import { RestaurantsType } from '../Home/index'

const Profile = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<RestaurantsType | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        const foundRestaurant = data.find(
          (rest: RestaurantsType) => rest.id === Number(id)
        )
        setRestaurant(foundRestaurant)
      })
  }, [id])

  if (!restaurant) {
    return <div>Loading...</div>
  }

  return (
    <>
      <RestaurantBanner restaurant={restaurant} />
      <FoodList key={restaurant.id} foodsType={restaurant.cardapio} />
    </>
  )
}

export default Profile
