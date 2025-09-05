// store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dark: false, // default to light theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.dark = !state.dark;
    },
    setTheme: (state, action) => {
      state.dark = action.payload; // explicitly set true or false
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
