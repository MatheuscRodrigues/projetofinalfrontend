import {
  BannerContainer,
  HeaderRestaurant,
  RestaurantName,
  RestaurantType
} from './styles'
import logo from '../../assets/images/logo.svg'
import heroHeader from '../../assets/images/heroImage.png'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  restaurant: RestaurantsType
}

const RestaurantBanner = ({ restaurant }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderRestaurant style={{ backgroundImage: `url(${heroHeader})` }}>
        <div className="container">
          <a href="/">
            <p>Restaurantes</p>
          </a>
          <a href="/">
            <img src={logo} alt="logo efood" />
          </a>
          <p onClick={openCart}>{items.length} Produto(s) no carrinho</p>
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
}

export default RestaurantBanner
