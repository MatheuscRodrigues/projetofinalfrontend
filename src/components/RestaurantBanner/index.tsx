import {
  BannerContainer,
  HeaderRestaurant,
  RestaurantName,
  RestaurantType
} from './styles'
import logo from '../../assets/images/logo.svg'
import { RestaurantsType } from '../../pages/Home'
import heroHeader from '../../assets/images/heroImage.png'

export type Props = {
  restaurant: RestaurantsType
}

const RestaurantBanner = ({ restaurant }: Props) => (
  <>
    <HeaderRestaurant style={{ backgroundImage: `url(${heroHeader})` }}>
      <div className="container">
        <a href="/">
          <p>Restaurantes</p>
        </a>
        <a href="/">
          <img src={logo} alt="logo efood" />
        </a>
        <p>0 Produto(s) no carrinho</p>
      </div>
    </HeaderRestaurant>
    <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <RestaurantType>{restaurant.tipo}</RestaurantType>
        <RestaurantName>{restaurant.titulo}</RestaurantName>
      </div>
    </BannerContainer>
  </>
)

export default RestaurantBanner
