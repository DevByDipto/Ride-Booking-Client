import { baseApi } from "../../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
//Register endpoint
    register: builder.mutation({
      query: (credential) => ({
        url: "/user/register",
        method: "POST",
        body: credential,
      }),
    }),
//Login endpoint
login: builder.mutation({
      query: (credential) => ({
        url: "/auth/login",
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const { useRegisterMutation,useLoginMutation } = authApi; 