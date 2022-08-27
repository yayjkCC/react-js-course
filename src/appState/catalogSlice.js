import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const fetchProducts = createAsyncThunk(
  'catalog/fetchProducts',
  async () => {
    setTimeout(() => {}, 2000);
    return `{
      "name": "maggi",
      "price": 50
    }`
  }
)

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProducts: (state, products) => {
      state.products = products
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [JSON.parse(action.payload)]
    })
  },
})

export const { setProducts } = catalogSlice.actions

export default catalogSlice.reducer