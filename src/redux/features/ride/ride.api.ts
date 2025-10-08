/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRide } from "@/types/ride.type";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
createRide: builder.mutation<IResponse<any>,IRide>({ 
      query: (data) => ({
        url: "/ride",
        method: "POST",
        body:data,
      }),
    }),
getRideById: builder.query<IResponse<any>,{role:string}>({ 
      query: (query) => ({
        url: `/ride?${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateRideMutation,useGetRideByIdQuery } = rideApi; 