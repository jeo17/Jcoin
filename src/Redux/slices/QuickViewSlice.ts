import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visibility: false,
  showenProduct:{}
}                          


export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        showDialog: (state) => {
        state.visibility = true
      },
      hideDialog: (state) => {
        state.visibility = false
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      setProduct: (state, action) => {
        state.showenProduct = action.payload
      },
    },
  })
  
  export const { showDialog, hideDialog,setProduct} = counterSlice.actions                                   
                                 
  export default counterSlice.reducer