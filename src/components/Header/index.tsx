import { ContainerHeader, Hero, Title } from './styles'

import heroImage from '../../assets/images/heroImage.png'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <header>
      <Hero style={{ backgroundImage: `url(${heroImage})` }}>
        <ContainerHeader>
          <a href="/">
            <img src={logo} alt="logo efood" />
          </a>
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </ContainerHeader>
      </Hero>
    </header>
  )
}

export default Header
