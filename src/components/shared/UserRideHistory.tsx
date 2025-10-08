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
import { useGetRideByIdQuery } from "@/redux/features/ride/ride.api"
import RenderLoadning from "./RenderLoadning"
import type { IRide } from "@/types/ride.type"

import { useState } from "react"
import PaginationBar from "./PaginationBar"

export function UserRideHistory() {
  const {data,isLoading} = useUserInfoQuery()
  
  const role  = data?.data?.role
  const id = role === "rider" ? data?.data?.rider._id : role === "driver" ? data?.data?.driver._id: ""
  RenderLoadning(isLoading)
   const [currentPage, setCurrentPage] = useState(1)
  const {data:rideinfo,isLoading:isRideLoading} = useGetRideByIdQuery(`roleId:${id}&limit=1&page=${currentPage}`)
  RenderLoadning(isRideLoading)
  
  console.log({rideinfo});

 
const totalPages = rideinfo?.meta?.totalPages || 1


  
  return (
    <div>
      <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Date</TableHead>
          <TableHead>Fare Range</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rideinfo?.data?.map((ride:IRide) => (
          <TableRow className="text-start" key={ride._id}>
            <TableCell className="font-medium ">{ride?.timestamps?.requestedAt
    ? new Date(ride.timestamps.requestedAt).toLocaleString()
    : "N/A"}</TableCell>
            <TableCell className="font-medium">{ride.fare}$</TableCell>
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
