import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../page/Products/index";
import cartReducer from "../page/Cart/index";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createTransform } from "redux-persist";
import { Product } from "../page/Products/Products.slice";
import detailReduser from "../page/Detail/index";

// export const persistConfig = {
//   key: "root",
//   // blacklist: ["products", "detail"],
//   storage,
// };

// const reduser = combineReducers({
//   products: productsReduser,
//   cart: cartReducer,
//   detail: detailReduser,
// });

// const persistedReducer = persistReducer(persistConfig, reduser);

// export const store = configureStore({
//   reducer: {
//     persistedReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    products: productsReduser,
    cart: cartReducer,
    detail: detailReduser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
