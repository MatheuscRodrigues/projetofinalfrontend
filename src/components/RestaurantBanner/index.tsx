import bgImage from '../../assets/images/bg_image_restaurant.png'
import {
  BannerContainer,
  HeaderRestaurant,
  RestaurantName,
  RestaurantType
} from './styles'
import heroImage from '../../assets/images/heroImage.png'
import logo from '../../assets/images/logo.svg'

const RestaurantBanner = () => (
  <>
    <HeaderRestaurant style={{ backgroundImage: `url(${heroImage})` }}>
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
    <BannerContainer style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <RestaurantType>Italiana</RestaurantType>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </div>
    </BannerContainer>
  </>
)

export default RestaurantBanner
