/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { TAdminUpdate } from "@/types/admin.type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
updateAdmin: builder.mutation<IResponse<any>,TAdminUpdate>({ 
      query: ({id,...data}) => ({
        url: `/user/${id}/updateAdmin`,
        method: "PATCH",
        body:data,
      }),
    //   providesTags: ['User']
    }),
    
  }),
});

export const { useUpdateAdminMutation } = userApi; 