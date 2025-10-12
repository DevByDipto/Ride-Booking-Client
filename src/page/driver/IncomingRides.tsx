import {  useGetRidesQuery, useUpdateRidesStatusMutation } from "@/redux/features/ride/ride.api";

import {
  Table,
  TableBody,

  TableCell,

  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IRide, IRideStatusUpdate, TRideStatus } from "@/types/ride.type";
import { Button } from "@/components/ui/button";
import { role } from "@/constants/role";
import { rideStatus } from "@/constants/ride";
import type { IError, TRole } from "@/types";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import ShowErrorToast from "@/components/shared/ShowErrorToast";

const IncomingRides = () => {
  const { data,refetch } = useGetRidesQuery();
  const { data: driverData } = useUserInfoQuery();
  const[updateRidesStatus] = useUpdateRidesStatusMutation()
  const driverID = driverData?.data.driver._id;
  const rideInfo = data?.data;
  //console.log({rideInfo});

  const handleAcceptRide =async (id:string) => {
    const rideUpdateData: IRideStatusUpdate = {
      driver: driverID,
      updatedBy: role.DRIVER as TRole,
      status: rideStatus.Accepted as TRideStatus,
      timestamps: { acceptedAt: new Date(new Date().toISOString()) },
    };
    try {
      const res = await updateRidesStatus({id,...rideUpdateData}).unwrap()
      //console.log({res});
      if(res.data){
        toast.success("Now you are assigned to this ride")
        refetch()
      }
      
    } catch (error) {
     ShowErrorToast(error as IError<null>);
      
    }
    //console.log(rideUpdateData);
  };

  if(!rideInfo?.length){
  return <h1>No ride avaiable</h1>
  }

  return (
    <div>
      {" "}
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
                {ride.pickupLocation.name}$
              </TableCell>
              <TableCell className="font-medium">{ride?.fare}$</TableCell>
              <TableCell className="font-medium">
                {ride.destinationLocation.name}$
              </TableCell>
              <TableCell>
                <Button onClick={()=>handleAcceptRide(ride._id as string)}>Accept</Button>
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
  );
};

export default IncomingRides;
