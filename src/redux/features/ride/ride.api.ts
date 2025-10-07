/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRide } from "@/types/ride.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
createRide: builder.mutation<IResponse<any>,IRide>({ 
      query: (data) => ({
        url: "/ride",
        method: "POST",
        body:data,
      }),
    }),
  }),
});

export const { useCreateRideMutation } = authApi; 