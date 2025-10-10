import type { TRole } from ".";

export type TRideStatus =
  | "requested"
  | "accepted"
  | "picked-up"
  | "intransited"
  | "completed"
  | "cancelled"
  | "noResponse";

export interface ILocation {
  name: string;
  lat: number;
  lon: number;
}

export interface IRideTimestamps {
  requestedAt?: Date;
  acceptedAt?: Date;
  pickedUpAt?: Date;
  inTransitAt?: Date;
  completedAt?: Date;
  cancelledAt?: Date;
}

export interface IRide {
  _id?:string,
  rider: string; 
  driver?: string; 
  pickupLocation: ILocation; 
  destinationLocation: ILocation; 
  status: TRideStatus; 
  timestamps: IRideTimestamps; 
  updatedBy?: TRole;
  fare: number;
  isPaymentCompleted?: boolean;
  
}

export interface IRideStatusUpdate{
  rider?: string;
  driver?: string;
  updatedBy: TRole;
  status: TRideStatus;
  timestamps: IRideTimestamps;
}