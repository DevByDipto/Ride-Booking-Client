import type { TRole } from ".";

export type RideStatus =
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
  rider: string; 
  driver?: string; 
  pickupLocation: ILocation; 
  destinationLocation: ILocation; 
  status: RideStatus; 
  timestamps: IRideTimestamps; 
  updatedBy?: TRole;
  fare: number;
  isPaymentCompleted?: boolean;
}