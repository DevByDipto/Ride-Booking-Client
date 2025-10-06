export type {IRegister,ILogin} from './auth.type.ts'


export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}