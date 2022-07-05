import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { type Product } from "../Products/Products.slice";

export interface Cart extends Product {
  amount: number;
}

interface CartState {
  items: Cart[];
  totalAmount: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const indexProduct = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexProduct !== -1) {
        state.items[indexProduct].amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
    decriseProductFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
      return;
    },
    getCartTotal: (state) => {
      let { totalAmount, totalPrice } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = Number(price) * amount;

          cartTotal.totalPrice += itemTotal;
          cartTotal.totalAmount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalPrice: 0,
        }
      );
      state.totalAmount = totalAmount;
      state.totalPrice = parseInt(totalPrice.toFixed(0));
    },
  },
});

export const {
  addProductToCart,
  decriseProductFromCart,
  removeItemFromCart,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartSelecror = (state: RootState) => state.cart.items;
export const getTotalPrice = (state: RootState) => state.cart.totalPrice;
export const getTotalAmount = (state: RootState) => state.cart.totalAmount;
