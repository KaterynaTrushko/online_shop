import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { PURGE } from "redux-persist";
import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export interface ProductState {
  value: Product[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProductState = {
  value: [],
  status: "idle",
};

type FetchTodosError = {
  message: string;
};

export const productsAsync = createAsyncThunk<
  Product[],
  number,
  { rejectValue: FetchTodosError }
>("products/productsAsync", async (a: number, thunkApi) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products?limit=${a}`
  );
  // Check if status is not okay:
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: "Failed to fetch todos.",
    });
  }
  const data = await response.data;
  return data as Product[];
});

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchByTitle: (state, action: PayloadAction<string>) => {
      state.value.filter(function (product) {
        return (
          product.title.toLowerCase().indexOf(action.payload.toLowerCase()) !==
          -1
        );
        console.log(state.value);
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(productsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(productsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { searchByTitle } = counterSlice.actions;
export default counterSlice.reducer;
export const selectCount = (state: RootState) =>
  state.persistedReducer.products.value;
