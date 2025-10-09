import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useRegisterMutation } from "../redux/features/auth/auth.api";
import LoadingButton from "../components/shared/LoadingButton";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import type { IError, TRole } from "@/types";
import ShowErrorToast from "@/components/shared/ShowErrorToast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Tvehicle } from "@/types/driver.type";
import { role } from "@/constants/role";
import type { IUser, TVehicle } from "@/types/user.type";
type userRole = "rider" | "driver";
const Register = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("bike");
  const [selectRole, setSelectRole] = useState("rider");
  const [register, { isLoading, isError, isSuccess }] = useRegisterMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const vehicles: Tvehicle[] = ["car", "bike", "zip"];
  const roles: userRole[] = ["rider", "driver"];
  // console.log(location);
  const registerSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.email(),
    phoneNumber: z
          .string()
          .refine(
            (val) => !val || /^\d{11}$/.test(val),
            "Phone number must be exactly 11 digits if provided"
          ),
    password: z.string().min(6).max(50),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber:"",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const data :IUser = {
      role: selectRole as TRole,
      vehicleInfo: selectedVehicle as TVehicle,
      ...values,
      phoneNumber:values.phoneNumber,
    };
    try {
      const res = await register(data).unwrap();
      console.log(res);
      
      if (res.success) {
        toast.success("congatulation! register successfull");
        navigate("/login", { state: location.state });
      }
    } catch (error) {
      console.log(error);
      
      ShowErrorToast(error as IError<null>);
    }
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md mx-auto ">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* name field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* number field */}
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
            {/* password field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* role selection */}
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">select a role</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>chose your role</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={selectRole}
                    onValueChange={setSelectRole}
                  >
                    {roles?.map((role: userRole) => (
                      <DropdownMenuRadioItem key={role} value={role}>
                        {role}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* vehicle selection */}

            {selectRole == "driver" && (
              <div>
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
                      {vehicles.map((vehicle: Tvehicle) => (
                        <DropdownMenuRadioItem key={vehicle} value={vehicle}>
                          {vehicle}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            <LoadingButton isLoading={isLoading} type="submit">
              Sign Up
            </LoadingButton>
            <div className="text-muted-foreground flex justify-center gap-1 text-sm">
              <p>Already have a account? Please</p>
              <p
                onClick={() => navigate("/login", { state: location.state })}
                className="text-primary font-medium hover:underline"
              >
                Login
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
