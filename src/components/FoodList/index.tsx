import { ContainerList, UlFoodList } from './styles'
import FoodsClass from '../../models/Foods'
import Foods from '../Foods'

export type Props = {
  foodsType: FoodsClass[]
}

const FoodList = ({ foodsType }: Props) => {
  return (
    <div className="container">
      <ContainerList>
        <UlFoodList>
          {foodsType.map((r) => (
            <Foods key={r.id} image={r.image} title={r.title} text={r.text} />
          ))}
        </UlFoodList>
      </ContainerList>
    </div>
  )
}

export default FoodList
