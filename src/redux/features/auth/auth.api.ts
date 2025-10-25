/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ILogin, IResponse } from "@/types";
import { baseApi } from "../../baseApi";
import type { IUser } from "@/types/user.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Register endpoint
    register: builder.mutation<IResponse<null>, IUser>({ // IResponse<null> aikhane ar data safty kii rilo null jokhon use korlam ? (support) ar reponse jodi formate ta maintain o nah kore tahole ts ta dhorte parbe nah tahole ai jinista bananor shubidha kii ?
      query: (credential) => ({
        url: "/user/register",
        method: "POST",
        body: credential,
      }),
    }),
    //Login endpoint
    login: builder.mutation<IResponse<null>, ILogin>({
      query: (credential) => ({
        url: "/auth/login",
        method: "POST",
        body: credential,
      }),
    }),
    //logout endpoint
    logout: builder.mutation<IResponse<null>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ['User']
    }),
    //userInfo endpoint
    userInfo: builder.query<IResponse<any>,void>({ // aikhane null use korate problem hocchilo tai any dilam ar any e jodi use kori tahole safty thaklo koi (support)
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ['User']
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation,useUserInfoQuery } = authApi; 