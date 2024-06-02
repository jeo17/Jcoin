import { createSlice } from "@reduxjs/toolkit";
import { products } from "../dataApi";



export interface ShoppingCartState {
  CompareCard: products[];
}

const initialState: ShoppingCartState = {
  CompareCard: [],
};

export const compareSlice = createSlice({
  name: "compare",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    removeFromCompare: (state, action) => {
        state.CompareCard = state.CompareCard.filter(product => product.id !== action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToCompare: (state, action) => {
        const existingProduct = state.CompareCard.find(product => product.id === action.payload.id);
        if (!existingProduct) {
            state.CompareCard.push(action.payload);
        } 
      },
}
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;

export default compareSlice.reducer;
