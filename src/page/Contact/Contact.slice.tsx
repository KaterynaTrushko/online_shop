import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useTheme } from "styled-components";
import { deflate } from "zlib";
import { RootState } from "../../store/store";

export interface User {
  name: string;
  numer: number | null;
  email: string;
  subject: string;
  message: string;
}

interface ContactState {
  users: User[];
  status: "succeeded" | "failed";
}

const initialState: ContactState = {
  users: [],
  status: "failed",
};

const contactSlise = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        users: [action.payload, ...state.users],
        status: "succeeded",
      };
    },
  },
});

export default contactSlise.reducer;

export const { addUser } = contactSlise.actions;

// export const selectUsers = (store: RootState) => {
//   store.users.users;
// };
