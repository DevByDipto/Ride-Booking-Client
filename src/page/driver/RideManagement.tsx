import { rideStatus } from '@/constants/ride'
import { useUserInfoQuery } from '@/redux/features/auth/auth.api'
import { useGetRidesByRoleQuery, useUpdateRidesStatusMutation } from '@/redux/features/ride/ride.api'

import {
  Table,
  TableBody,
 
  TableCell,
 
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IRide, IRideStatusUpdate, TRideStatus } from '@/types/ride.type';
import { Button } from '@/components/ui/button';
import { getNextRideStatus } from '@/utils/getNextRideStatus';
import Loading from '@/components/shared/Loading';
import { role } from '@/constants/role';
import { toast } from 'sonner';
import type { IError, TRole } from '@/types';
import ShowErrorToast from '@/components/shared/ShowErrorToast';

const RideManagement = () => {
  const {data:driverInfo,isLoading} = useUserInfoQuery()
  const driverId = driverInfo?.data?.driver?._id

     const {data,refetch} = useGetRidesByRoleQuery(`driverId=${driverId}&exclude=${rideStatus.Requested,rideStatus.Cancelled,rideStatus.Completed}`)
     const rideInfo = data?.data
     const[updateRidesStatus] = useUpdateRidesStatusMutation()
     if(isLoading)return <Loading/>
  
//console.log(rideInfo);

  const handleRideStatusRide =async (id:string,status:string) => {
    const rideUpdateData: IRideStatusUpdate = {
      driver: driverId,
      updatedBy: role.DRIVER as TRole,
      status: status as TRideStatus,
      timestamps: { [`${status}At`]: new Date().toISOString() },
    };
    //console.log(rideUpdateData);
    
    try {
      const res = await updateRidesStatus({id,...rideUpdateData}).unwrap()
      //console.log({res});
      if(res.data){
        toast.success("update successfull")
        refetch()
      }
      
    } catch (error) {
     ShowErrorToast(error as IError<null>);
      
    }
    // //console.log(id);
  };
  if(!rideInfo?.length){
  return <h1>you have not assigned any ride</h1>
  }

  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="">Date</TableHead>
            <TableHead className="">PickupLocation</TableHead>
            <TableHead>Fare Range</TableHead>
            <TableHead className="">DestinationLocation</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rideInfo?.map((ride: IRide) => (
            <TableRow className="text-start" key={ride._id}>
              <TableCell className="font-medium ">
                {ride?.timestamps?.requestedAt
                  ? new Date(ride.timestamps.requestedAt).toLocaleString()
                  : "N/A"}
              </TableCell>
              <TableCell className="font-medium">
                {ride.pickupLocation.name}
              </TableCell>
              <TableCell className="font-medium">{ride.fare}$</TableCell>
              <TableCell className="font-medium">
                {ride.destinationLocation.name}
              </TableCell>
              <TableCell>
                <Button onClick={()=>handleRideStatusRide(ride._id as string,getNextRideStatus(ride?.status) as string)}>{getNextRideStatus(ride?.status)}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
      </div>
  )
}

export default RideManagement