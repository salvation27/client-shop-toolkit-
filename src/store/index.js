import { configureStore} from '@reduxjs/toolkit'
// import productReduser from './sliceProducts'
import cartReduser from './cartSlice'
import { productsApi } from './productsApi'

export const store = configureStore({
    reducer:{
      // products:productReduser,
      cart:cartReduser,
      [productsApi.reducerPath]:productsApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
    }
})