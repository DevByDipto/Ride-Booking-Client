/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosRequestConfig } from "axios"
import { axiosInstance } from "../lib/axios"
import type { BaseQueryFn } from "@reduxjs/toolkit/query"

export const axiosBaseQuery =(): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
    //   data?: AxiosRequestConfig['data']
        body?: any
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, body, params, headers }) => {
    // //console.log(body); 
    try {
      const result = await axiosInstance({
        url: url,
        method,
        data: body,
        params,
        headers,
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }