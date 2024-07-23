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

  const getTotalPrice = (items: RestaurantsType[]) => {
    return items.reduce((total, atual) => {
      const itemTotal = atual.cardapio.reduce(
        (subTotal, cardapioAtual) => subTotal + cardapioAtual.preco,
        0
      )
      return total + itemTotal
    }, 0)
  }

  const removeFromCart = (restaurantId: number, cardapioId: number) => {
    dispatch(remove({ restaurantId, cardapioId }))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) =>
            item.cardapio.map((cardapioItem) => (
              <CartItem key={cardapioItem.id}>
                <img src={cardapioItem.foto} alt="" />
                <div>
                  <h3>{cardapioItem.nome}</h3>
                  <p>{priceFormat(cardapioItem.preco)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id, cardapioItem.id)}
                />
              </CartItem>
            ))
          )}
        </ul>
        <TotalPrice>
          Valor Total <span>{priceFormat(getTotalPrice(items))}</span>
        </TotalPrice>
        <Tag type="button" use="product">
          Continuar com a entrega
        </Tag>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
