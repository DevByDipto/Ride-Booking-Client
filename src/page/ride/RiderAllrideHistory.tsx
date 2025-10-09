import AddRideModal from "@/components/modules/ride/AddRideModal";
import { UserRideHistory } from "@/components/shared/UserRideHistory";
;


export function RiderAllRideHistory() {
  return (
 <div>
  <div className="flex justify-between">
<h2 className="text-xl font-medium">Ride History</h2>
    <AddRideModal/>
  </div>
  
   <UserRideHistory/>
 </div>
  );
}
