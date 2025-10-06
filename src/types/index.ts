import type {ComponentType } from 'react';

export type {IRegister,ILogin} from './auth.type.ts'


export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export type TRole = "admin" | "driver" | "rider"

export interface ISidebar{
  title:string,
  items:{
title:string,
url:string,
Component:ComponentType
  }[]
}