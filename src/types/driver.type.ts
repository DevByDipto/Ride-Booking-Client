export type Tvehicle = "bike" | "car" | "zip"

export type TIsApproved = "pending" | "approved" | "suspend"

export interface TDriverUpdate {
    id?:string
    name: string
    vehicleInfo:Tvehicle
    availability?:boolean
    isApproved?:TIsApproved
    phoneNumber:string
    password:string
}

// export interface IDriver {
//     id?:string
//     name: string
//     email: string
//     vehicleInfo:Tvehicle
//     availability?:boolean
//     isApproved?:TIsApproved
//     phoneNumber:string
// }