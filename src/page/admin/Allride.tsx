import PaginationBar from "@/components/shared/PaginationBar"
import RenderLoadning from "@/components/shared/RenderLoadning"
import TableFilter from "@/components/shared/TableFilter"
import {
  Table,
  TableBody,
  
  TableCell,
  
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetAllRidesQuery } from "@/redux/features/ride/ride.api"
import type { IRide } from "@/types/ride.type"
import React from "react"
import { useState } from "react"

export function AllRide() {

   const [currentPage, setCurrentPage] = useState(1)
  const {data:rideinfo,isLoading:isRideLoading} = useGetAllRidesQuery()
  RenderLoadning(isRideLoading)
 
const totalPages = rideinfo?.meta?.totalPages || 1
// ------
 const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
const handleClear = () => {
    setSearchText("");
    setStatusFilter("");
  };

  const filteredData = rideinfo?.data?.filter((item:IRide) => {
    // console.log(item);
    
    const matchSearch = item?.pickupLocation?.name?.toLowerCase().includes(searchText.toLowerCase());
    // console.log(matchSearch);
    
    const matchStatus = statusFilter ? item?.status === statusFilter : true;
// console.log(matchStatus);

    return matchSearch && matchStatus;
  });
  const filterOptions = [
    { label: "requested", value: "requested" },
  { label: "accepted", value: "accepted" },
  { label: "picked-up", value: "picked-up" },
  { label: "intransited", value: "intransited" },
  { label: "completed", value: "completed" },
  { label: "cancelled", value: "cancelled" },
  { label: "noResponse", value: "noResponse" }
  ]
  console.log(rideinfo);
  return (
    <div className="my-5">
       <TableFilter
        searchPlaceholder="Search by PickupLocation..."
        searchValue={searchText}
        onSearchChange={setSearchText}
        filterLabel="Status"
        filterOptions={filterOptions}
        selectedFilter={statusFilter}
        onFilterChange={setStatusFilter}
        onClear={handleClear}
      />
      <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Date</TableHead>
          <TableHead className="">PickupLocation</TableHead>
          <TableHead>Fare Range</TableHead>
          <TableHead className="">DestinationLocation</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData?.map((ride:IRide) => (
          <TableRow className="text-start" key={ride._id}>
            <TableCell className="font-medium ">{ride?.timestamps?.requestedAt
    ? new Date(ride.timestamps.requestedAt).toLocaleString()
    : "N/A"}</TableCell>
    <TableCell className="font-medium">{ride.pickupLocation.name}</TableCell>
    <TableCell className="font-medium">{ride.fare}$</TableCell>
    <TableCell className="font-medium">{ride.destinationLocation.name}</TableCell>
            <TableCell>{ride.status}</TableCell>
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
    {/* pagination */}
    <PaginationBar totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}></PaginationBar>

   
    </div>
    
  )
}
