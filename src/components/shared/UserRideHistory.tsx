import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { useGetRidesByRoleQuery } from "@/redux/features/ride/ride.api"
import RenderLoadning from "./RenderLoadning"
import type { IRide } from "@/types/ride.type"
import React from "react"
import { useState } from "react"
import PaginationBar from "./PaginationBar"
import TableFilter from "./TableFilter"
import { Button } from "../ui/button"
import { Link } from "react-router"

export function UserRideHistory() {
  const {data,isLoading} = useUserInfoQuery()
  // console.log({data});
  
  const role  = data?.data?.role
  const id = role === "rider" ? data?.data?.rider._id : role === "driver" ? data?.data?.driver._id: ""
  RenderLoadning(isLoading)
   const [currentPage, setCurrentPage] = useState(1)
  const {data:rideinfo,isLoading:isRideLoading} = useGetRidesByRoleQuery(`${role}Id=${id}&limit=10&page=${currentPage}`)
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
  const filterOptions = rideinfo?.data?.map((item:IRide)=>{
    return {label: item.status, value: item.status}
  })
  console.log(filterOptions);
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
          <TableHead>Ride Details</TableHead>
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
            <TableCell><Link to={`/dashboard/${role}/ride-details/${ride._id}`}>Details</Link></TableCell>
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
