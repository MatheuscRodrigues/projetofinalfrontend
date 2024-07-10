import Restaurants from '../Restaurants'
import { UlRestaurantList, ContainerList } from './styles'
import { RestaurantsType } from '../../pages/Home/'

export type Props = {
  restaurantsType: RestaurantsType[]
}

const RestaurantList = ({ restaurantsType }: Props) => {
  return (
    <div className="container">
      <ContainerList>
        <UlRestaurantList>
          {restaurantsType.map((r) => (
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
