/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IResponse } from "@/types";
import { baseApi } from "../../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
allUser: builder.query<IResponse<any>,void>({ // aikhane null use korate problem hocchilo tai any dilam ar any e jodi use kori tahole safty thaklo koi (support)
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    //   providesTags: ['User']
    }),
  }),
});

export const { useAllUserQuery } = userApi; 