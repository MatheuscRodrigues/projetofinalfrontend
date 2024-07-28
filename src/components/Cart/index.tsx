import { CartContainer, CartItem, Overlay, SideBar, TotalPrice } from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../FoodList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((total, atual) => {
      return (total += atual.preco)
    }, 0)
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>{priceFormat(item.preco)}</p>
              </div>
              <button type="button" onClick={() => removeFromCart(item.id)} />
            </CartItem>
          ))}
        </ul>
        <TotalPrice>
          Valor Total <span>{priceFormat(getTotalPrice())}</span>
        </TotalPrice>
        <Tag type="button" use="product">
          Continuar com a entrega
        </Tag>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
