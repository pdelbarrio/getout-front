import { useState } from "react";

export const useToggle = (initialState: boolean) => {
  const [isToggled, setToggle] = useState<boolean>(initialState);
  const toggle = () => setToggle((prevState) => !prevState);
  // return [isToggled, toggle];
  return { isToggled, setToggle, toggle };
};
