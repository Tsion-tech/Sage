import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
    sound: true,
    location: true,
    autoUpdate: true,
  },
  reducers: {
    toggleDarkMode: (state) => { state.darkMode = !state.darkMode; },
    toggleSound: (state) => { state.sound = !state.sound; },
    toggleLocation: (state) => { state.location = !state.location; },
    toggleAutoUpdate: (state) => { state.autoUpdate = !state.autoUpdate; },
  },
});

export const { toggleDarkMode, toggleSound, toggleLocation, toggleAutoUpdate } = themeSlice.actions;
export default themeSlice.reducer;
