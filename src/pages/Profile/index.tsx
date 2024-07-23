import { useParams } from 'react-router-dom'
import FoodList from '../../components/FoodList'
import RestaurantBanner from '../../components/RestaurantBanner'
import { useGetRestaurantSelectedQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id)

  if (!restaurantFood) {
    return <div></div>
  }

  return (
    <>
      <RestaurantBanner restaurant={restaurantFood} />
      <FoodList foodsType={restaurantFood} />
    </>
  )
}

export default Profile
