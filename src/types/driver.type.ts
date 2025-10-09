export type Tvehicle = "bike" | "car" | "zip"

export interface IDriver {
    email: string
    vehicleInfo:Tvehicle
    availability:boolean
}