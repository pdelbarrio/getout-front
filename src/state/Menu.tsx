import React, { createContext, useContext } from "react";
import { useToggle } from "../hooks";

export type MenuContextType = {
  isMenuOpen: boolean;
  toggle: () => void;
  closeMenu: () => void;
  toggleMenu?: () => void;
};

const initialState = {
  isMenuOpen: false,
  toggle: () => {},
  closeMenu: () => {},
};

export const MenuContext = createContext<MenuContextType>(initialState);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const { isToggled, setToggle, toggle } = useToggle(false);
  const closeMenu = () => setToggle(false);

  return (
    <MenuContext.Provider
      value={{ isMenuOpen: isToggled, toggle, toggleMenu: toggle, closeMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
