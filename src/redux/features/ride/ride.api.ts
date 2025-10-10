/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRide } from "@/types/ride.type";
import { rideStatus } from "@/constants/ride";
import type {IRideStatusUpdate} from "@/types/ride.type"
export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
createRide: builder.mutation<IResponse<any>,IRide>({ 
      query: (data) => ({
        url: "/ride",
        method: "POST",
        body:data,
      }),
      invalidatesTags: ['Ride'],
    }),
getRideById: builder.query<IResponse<any>,string>({ 
      query: (query) => ({
        url: `/ride?${query}`,
        method: "GET",
      }),
    }),
getRides: builder.query<IResponse<any>,void>({ 
      query: () => ({
        url: `/ride?status=${rideStatus.Requested}`,
        method: "GET",
      }),
      providesTags:["Ride"]
    }),
    updateRidesStatus: builder.mutation<IResponse<any>,{ id: string } & IRideStatusUpdate>({ 
      query: ({id,...data}) => ({
        url: `/ride/${id}`,
        method: "PATCH",
        body:data,
      }),
      invalidatesTags: ['Ride'] // kaj korche nah (support)
    }),
  }),
});

export const { useCreateRideMutation,useGetRideByIdQuery,useGetRidesQuery,useUpdateRidesStatusMutation } = rideApi; 