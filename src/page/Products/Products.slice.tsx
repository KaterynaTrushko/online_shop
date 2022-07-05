import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import axios, { AxiosResponse } from "axios";

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
}
const initialState: ProductState = {
  products: {
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
      const arr: Product[] = state.products.data;
      return {
        ...state,
        products: {
          ...state.products,
          data: [
            ...arr.filter((el) =>
              el.title
                .toLowerCase()
                .includes(action.payload.toLocaleLowerCase())
            ),
          ],
          status: "succeeded",
        },
      };
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        products: {
          ...state.products,
          data: [
            ...state.products.data.filter(
              (el) => el.category == action.payload
            ),
          ],
          status: "succeeded",
        },
      };
    },
    priceLow: (state) => {
      return {
        ...state,
        products: {
          ...state.products,
          data: [
            ...state.products.data
              .slice()
              .sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1)),
          ],
          status: "succeeded",
        },
      };
    },
    priceHigh: (state) => {
      return {
        ...state,
        products: {
          ...state.products,
          data: [
            ...state.products.data
              .slice()
              .sort((a, b) => (Number(b.price) > Number(a.price) ? 1 : -1)),
          ],
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
        state.products.status = "failed";
      });
  },
});

export default productSlice.reducer;

export const { searchByTitle } = productSlice.actions;
export const { filterByCategory } = productSlice.actions;
export const { priceLow } = productSlice.actions;
export const { priceHigh } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
