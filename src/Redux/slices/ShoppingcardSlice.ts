import { createSlice } from "@reduxjs/toolkit";
import { products } from "../dataApi";

export interface ShoppingCartState {
  card: products[];
}

const initialState: ShoppingCartState = {
  card: [],
};

export const shoppingcardSlice = createSlice({
  name: "shoppingcard",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    removeFromCard: (state, action) => {
      state.card = state.card.filter(
        (product) => product.id !== action.payload
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToCard: (state, action) => {
      const existingProduct = state.card.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.card.push(action.payload);
      }
    },

    decrementOrRemoveFromCard: (state, action) => {
      const productIndex = state.card.findIndex(
        (product) => product.id === action.payload
      );
      if (productIndex !== -1) {
        if (state.card[productIndex].quantity! > 1) {
          state.card[productIndex].quantity! -= 1;
        } else {
          state.card.splice(productIndex, 1);
        }
      }
    },

    incrementQuantityCard: (state, action) => {
      const productIndex = state.card.findIndex(
        (product) => product.id === action.payload
      );
      if (productIndex !== -1) {
        state.card[productIndex].quantity! += 1;
      }
    },


    dischargeTheCard: (state) => {
       state.card = []
    },
    
  },
});

export const {
  addToCard,
  removeFromCard,
  decrementOrRemoveFromCard,
  incrementQuantityCard,
  dischargeTheCard,
} = shoppingcardSlice.actions;

export default shoppingcardSlice.reducer;
