import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../page/Products/index";
import cartReducer from "../page/Cart/index";
import usersReducer from "../page/Contact/index";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import detailReduser from "../page/Detail/index";

const reduser = combineReducers({
  products: productsReduser,
  cart: cartReducer,
  detail: detailReduser,
  user: usersReducer,
});

export const persistConfig = {
  key: "root",
  // blacklist: ["products", "detail"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reduser);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
