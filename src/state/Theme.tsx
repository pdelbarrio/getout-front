import React, { createContext, useContext } from "react";
import { useTheme } from "../hooks";

export type ThemeContextType = {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
};

const initialState = {
  theme: "dark",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const ThemeStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
