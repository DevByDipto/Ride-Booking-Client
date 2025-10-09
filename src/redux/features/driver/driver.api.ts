/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRide } from "@/types/ride.type";
import type {  TDriverProfileUpdate } from "@/types/driver.type";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
updateDriver: builder.mutation<IResponse<any>,TDriverProfileUpdate>({ 
      query: ({id,...data}) => ({
        url: `/driver/${id}`,
        method: "PATCH",
        body:data,
      }),
    }),
// getRideById: builder.query<IResponse<any>,string>({ 
//       query: (query) => ({
//         url: `/ride?${query}`,
//         method: "GET",
//       }),
//     }),
  }),
});

export const { useUpdateDriverMutation } = driverApi; 