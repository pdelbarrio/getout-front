import { createContext, useState } from "react";

export type AuthContextType = {
  authenticated: boolean;
  user: null;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  authenticated: false,
  user: null,
};

export const AuthContext = createContext<AuthContextType>(initialState);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [auth, setAuth] = useState<AuthContextType>(initialState);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
