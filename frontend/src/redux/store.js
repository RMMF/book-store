import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
})
