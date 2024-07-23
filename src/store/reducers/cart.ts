import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: RestaurantsType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestaurantsType>) => {
      const itemToAdd = action.payload
      // Verifica se o item já está no carrinho
      const itemExists = state.items.some(
        (item) =>
          item.id === itemToAdd.id &&
          item.cardapio.some((cardapioItem) =>
            itemToAdd.cardapio.some(
              (newCardapioItem) => newCardapioItem.id === cardapioItem.id
            )
          )
      )

      if (itemExists) {
        alert('Item já está no carrinho.')
      } else {
        state.items.push(itemToAdd)
      }
    },
    remove: (
      state,
      action: PayloadAction<{ restaurantId: number; cardapioId: number }>
    ) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload.restaurantId) {
            // Filtra o item específico do cardápio para remover
            const updatedCardapio = item.cardapio.filter(
              (cardapioItem) => cardapioItem.id !== action.payload.cardapioId
            ) as [(typeof item.cardapio)[0]] // Mantém a tipagem consistente
            return {
              ...item,
              cardapio: updatedCardapio
            }
          }
          return item
        })
        .filter((item) => item.cardapio.length > 0) // Remove restaurantes com cardápio vazio
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
