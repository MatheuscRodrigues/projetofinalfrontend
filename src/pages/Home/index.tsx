import { useEffect, useState } from 'react'
import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

export type FoodItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantsType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: FoodItem[]
}

const Home = () => {
  const [restaurantList, setRestaurantList] = useState<RestaurantsType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantList(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restaurantsType={restaurantList} />
    </>
  )
}

export default Home
