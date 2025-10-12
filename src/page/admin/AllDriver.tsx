import {  useState } from "react";
import {
  Table,
  TableBody,

  TableCell,

  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  useGetAllDriverQuery,
  useUpdateDriverApprovalMutation,
} from "@/redux/features/driver/driver.api";
import type { IDriver, TIsApproved, TUpdateDriverApprovalStatus } from "@/types/driver.type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TableFilter from "@/components/shared/TableFilter";
import PaginationBar from "@/components/shared/PaginationBar";
import ShowErrorToast from "@/components/shared/ShowErrorToast";
import type { IError } from "@/types";

const AllDriver = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectIsApprove, setSelectIsApprove] = useState("");
  const { data, refetch } = useGetAllDriverQuery(`limit=10&page=${currentPage}`);
  const driverInfo = data?.data;
  const [updateDriver] = useUpdateDriverApprovalMutation();
  const totalPages = data?.meta?.totalPages || 2;
    //console.log(data);
  const isApproved = ["pending", "approved", "suspend"];

    const handleApproval = async (id:string,aprovalValue:string) => {
      const driverUpdateData :TUpdateDriverApprovalStatus = {
        id,
        isApproved: aprovalValue as TIsApproved,
      };
      try {
        const res = await updateDriver(driverUpdateData).unwrap();
        //console.log({ res });
        if (res.data) {
          toast.success("approved status sucessfully changed");
          refetch();
        }
      } catch (error) {
        ShowErrorToast(error as IError<null>);
      }
      // //console.log(value, _id);
    };



    const [searchText, setSearchText] = useState("");
      // const [statusFilter, setStatusFilter] = useState();
    const handleClear = () => {
        setSearchText("");
        // setStatusFilter();
      };
    
      const filteredData = driverInfo?.filter((item:IDriver) => {
        // //console.log(item);
        
        const matchSearch = item?.vehicleInfo?.toLowerCase().includes(searchText.toLowerCase());
        // //console.log(matchSearch);
        
        // const matchStatus = statusFilter ? item?.availability === statusFilter : true;
    // //console.log(matchStatus);
    
        return matchSearch ;
      });
      // const filterOptions = driverInfo?.map((item:IDriver)=>{
      //   return {label: item?.isApproved, value: item?.isApproved}
      // })
      // //console.log(filterOptions);
  return (
    <div>
        <TableFilter
              searchPlaceholder="Search by vehicleInfo..."
              searchValue={searchText}
              onSearchChange={setSearchText}
              // filterLabel="Status"
              // filterOptions={filterOptions}
              // selectedFilter={statusFilter}
              // onFilterChange={setStatusFilter}
              onClear={handleClear}
            />
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
          {filteredData?.map((driver: IDriver) => (
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
      {/* pagination */}
     <div >
      <PaginationBar totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}></PaginationBar>
     </div>
    </div>
  );
};

export default AllDriver;
