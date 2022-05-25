import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState(item || initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue] as const;
};
