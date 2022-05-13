import React, { createContext, useContext, useMemo } from "react";
import { create, getSpotAxios } from "../api/spot.api";
import { HTTPStatusCodes } from "../types/request.types";
import { Spot, SpotFormValues } from "../types/spot.types";
import { AuthContext } from "./auth.context";

export type SpotContextType = {
  spots: Spot[];
  page: number;
  createSpot: (values: SpotFormValues) => Promise<boolean>;
};

export const SpotContext = createContext<SpotContextType>({
  spots: [],
  page: 1,
  createSpot: async () => false,
});

export const SpotContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { token } = useContext(AuthContext);

  //Sólo crea la instancia cuando el token cambia
  const axiosInstance = useMemo(() => getSpotAxios(token as string), [token]);

  const createSpot = async (values: SpotFormValues): Promise<boolean> => {
    const response = await create(axiosInstance, values);

    console.log(response);

    if (response.status === HTTPStatusCodes.CREATED) {
      return true;
    }
    //TODO: HandleError
    return false;
  };

  return (
    <SpotContext.Provider
      value={{
        spots: [],
        page: 1,
        createSpot,
      }}
    >
      {children}
    </SpotContext.Provider>
  );
};
