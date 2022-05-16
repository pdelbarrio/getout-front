import axios, { AxiosError, AxiosInstance } from "axios";
import {
  ErrorPayload,
  ErrorResponse,
  ResponsePayload,
} from "../types/request.types";
import { Spot, SpotFormValues } from "../types/spot.types";

export const getSpotAxios = (token: string): AxiosInstance =>
  axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const create = async (
  axiosInstance: AxiosInstance,
  params: SpotFormValues
): Promise<ResponsePayload<Spot> | ErrorPayload> => {
  try {
    const response = await axiosInstance.post<Spot>("spots", params);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data,
    } as ErrorPayload;
  }
};

export const getSpotsFromAPI = async (
  axiosInstance: AxiosInstance
): Promise<ResponsePayload<Spot[]> | ErrorPayload> => {
  try {
    const response = await axiosInstance.get<{ data: { spots: Spot[] } }>(
      "spots"
    );

    return {
      status: response.status,
      data: response.data.data.spots,
    };
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data,
    } as ErrorPayload;
  }
};
