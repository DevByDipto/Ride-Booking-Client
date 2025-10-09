/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IRide } from "@/types/ride.type";
import type { IDriver } from "@/types/driver.type";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
createDriver: builder.mutation<IResponse<any>,IDriver>({ 
      query: (data) => ({
        url: "/driver",
        method: "POST",
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

export const { useCreateDriverMutation } = driverApi; 