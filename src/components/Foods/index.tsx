import { ContainerCard, Title, Text, ImgProduct } from './styles'
import Tag from '../Tag'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  onClick: () => void
}

export const reduceDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 121) + '...'
  }
  return description
}

const Foods = ({ foto, nome, descricao, onClick }: Props) => {
  return (
    <ContainerCard>
      <ImgProduct src={foto} alt={foto} />
      <Title>{nome}</Title>
      <Text>{reduceDescription(descricao)}</Text>
      <Tag
        type="button"
        use="product"
        bgColor="secondary"
        fontColor="secondary"
        onClick={onClick}
      >
        Mais detalhes
      </Tag>
    </ContainerCard>
  )
}
export default Foods
