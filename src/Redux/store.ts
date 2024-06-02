import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dataApi } from './dataApi'
import counterReducer from './slices/QuickViewSlice'
import shoppingcardReducer from './slices/ShoppingcardSlice'
import compareReducer from './slices/CompareSlice'
import wishlistReducer from './slices/WishlistSlice'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [dataApi.reducerPath]: dataApi.reducer,
     counter: counterReducer,
     shoppingcard: shoppingcardReducer,
     compare: compareReducer,
     wishlist:wishlistReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)