import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { PURGE } from "redux-persist";
import axios from "axios";
import { Product } from "../Products/Products.slice";

export interface DetailState {
  detail: Product | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: DetailState = {
  detail: null,
  status: "idle",
  error: "",
};

export const getDetails = createAsyncThunk<Product, number>(
  "detail/getDetailsById",
  async (id: number, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });

    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`,
      { cancelToken: source.token }
    );

    const data: Product = await response.data;
    return data;
  }
);

const detailSlise = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, { payload }) => {
      state.detail = payload;
      state.status = "loading";
    });
    builder.addCase(getDetails.rejected, (state) => {
      state.error = "error";
    });
  },
});

export default detailSlise.reducer;

export const selectDetails = (state: RootState) => {
  state.detail.detail as Product;
};
