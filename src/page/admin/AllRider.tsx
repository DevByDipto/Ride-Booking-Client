import {
  useGetAllRiderQuery,
  useUpdateRiderMutation,
} from "@/redux/features/rider/rider.api";
import  { useState } from "react";
import {
  Table,
  TableBody,

  TableCell,
  
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { IRider } from "@/types/rider.type";
import { toast } from "sonner";
import PaginationBar from "@/components/shared/PaginationBar";
import TableFilter from "@/components/shared/TableFilter";
import ShowErrorToast from "@/components/shared/ShowErrorToast";
import type { IError } from "@/types";

const AllRider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch } = useGetAllRiderQuery(`limit=10&page=${currentPage}`);
  const riderInfo = data?.data;
  const [updateRider] = useUpdateRiderMutation();
  // const totalPages = riderInfo?.meta?.totalPages|| 1
  const totalPages = riderInfo?.meta?.totalPages ||1;
  //console.log(data);

  const handleriderBlock = async (value: boolean, _id: string) => {
    const riderUpdateData = {
      isBlocked: value,
    };
    try {
      const res = await updateRider({ _id, ...riderUpdateData }).unwrap();
      //console.log({ res });
      if (res.data) {
        toast.success("update successfull");
        refetch();
      }
    } catch (error) {
      //console.log(error);
      
      ShowErrorToast(error as IError<null>);
    }
    //console.log(value, _id);
  };

  const [searchText, setSearchText] = useState("");
    // const [statusFilter, setStatusFilter] = useState("");
  const handleClear = () => {
      setSearchText("");
      // setStatusFilter("");
    };
  
    const filteredData = riderInfo?.filter((item:IRider) => {
      // //console.log(item);
      
      const matchSearch = item?.name?.toLowerCase().includes(searchText.toLowerCase());
      // //console.log(matchSearch);
      
      // const matchStatus = statusFilter ? item?.status === statusFilter : true;
  // //console.log(matchStatus);
  
      return matchSearch;
    });
    // const filterOptions = riderInfo?.map((item:IRide)=>{
    //   return {label: item.status, value: item.status}
    // })
    // //console.log(filterOptions);
  return (
    <div>
        <TableFilter
              searchPlaceholder="Search by name..."
              searchValue={searchText}
              onSearchChange={setSearchText}
              filterLabel="Status"
              // filterOptions={filterOptions}
              // selectedFilter={statusFilter}
              // onFilterChange={setStatusFilter}
              onClear={handleClear}
            />
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
          {filteredData?.map((rider: IRider) => (
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
      {/* pagination */}
      <div>
  <PaginationBar
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></PaginationBar>
      </div>
    
    </div>
  );
};

export default AllRider;
