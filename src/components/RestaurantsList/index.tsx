import Restaurants from '../Restaurants'
import { UlRestaurantList, ContainerList } from './styles'

export type Props = {
  restaurants: RestaurantsType[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <div className="container">
      <ContainerList>
        <UlRestaurantList>
          {restaurants.map((r) => (
            <Restaurants
              key={r.id}
              capa={r.capa}
              titulo={r.titulo}
              descricao={r.descricao}
              tipo={r.tipo}
              destacado={r.destacado}
              avaliacao={r.avaliacao}
              id={r.id}
              restaurantToLink={`restaurantes/${r.id}`}
            />
          ))}
        </UlRestaurantList>
      </ContainerList>
    </div>
  )
}

export default RestaurantList
