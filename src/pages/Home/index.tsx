import RestaurantsList from '../../components/RestaurantsList'
import RestaurantsClass from '../../models/Restaurants'

import dolce_vita from '../../assets/images/dolce_vita.png'
import hioki_sushi from '../../assets/images/hioki_sushi.png'
import Header from '../../components/Header'

const restaurantList: RestaurantsClass[] = [
  {
    id: 1,
    image: dolce_vita,
    title: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana', 'Promoção -10%'],
    route: '/profile'
  },
  {
    id: 2,
    image: hioki_sushi,
    title: 'Hioki Sushi',
    text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa', 'Destaque da semana'],
    route: ''
  },
  {
    id: 3,
    image: dolce_vita,
    title: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana', 'Promoção -10%'],
    route: '/profile'
  },
  {
    id: 4,
    image: hioki_sushi,
    title: 'Hioki Sushi',
    text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa', 'Destaque da semana'],
    route: ''
  },
  {
    id: 5,
    image: dolce_vita,
    title: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana', 'Promoção -10%'],
    route: '/profile'
  },
  {
    id: 6,
    image: hioki_sushi,
    title: 'Hioki Sushi',
    text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa', 'Destaque da semana'],
    route: ''
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurantsType={restaurantList} />
  </>
)

export default Home
