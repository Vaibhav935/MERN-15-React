import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("log user")) || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state,action) => {
        state.user = action.payload
    }
  },
});

export const { setUser,logout } = authSlice.actions;

export default authSlice.reducer;
