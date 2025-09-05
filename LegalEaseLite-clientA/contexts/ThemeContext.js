import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    background: isDark ? "#121212" : "#f0f4ff",
    card: isDark ? "#1e1e2f" : "#fff",
    text: isDark ? "#fff" : "#1a1a1a",
    highlight1: "#6a11cb", // purple
    highlight2: "#2575fc", // blue
    shadow: isDark ? "#000" : "#999"
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggle: () => setIsDark(!isDark) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
