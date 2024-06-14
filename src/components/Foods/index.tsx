import { ContainerCard, Title, Text, ImgProduct } from './styles'
import Tag from '../Tag'

type Props = {
  image: string
  title: string
  text: string
}

const Foods = ({ image, title, text }: Props) => {
  return (
    <ContainerCard>
      <ImgProduct src={image} alt={image} />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Tag
        type="button"
        use="product"
        bgColor="secondary"
        fontColor="secondary"
      >
        Adicionar ao Carrinho
      </Tag>
    </ContainerCard>
  )
}
export default Foods
