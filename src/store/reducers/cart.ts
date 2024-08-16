import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Foods[]
  isOpen: boolean
  isAddress: boolean
  isPayment: boolean
  isConfirmed: boolean
  isCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isAddress: false,
  isPayment: false,
  isConfirmed: false,
  isCart: true
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
    },
    startCheckout: (state) => {
      state.isConfirmed = false
      state.isAddress = true
      state.isPayment = false
    },
    backtoCart: (state) => {
      state.isAddress = false
      state.isPayment = false
      state.isConfirmed = false
      state.isOpen = true
    },
    payment: (state) => {
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = true
    },
    confirmed: (state) => {
      state.isConfirmed = true
      state.isAddress = false
      state.isPayment = true
    },
    closeAndFinish: (state) => {
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = false
      state.isOpen = false
      state.items = []
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  startCheckout,
  backtoCart,
  payment,
  confirmed,
  closeAndFinish
} = cartSlice.actions
export default cartSlice.reducer
