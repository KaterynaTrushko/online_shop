import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { PURGE } from "redux-persist";
import axios, { AxiosResponse } from "axios";
import { DetailState } from "../Detail/Details.slice";
import { title } from "process";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: { rate: number; count: number };
}

interface ProductState {
  products: {
    data: Array<Product>;
    status: "idle" | "loading" | "succeeded" | "failed";
  };
  filterTitle: {
    data: Array<Product>;
    status: "idle" | "loading" | "succeeded" | "failed";
  };
  filterCategory: {
    data: Array<Product>;
    status: "idle" | "loading" | "succeeded" | "failed";
  };
}

const initialState: ProductState = {
  products: {
    data: [],
    status: "idle",
  },
  filterTitle: {
    data: [],
    status: "idle",
  },
  filterCategory: {
    data: [],
    status: "idle",
  },
};

export const productsAsync = createAsyncThunk<Product[]>(
  "products/productsAsync",
  async (thunkApi) => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    const data = await response.data;
    return data as Product[];
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchByTitle: (state, action: PayloadAction<string>) => {
      const arr = state.products.data;
      return {
        ...state,
        filterTitle: {
          ...state.filterTitle,

          data: [
            ...arr.filter((el) =>
              el.title.toLowerCase().includes(action.payload.toLowerCase())
            ),
          ],
          status: "succeeded",
        },
      };
    },
    searchByCategory: (state, action: PayloadAction<string>) => {
      const arr = state.products.data;
      return {
        ...state,
        filterCategory: {
          ...state.filterCategory,

          data: [...arr.filter((el) => el.category === action.payload)],
          status: "succeeded",
        },
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(productsAsync.pending, (state) => {
        state.products.status = "loading";
      })
      .addCase(productsAsync.fulfilled, (state, action) => {
        state.products.status = "succeeded";
        state.products.data = action.payload;
      })
      .addCase(productsAsync.rejected, (state) => {
        state.filterTitle.status = "failed";
      });
  },
});

export default productSlice.reducer;

export const { searchByTitle } = productSlice.actions;

export const { searchByCategory } = productSlice.actions;

export const selectProducts = (state: RootState) =>
  state.products.products.data;

export const selectSearchTyTitle = (state: RootState) =>
  state.products.filterTitle;

export const selectByCategory = (state: RootState) =>
  state.products.filterTitle.data;
// IDLE: The request hasn't started yet
// PENDING: The request is in flight, and hasn't finished
// FAILED: The request finished, and failed
// SUCCEEDED: The request finished, and was successful
