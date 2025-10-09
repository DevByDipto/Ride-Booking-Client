export type TRole = 'driver' | 'rider' | "admin"
export type TVehicle = "car" | "bike" | "zip"
export interface IUser {
    name: string
    email: string
    password?:string
    role: TRole
    vehicleInfo: TVehicle
}