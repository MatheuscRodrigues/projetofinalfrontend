import { CartContainer, CartItem, Overlay, SideBar, TotalPrice } from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, startCheckout } from '../../store/reducers/cart'
import Checkout from '../Checkout'
import { priceFormat } from '../../utils'

const Cart = () => {
  const { isOpen, items, isAddress } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const activeCheckout = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
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
        <Tag type="button" use="product" onClick={activeCheckout}>
          Continuar com a entrega
        </Tag>
        <Checkout checkoutStart={isAddress} totalPrice={getTotalPrice()} />
      </SideBar>
    </CartContainer>
  )
}

export default Cart
