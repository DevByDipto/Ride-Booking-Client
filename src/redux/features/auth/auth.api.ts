import type { ILogin, IRegister, IResponse } from "@/types";
import { baseApi } from "../../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
//Register endpoint
    register: builder.mutation<IResponse<null>,IRegister>({ // IResponse<null> aikhane ar data safty kii rilo null jokhon use korlam ? (support) ar reponse jodi formate ta main tain o nah kore tahole ts ta dhorte parbe nah tahole ai jibista bananor shubidha kii ?
      query: (credential) => ({
        url: "/user/register",
        method: "POST",
        body: credential,
      }),
    }),
//Login endpoint
login: builder.mutation<IResponse<null>,ILogin>({
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
    }),
  }),
});

export const { useRegisterMutation,useLoginMutation,useLogoutMutation } = authApi; 