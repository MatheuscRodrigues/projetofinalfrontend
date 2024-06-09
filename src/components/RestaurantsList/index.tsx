import Restaurants from '../Restaurants'
import { UlRestaurantList, ContainerList } from './styles'
import RestaurantsClass from '../../models/Restaurants'

export type Props = {
  restaurantsType: RestaurantsClass[]
}

const RestaurantList = ({ restaurantsType }: Props) => {
  return (
    <div className="container">
      <ContainerList>
        <UlRestaurantList>
          {restaurantsType.map((r) => (
            <Restaurants
              key={r.id}
              image={r.image}
              title={r.title}
              text={r.text}
              infos={r.infos}
              route={r.route}
            />
          ))}
        </UlRestaurantList>
      </ContainerList>
    </div>
  )
}

export default RestaurantList
