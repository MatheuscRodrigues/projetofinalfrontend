import {
  ContainerCard,
  Rating,
  Title,
  TitleAndRating,
  Text,
  ImgProduct,
  Infos
} from './styles'
import star from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  image: string
  title: string
  text: string
  infos: string[]
  route: string
}

const Restaurants = ({ image, title, text, infos, route }: Props) => {
  return (
    <ContainerCard>
      <ImgProduct src={image} alt={image} />
      <Infos>
        {infos.map((info) => (
          <Tag
            type="tag"
            size="small"
            key={info}
            bgColor="primary"
            fontColor="primary"
            to={route}
          >
            {info}
          </Tag>
        ))}
      </Infos>
      <TitleAndRating>
        <Title>{title}</Title>
        <Rating>
          <p>4.9</p>
          <img src={star} />
        </Rating>
      </TitleAndRating>
      <Text>{text}</Text>
      <Tag type="button" bgColor="primary" to={route} fontColor="primary">
        Saiba Mais
      </Tag>
    </ContainerCard>
  )
}
export default Restaurants
