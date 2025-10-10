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
import React from "react"
import { useState } from "react"
import PaginationBar from "./PaginationBar"
// ------------------

// import { Check, ChevronsUpDown } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ]
export function UserRideHistory() {
  const {data,isLoading} = useUserInfoQuery()
  // console.log({data});
  
  const role  = data?.data?.role
  const id = role === "rider" ? data?.data?.rider._id : role === "driver" ? data?.data?.driver._id: ""
  RenderLoadning(isLoading)
   const [currentPage, setCurrentPage] = useState(1)
  const {data:rideinfo,isLoading:isRideLoading} = useGetRideByIdQuery(`${role}Id=${id}&limit=10&page=${currentPage}`)
  RenderLoadning(isRideLoading)
  // ------
  //   const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")
  // -----
  console.log({rideinfo});

 
const totalPages = rideinfo?.meta?.totalPages || 1


  
  return (
    <div className="my-5">
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
        {rideinfo?.data?.map((ride:IRide) => (
          <TableRow className="text-start" key={ride._id}>
            <TableCell className="font-medium ">{ride?.timestamps?.requestedAt
    ? new Date(ride.timestamps.requestedAt).toLocaleString()
    : "N/A"}</TableCell>
    <TableCell className="font-medium">{ride.pickupLocation.name}$</TableCell>
    <TableCell className="font-medium">{ride.fare}$</TableCell>
    <TableCell className="font-medium">{ride.destinationLocation.name}$</TableCell>
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

    {/* search */}
     {/* <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "search ride by destinationLocation"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-2500px] p-0">
        <Command>
          <CommandInput placeholder="Search destinationLocation..." className="h-9" />
          <CommandList>
            <CommandEmpty>No destinationLocation found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover> */}
    </div>
    
  )
}
