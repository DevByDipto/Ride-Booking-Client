import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import LoadingButton from "@/components/shared/LoadingButton";
import { toast } from "sonner";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import type { IError } from "@/types";
import ShowErrorToast from "@/components/shared/ShowErrorToast";
import { role } from "@/constants/role";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCreateDriverMutation } from "@/redux/features/driver/driver.api";
import type { IDriver, Tvehicle } from "@/types/driver.type";
import { RenderError } from "@/components/shared/RenderError";
const DriverForm = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("bike");
  const {data:userInfo} = useUserInfoQuery()
  const [driver,{isLoading}] = useCreateDriverMutation()
  const vehicles :Tvehicle[] = ["car", "bike", "zip"];

  const handleSubmit = async () => {
    const data :IDriver ={
  email: userInfo?.data.email,
  vehicleInfo: selectedVehicle as Tvehicle,
  availability: true
}
try {
    const res = await driver(data)
console.log(res);

} catch (error) {
    // RenderError(error as IError<null>)
    console.log(error);
    
}
    console.log(selectedVehicle);
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md mx-auto ">
        <h2 className="text-xl font-semibold">Driver Form</h2>
        <h2 className="text-lg font-medium">
          if are you interested to get drive! please select a vehicle
        </h2>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">select a vehicle</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>chose your one</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={selectedVehicle}
                onValueChange={setSelectedVehicle}
              >
                {vehicles.map((vehicle:Tvehicle) => (
                  <DropdownMenuRadioItem key={vehicle} value={vehicle}>
                    {vehicle}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <LoadingButton type="submit" onClick={handleSubmit}>
            Submit
          </LoadingButton>
        </div>
        {/* </form>
        </Form> */}
      </div>
    </div>
  );
};

export default DriverForm;
