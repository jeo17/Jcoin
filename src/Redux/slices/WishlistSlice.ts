import { createSlice } from "@reduxjs/toolkit";
import { products } from "../dataApi";

export interface ShoppingCartState {
  WishlistCard: products[];
}

const initialState: ShoppingCartState = {
  WishlistCard: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    removeFromWishlist: (state, action) => {
      state.WishlistCard = state.WishlistCard.filter(
        (product) => product.id !== action.payload
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToWishlist: (state, action) => {
      const existingProduct = state.WishlistCard.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.WishlistCard.push(action.payload);
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
