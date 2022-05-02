import axios from "axios";
import { createContext, useState } from "react";

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  username: string;
  avatar?: string;
} & LoginParams;

export type AuthContextState = {
  authenticated: boolean;
  user: null;
};
export type AuthContextType = {
  register: (params: RegisterParams) => Promise<void>;
} & AuthContextState;

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  authenticated: false,
  user: null,
};

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  register: async () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [auth, setAuth] = useState<AuthContextState>(initialState);

  // TODO: Auth logic
  // Move all logic functions to a service
  // Move all auth logic to a custom hook
  const register = async (params: RegisterParams) => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}users/register`, params)
      .then((data) => {
        console.log(data);
        //TODO: Redirect to /login with propagated data and let the user log once
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider value={{ ...auth, register }}>
      {children}
    </AuthContext.Provider>
  );
};
