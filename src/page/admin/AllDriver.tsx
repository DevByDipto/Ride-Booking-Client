import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { IRider } from "@/types/rider.type";
import { toast } from "sonner";
import PaginationBar from "@/components/shared/PaginationBar";
import {
  useGetAllDriverQuery,
  useUpdateDriverApprovalMutation,
  useUpdateDriverMutation,
} from "@/redux/features/driver/driver.api";
import type { IDriver, TIsApproved, TUpdateDriverApprovalStatus } from "@/types/driver.type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AllDriver = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectIsApprove, setSelectIsApprove] = useState("");
  const { data, refetch } = useGetAllDriverQuery(`limit=1&page=${currentPage}`);
  const driverInfo = data?.data;
  const [updateDriver] = useUpdateDriverApprovalMutation();
  const totalPages = data?.meta?.totalPages || 1;
  //   console.log(data);
  const isApproved = ["pending", "approved", "suspend"];

    const handleApproval = async (id:string,aprovalValue:string) => {
      const driverUpdateData :TUpdateDriverApprovalStatus = {
        id,
        isApproved: aprovalValue as TIsApproved,
      };
      try {
        const res = await updateDriver(driverUpdateData).unwrap();
        console.log({ res });
        if (res.data) {
          toast.success("approved status sucessfully changed");
          refetch();
        }
      } catch (error) {
        console.log(error);
      }
      // console.log(value, _id);
    };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Vehicle Info</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Approval Status</TableHead>

            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {driverInfo?.map((driver: IDriver) => (
            <TableRow key={driver._id}>
              <TableCell className="font-medium">{driver?.name}</TableCell>
              <TableCell>{driver?.email}</TableCell>
              <TableCell>{driver?.phoneNumber}</TableCell>
              <TableCell>{driver?.vehicleInfo}</TableCell>
              <TableCell>
                {driver?.availability ? (
                  <span className="text-green-600 font-semibold">
                    Available
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Unavailable
                  </span>
                )}
              </TableCell>
              <TableCell>
                {driver?.isApproved === "approved" ? (
                  <span className="text-green-600 font-semibold">Approved</span>
                ) : driver?.isApproved === "pending" ? (
                  <span className="text-yellow-500 font-semibold">Pending</span>
                ) : (
                  <span className="text-red-600 font-semibold">Suspend</span>
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">change Approval</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="">
                    <DropdownMenuRadioGroup
                      value={selectIsApprove}
                      onValueChange={setSelectIsApprove}
                    >
                      {isApproved.map((action) => (
                       
                          <DropdownMenuRadioItem key={action} value={action}>
                             <button
                          onClick={() => handleApproval(driver._id, action)}
                        >
                            {action}
                            </button>
                          </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              {/* <TableCell>
          <Button
            onClick={() =>
              handleDriverApproval(
                driver.isApproved === "approved" ? "pending" : "approved",
                driver._id as string
              )
            }
          >
            {driver.isApproved === "approved" ? "Revoke" : "Approve"}
          </Button>
        </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      .{/* pagination */}
      <PaginationBar
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></PaginationBar>
    </div>
  );
};

export default AllDriver;
