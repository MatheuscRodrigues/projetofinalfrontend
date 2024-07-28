import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Foods[]
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
    add: (state, action: PayloadAction<Foods>) => {
      const p = state.items.find((pe) => pe.id === action.payload.id)
      if (!p) {
        state.items.push(action.payload)
      } else {
        alert('Pedido já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((f) => f.id !== action.payload)
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
