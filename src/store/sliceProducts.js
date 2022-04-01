import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const prodFetch = createAsyncThunk(
  "products/prodFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://622f13593ff58f023c150843.mockapi.io/test/shop-filter1");
      return res.data;
    } catch (error) {
        return rejectWithValue('ошибка при запросе на Api')
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    // featured:[],
    status: null,
    error:null,
  },
  reducers: {
    
  },
  extraReducers: {
    [prodFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [prodFetch.fulfilled]: (state, action) => {
      state.status = "succes";
      state.items = action.payload;
    
    },
    [prodFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload
    },
  },
});

export const {featuredFilter} = productSlice.actions

export default productSlice.reducer;
