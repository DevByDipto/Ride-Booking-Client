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

export interface IError<T>{
  status:number,
  data:{
    success: boolean,
     message:string
     // devlopment face e to err,stach etc aste pare but ta to ami di nai ate kono issue hobe kii ? (support)
  },
  errorSources:Array<T>
}