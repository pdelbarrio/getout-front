import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

type useThemeReturn = {
  theme: string;
  toggleTheme: () => void;
};

export function useTheme(): useThemeReturn {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
}
