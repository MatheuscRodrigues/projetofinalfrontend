import {
  ContainerCard,
  Rating,
  Title,
  TitleAndRating,
  Text,
  ImgProduct,
  Infos,
  ButtonContainer
} from './styles'
import star from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  restaurantToLink: string
}

const Restaurants = ({
  capa,
  titulo,
  descricao,
  tipo,
  destacado,
  avaliacao,
  restaurantToLink
}: Props) => {
  return (
    <ContainerCard>
      <ImgProduct src={capa} alt={capa} />
      <Infos>
        {destacado ? (
          <>
            <Tag type="tag" size="small" bgColor="primary" fontColor="primary">
              Destaque da semana
            </Tag>
          </>
        ) : (
          ''
        )}

        <Tag
          type="tag"
          size="small"
          key={tipo}
          bgColor="primary"
          fontColor="primary"
        >
          {tipo}
        </Tag>
      </Infos>
      <TitleAndRating>
        <Title>{titulo}</Title>
        <Rating>
          <p>{avaliacao}</p>
          <img src={star} />
        </Rating>
      </TitleAndRating>
      <Text>{descricao}</Text>
      <ButtonContainer>
        <Tag
          type="button"
          bgColor="primary"
          fontColor="primary"
          to={restaurantToLink}
        >
          Saiba Mais
        </Tag>
      </ButtonContainer>
    </ContainerCard>
  )
}
export default Restaurants
