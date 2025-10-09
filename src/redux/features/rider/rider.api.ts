/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRider } from "@/types/rider.type";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
updateRider: builder.mutation<IResponse<any>, Partial<IRider>>({ 
      query: ({id,...data}) => ({
        url: `/rider/${id}`,
        method: "PATCH",
        body:data,
      }),
       invalidatesTags: ['User'] // refetch kaj korche nah keno ?(support)
    }),
// getRideById: builder.query<IResponse<any>,string>({ 
//       query: (query) => ({
//         url: `/ride?${query}`,
//         method: "GET",
//       }),
//     }),
  }),
});

export const { useUpdateRiderMutation } = rideApi; 