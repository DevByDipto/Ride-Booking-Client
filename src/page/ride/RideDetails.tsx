import { useParams } from 'react-router';
import { useGetRidesByIdQuery } from '@/redux/features/ride/ride.api';

const RideDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetRidesByIdQuery(id as string);

  if (isLoading) return <p>Loading ride details...</p>;
  if (error) return <p>Error fetching ride details!</p>;

  const ride = data?.data;
  if (!ride) return <p>No ride found.</p>;

  const {
    fare,
    status,
    isPaymentCompleted,
    pickupLocation,
    destinationLocation,
    timestamps,
    createdAt,
    updatedAt,
    updatedBy,
  } = ride;

  return (
    <section
      className="p-8 max-w-6xl mx-auto rounded-xl shadow-lg"
      style={{ background: "var(--card)", color: "var(--card-foreground)" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Ride Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Basic Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Basic Info</h3>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Fare:</strong> ${fare}</p>
          <p><strong>Payment Completed:</strong> {isPaymentCompleted ? "Yes" : "No"}</p>
        </div>

        {/* Column 2: Locations */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-2">Locations</h3>
          <p><strong>Pickup:</strong> {pickupLocation.name} (Lat: {pickupLocation.lat}, Lon: {pickupLocation.lon})</p>
          <p><strong>Destination:</strong> {destinationLocation.name} (Lat: {destinationLocation.lat}, Lon: {destinationLocation.lon})</p>
        </div>

        {/* Column 3: Timestamps */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-2">Timestamps</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>Requested: {timestamps.requestedAt}</li>
            <li>Accepted: {timestamps.acceptedAt || "-"}</li>
            <li>Picked Up: {timestamps.pickedUpAt || "-"}</li>
            <li>In Transit: {timestamps.intransitedAt || "-"}</li>
            <li>Completed: {timestamps.completedAt || "-"}</li>
            <li>Cancelled: {timestamps.cancelledAt || "-"}</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>Created At: {createdAt}</p>
        <p>Updated At: {updatedAt} (By: {updatedBy})</p>
      </div>
    </section>
  );
};

export default RideDetails;
