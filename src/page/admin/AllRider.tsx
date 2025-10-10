import {
  useGetAllRiderQuery,
  useUpdateRiderMutation,
} from "@/redux/features/rider/rider.api";
import React, { useState } from "react";
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

const AllRider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch } = useGetAllRiderQuery(`limit=1&page=${currentPage}`);
  const riderInfo = data?.data.data;
  const [updateRider] = useUpdateRiderMutation();
  // const totalPages = rideinfo?.meta?.totalPages|| 1
  const totalPages = 1;
  // console.log(data);

  const handleriderBlock = async (value: boolean, _id: string) => {
    const riderUpdateData = {
      isBlocked: value,
    };
    try {
      const res = await updateRider({ _id, ...riderUpdateData }).unwrap();
      console.log({ res });
      if (res.data) {
        toast.success("Now you are assigned to this ride");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(value, _id);
  };

  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead>Number</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Account crate</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {riderInfo?.map((rider: IRider) => (
            <TableRow className="text-start" key={rider._id}>
              <TableCell className="font-medium ">{rider?.name}</TableCell>
              <TableCell className="font-medium">{rider?.email}</TableCell>
              <TableCell className="font-medium">
                {rider?.phoneNumber}
              </TableCell>
              <TableCell className="font-medium">
                {rider.isBlocked ? "Block" : "unblock"}
              </TableCell>
              <TableCell className="font-medium">
                {rider?.createdAt
                  ? new Date(rider?.createdAt).toLocaleString()
                  : "N/A"}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() =>
                    handleriderBlock(
                      rider.isBlocked ? false : true,
                      rider._id as string
                    )
                  }
                >
                  {rider.isBlocked ? "Unblock" : "Block"}
                </Button>
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
      .{/* pagination */}
      <PaginationBar
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></PaginationBar>
    </div>
  );
};

export default AllRider;
