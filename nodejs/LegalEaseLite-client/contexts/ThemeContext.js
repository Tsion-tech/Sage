import React, { createContext, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, toggleSound, toggleLocation, toggleAutoUpdate } from '../redux/themeSlice';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleDarkMode: () => dispatch(toggleDarkMode()),
      toggleSound: () => dispatch(toggleSound()),
      toggleLocation: () => dispatch(toggleLocation()),
      toggleAutoUpdate: () => dispatch(toggleAutoUpdate())
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
