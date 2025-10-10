export interface IRider {
    _id?:string
    name: string
    email:string
    password:string
    isBlocked?: boolean
    phoneNumber:number
    createdAt?:Date
}