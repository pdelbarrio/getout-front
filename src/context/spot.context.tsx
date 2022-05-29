import React, { createContext, useContext, useMemo, useState } from "react";
import {
  create,
  getSpotAxios,
  getSpotsFromAPI,
  addToFav,
} from "../api/spot.api";
import { HTTPStatusCodes, ResponsePayload } from "../types/request.types";
import { Spot, SpotFormValues } from "../types/spot.types";
import { setErrorToast } from "../utils/toasts";
import { AuthContext } from "./auth.context";

export type SpotContextType = {
  spots: Spot[];
  loading: boolean;
  page: number;
  getSpots: () => Promise<boolean>;
  createSpot: (values: SpotFormValues) => Promise<boolean>;
};

export const SpotContext = createContext<SpotContextType>({
  spots: [],
  page: 1,
  loading: false,
  getSpots: async () => false,
  createSpot: async () => false,
});

export const SpotContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useContext(AuthContext);
  //Sólo crea la instancia cuando el token cambia
  const axiosInstance = useMemo(() => getSpotAxios(token as string), [token]);

  const getSpots = async () => {
    const response = await getSpotsFromAPI(axiosInstance);

    if (response.status === HTTPStatusCodes.OK) {
      const newSpots = (response as ResponsePayload<Spot[]>).data;
      setSpots(newSpots);
      // setSpots((prevSpots) => [...prevSpots, ...newSpots]);
      setLoading(false);
      return true;
    }
    setErrorToast("Error loading spots");
    setLoading(false);
    return false;
  };

  const createSpot = async (values: SpotFormValues): Promise<boolean> => {
    const response = await create(axiosInstance, values);

    console.log("createSpotContextresponse", response);

    if (response.status === HTTPStatusCodes.CREATED) {
      return true;
    }
    setErrorToast("Error creating");
    return false;
  };
  const addSpotToFav = async () => {};

  return (
    <SpotContext.Provider
      value={{
        spots,
        page: 1,
        createSpot,
        getSpots,
        loading,
      }}
    >
      {children}
    </SpotContext.Provider>
  );
};
