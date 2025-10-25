/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRider } from "@/types/rider.type";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateRider: builder.mutation<IResponse<any>, Partial<IRider>>({
      query: ({ _id, ...data }) => ({
        url: `/rider/${_id}`,
        method: "PATCH",
        body: data, 
      }),
      invalidatesTags: ['User'] 
    }),
    getRiderById: builder.query<IResponse<any>, string>({
      query: (id) => ({
        url: `/ride/${id}`,
        method: "GET",
      }),
    }),
    getAllRider: builder.query<IResponse<any>, string>({
      query: (query) => ({
        url: `/rider?${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUpdateRiderMutation,useGetRiderByIdQuery,useGetAllRiderQuery } = rideApi; 