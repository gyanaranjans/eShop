import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  useName: null,
  userID: null,
  phone: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      // console.log(action.payload);
      const { email, userName, userID, phone } = action.payload;
      state.isLoggedIn = true;
      state.email = email ?? " ";
      
      state.userName = userName ?? " ";
      state.userID = userID;
      state.phone = phone ?? " ";
    },
    REMOVE_ACTIVE_USER(state, action) {
      state.isLoggedIn = false;
      state.email = ' ';
      state.phone=' ';
      state.userName = null;
      state.userID = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email? state.auth.email: '';
export const setPhone = (state) => state.auth.phone? state.auth.phone: '';
export const selectUserName = (state) => state.auth.userName? state.auth.userName: '';
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
