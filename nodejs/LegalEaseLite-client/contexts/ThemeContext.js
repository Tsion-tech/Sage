import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const defaultTheme = {
    background: "#f0f4ff",
    card: "#fff",
    text: "#1a1a1a",
    highlight1: "#6a11cb",
    highlight2: "#2575fc",
    muted: "#555",
    shadow: "#999",
  };

  const themes = {
    dark: {
      background: "#121212",
      card: "#1e1e2f",
      text: "#fff",
      highlight1: "#6a11cb",
      highlight2: "#2575fc",
      muted: "#999",
      shadow: "#000",
    },
    teal: {
      background: "#e0f7fa",
      card: "#b2ebf2",
      text: "#004d40",
      highlight1: "#00796b",
      highlight2: "#00bfa5",
      muted: "#00796b",
      shadow: "#004d40",
    },
    sunset: {
      background: "#fff3e0",
      card: "#ffe0b2",
      text: "#e65100",
      highlight1: "#ff6f00",
      highlight2: "#ff8f00",
      muted: "#e65100",
      shadow: "#bf360c",
    },
  };

  const [activeTheme, setActiveTheme] = useState(null); // null = default

  const theme = activeTheme ? themes[activeTheme] : defaultTheme;

  const toggleTheme = (name) => setActiveTheme(name);

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, toggleTheme, defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
