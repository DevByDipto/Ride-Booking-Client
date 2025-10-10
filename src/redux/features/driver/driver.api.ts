/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRide } from "@/types/ride.type";
import type { TDriverUpdate, TUpdateDriverApprovalStatus } from "@/types/driver.type";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
updateDriver: builder.mutation<IResponse<any>,TDriverUpdate>({ 
      query: ({id,...data}) => ({
        url: `/driver/${id}`,
        method: "PATCH",
        body:data,
      }),
    }),
updateDriverApproval: builder.mutation<IResponse<any>,TUpdateDriverApprovalStatus>({ 
      query: ({id,...data}) => ({
        url: `/driver/${id}/approval-status`,
        method: "PATCH",
        body:data,
      }),
    }),
getAllDriver: builder.query<IResponse<any>,string>({ 
      query: (query) => ({
        url: `/driver?${query}`,
        method: "GET",
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

export const { useUpdateDriverMutation,useGetAllDriverQuery,useUpdateDriverApprovalMutation } = driverApi; 