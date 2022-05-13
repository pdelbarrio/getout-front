import React, { createContext, useContext, useMemo, useState } from "react";
import { create, getSpotAxios, getSpotsFromAPI } from "../api/spot.api";
import { HTTPStatusCodes, ResponsePayload } from "../types/request.types";
import { Spot, SpotFormValues } from "../types/spot.types";
import { AuthContext } from "./auth.context";

export type SpotContextType = {
  spots: Spot[];
  page: number;
  getSpots: () => Promise<boolean>;
  createSpot: (values: SpotFormValues) => Promise<boolean>;
};

export const SpotContext = createContext<SpotContextType>({
  spots: [],
  page: 1,
  getSpots: async () => false,
  createSpot: async () => false,
});

export const SpotContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const { token } = useContext(AuthContext);
  //Sólo crea la instancia cuando el token cambia
  const axiosInstance = useMemo(() => getSpotAxios(token as string), [token]);

  const getSpots = async () => {
    const response = await getSpotsFromAPI(axiosInstance);

    console.log(response);

    if (response.status === HTTPStatusCodes.OK) {
      const newSpots = (response as ResponsePayload<Spot[]>).data;
      setSpots((prevSpots) => [...prevSpots, ...newSpots]);
      return true;
    }
    //TODO: HandleError
    return false;
  };

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
        spots,
        page: 1,
        createSpot,
        getSpots,
      }}
    >
      {children}
    </SpotContext.Provider>
  );
};
