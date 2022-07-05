import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import axios from "axios";
import { Product } from "../Products/Products.slice";

export interface DetailState {
  detail: Product;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: DetailState = {
  detail: {
    id: 0,
    title: "Title",
    price: "0",
    category: "product",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://picsum.photos/200/300",
    rating: { rate: 5, count: 4 },
  },
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
    builder.addCase(getDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDetails.fulfilled, (state, { payload }) => {
      state.detail = payload;
      state.status = "idle";
    });
    builder.addCase(getDetails.rejected, (state) => {
      state.error = "error";
      state.status = "failed";
    });
  },
});

export default detailSlise.reducer;

export const selectDetails = (state: RootState) => {
  state.detail.detail as Product;
};
