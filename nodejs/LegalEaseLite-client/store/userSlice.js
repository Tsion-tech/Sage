// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: '',
  userId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.userId = action.payload.userId || null;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = '';
      state.userId = null;
    },
    updateUser: (state, action) => {
      if (action.payload.email) state.email = action.payload.email;
      if (action.payload.userId) state.userId = action.payload.userId;
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
