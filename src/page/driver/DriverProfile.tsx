import RenderLoadning from "@/components/shared/RenderLoadning";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@/components/shared/LoadingButton";
import { useUpdateDriverMutation } from "@/redux/features/driver/driver.api";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { VEHICLES } from "@/constants/driver";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type {TDriverUpdate, Tvehicle } from "@/types/driver.type";

const DriverProfile = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("bike");
  const { data, isLoading, refetch } = useUserInfoQuery();
  const [dialogOpen, setDialogOpen] = useState(false);
  RenderLoadning(isLoading);
  
  const driverInfo = data?.data?.driver;
  const [updateDriver] = useUpdateDriverMutation();

  

  const driverSchema = z.object({
    name: z.string(),
    phoneNumber: z
      .string()
      .refine(
        (val) => !val || /^\d{11}$/.test(val),
        "Phone number must be exactly 11 digits if provided"
      ),
    password: z.string(),
    availability: z.boolean(),
    vehicleInfo: z.enum(VEHICLES),
  });

  const form = useForm<z.infer<typeof driverSchema>>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      name: driverInfo?.name || "",
      phoneNumber: driverInfo?.phoneNumber || "",
      password: "",
      availability: driverInfo?.availability,
      vehicleInfo: driverInfo?.vehicleInfo,
    },
  });
  React.useEffect(() => {
  if (driverInfo) {
    form.reset({
      name: driverInfo.name,
      phoneNumber: driverInfo.phoneNumber,
      password: "",
      availability: driverInfo.availability,
      vehicleInfo: driverInfo.vehicleInfo,
    });
  }
}, [driverInfo]);
  
// if(isLoading)return <h1 className="text-red-500">loading</h1>
  const onSubmit = async (value: z.infer<typeof driverSchema>) => {
    // console.log( driverInfo.availability);
    
    // console.log(value.availability);
    
    const driverData :TDriverUpdate = {
      id: driverInfo?._id as string,
      name: value.name || driverInfo?.name,
      phoneNumber: value.phoneNumber || driverInfo?.phoneNumber,
      password: value.password || data?.data?.password,
       availability: value.availability ?? driverInfo.availability,
      vehicleInfo: value.vehicleInfo || driverInfo.vehicleInfo,
    };
    // console.log(driverData.availability);
    // console.log("driverinfo");
    

    try {
      const res = await updateDriver(driverData).unwrap();
      if (res.data) {
        toast.success("Driver profile updated successfully");
        setDialogOpen(false);
        await refetch();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    }
  };
const vehicles: Tvehicle[] = ["car", "bike", "zip"];
  return (
    <div className="max-w-md mx-auto mt-10 bg-base-200 rounded-2xl shadow-xl p-6">
      <div className="flex flex-col items-center gap-4">
        <img
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${driverInfo?.name}`}
          alt={driverInfo?.name}
          className="w-24 h-24 rounded-full shadow-md border-2 border-primary"
        />

        <h2 className="text-2xl font-bold text-center">{driverInfo?.name}</h2>
        <p className="text-gray-500">{driverInfo?.email}</p>

        <div className="divider my-2"></div>

        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span className="capitalize">{driverInfo?.role}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Approved:</span>
            <span>{driverInfo?.isApproved}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Availability:</span>
            <span>{driverInfo?.availability ? "available" : "unavailabe"}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Number:</span>
            <span>{driverInfo?.phoneNumber || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Vehicle:</span>
            <span className="capitalize">
              {driverInfo?.vehicleInfo || "N/A"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Created:</span>
            <span>
              {new Date(driverInfo?.createdAt || "").toLocaleDateString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Last Updated:</span>
            <span>
              {new Date(driverInfo?.updatedAt || "").toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Update Driver Profile */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Edit profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Update your profile details here. Click save when done.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
                id="driverForm"
              >
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="************" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* toggle availability*/}
                <FormField
                  control={form.control}
                  name="availability" // যেই field টা form এ থাকবে
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <FormLabel className="mb-0">Availability</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value } // form এর value
                          onCheckedChange={field.onChange} // form এ update করার function
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/*  vehicle selection*/}
                <FormField
  control={form.control}
  name="vehicleInfo"
  render={({ field }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {field.value || "Select a vehicle"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Choose one</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={field.value || driverInfo?.vehicleInfo}
          onValueChange={field.onChange} // form এর value update
        >
          {vehicles.map((vehicle: Tvehicle) => (
            <DropdownMenuRadioItem key={vehicle} value={vehicle}>
              {vehicle}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )}
/>


                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <LoadingButton isLoading={isLoading} type="submit">
                    Update
                  </LoadingButton>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DriverProfile;
