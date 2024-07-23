import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

import { useGetRestaurantListQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantList } = useGetRestaurantListQuery()

  if (!restaurantList) {
    return <h4></h4>
  }
  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurantList} />
    </>
  )
}

export default Home
