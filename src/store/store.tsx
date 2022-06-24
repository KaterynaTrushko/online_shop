import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../page/Products/index";
import cartReducer from "../page/Cart/index";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createTransform } from "redux-persist";
import { type Product } from "../page/Products/index";
import thunk from "redux-thunk";

export const persistConfig = {
  key: "root",
  // blacklist: ["products"],
  storage,
};

const reduser = combineReducers({
  products: productsReduser,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reduser);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
