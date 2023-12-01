import { createSlice } from "@reduxjs/toolkit";

import { IRootState } from "@/shared";

import { SLICE_INIT } from "./constant";
import { IUser } from "./interfaces";

const userSlice = createSlice({
  name: "user",
  initialState: SLICE_INIT as IUser,
  reducers: {
    setUser: (state, action) => {
      const { name, restaurants, permissions, roles } = action.payload;

      state.name = name;
      state.restaurants = restaurants;
      state.permissions = permissions;
      state.roles = roles;
    },
  },
  extraReducers: (builder) => {
    builder;

    // login
    // .addCase(login.pending, (state) => {
    //   // state.loading = true;
    // })
    // .addCase(login.fulfilled, (state, action) => {
    //   // state.loading = false;
    //   // state.isAuth = true;
    //   // state.error = null;
    // })
    // .addCase(login.rejected, (state, action) => {
    //   console.log("slcicee", action.error);

    //   // state.loading = false;
    //   // state.isAuth = false;
    //   // state.error = action.error.message;
    // });
  },
});

// Actions

export const userAction = userSlice.actions;

// Selectors

export const selectUser = (state: IRootState<any>) => state.user;

// Reducer

export const userReducer = userSlice.reducer;
