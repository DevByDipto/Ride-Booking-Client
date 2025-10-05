import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";


export const baseApi = createApi({ // baseApi er moto akadhik api kokhon banabo?(support)
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
})