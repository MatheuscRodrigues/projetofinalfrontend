import logo from '../../assets/images/logo.svg'
import redeSociais from '../../assets/images/redes-sociais.svg'
import { ContainerFooter, LogoContainer, TextFooter } from './styles'

const Footer = () => {
  return (
    <ContainerFooter>
      <a href="/">
        <LogoContainer src={logo} alt="logo efood" />
      </a>
      <img src={redeSociais} />
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </TextFooter>
    </ContainerFooter>
  )
}

export default Footer
