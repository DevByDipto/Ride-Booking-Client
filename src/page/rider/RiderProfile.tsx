import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import  { useState } from "react";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@/components/shared/LoadingButton";
import { useUpdateRiderMutation } from "@/redux/features/rider/rider.api";
import { toast } from "sonner";
import Loading from "@/components/shared/Loading";
import type { IError } from "@/types";
import ShowErrorToast from "@/components/shared/ShowErrorToast";

const RiderProfile = () => {
  const { data, isLoading, refetch } = useUserInfoQuery();
  const riderInfo = data?.data?.rider;
  // //console.log(riderInfo);
  const [ride] = useUpdateRiderMutation();
  // RenderLoadning(isLoading);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const riderSchema = z.object({
    name: z.string(),
    phoneNumber: z
      .string()
      .refine(
        (val) => !val || /^\d{11}$/.test(val),
        "Phone number must be exactly 11 digits if provided"
      ),
    password: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof riderSchema>>({
    resolver: zodResolver(riderSchema),
    defaultValues: {
      name: riderInfo.name,
      phoneNumber: riderInfo.phoneNumber, 
      password: '',
    },
  });
  if(isLoading)return <Loading/>

  const onSubmit = async (value: z.infer<typeof riderSchema>) => {
    //console.log({ value });

    const rideData = {
      _id: data?.data?.rider?._id as string,
       name:value.name || riderInfo.name,
      phoneNumber: value.phoneNumber || riderInfo.phoneNumber,
      password:value.password || data?.data?.password,
    };
    //console.log(rideData);
try {
    const res = await ride(rideData).unwrap();
    if (res.data) {
      toast.success("your profile is update successfully");
      setDialogOpen(false);
      await refetch();
    }
    //console.log(res);
} catch (error) {
 ShowErrorToast(error as IError<null>);
}
  
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-base-200 rounded-2xl shadow-xl p-6">
      <div className="flex flex-col items-center gap-4">
        <img
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${riderInfo.name}`}
          alt={riderInfo.name}
          className="w-24 h-24 rounded-full shadow-md border-2 border-primary"
        />

        <h2 className="text-2xl font-bold text-center">{riderInfo.name}</h2>
        <p className="text-gray-500">{riderInfo.email}</p>

        <div className="divider my-2"></div>

        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span className="capitalize">{riderInfo.role}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Status:</span>
            <span
              className={`badge ${
                riderInfo.isBlocked ? "badge-error" : "badge-success"
              }`}
            >
              {riderInfo.isBlocked ? "Blocked" : "Active"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Number:</span>
            <span>
              {riderInfo?.phoneNumber ? riderInfo?.phoneNumber : "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Created:</span>
            <span>{new Date(riderInfo.createdAt).toLocaleDateString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Last Updated:</span>
            <span>{new Date(riderInfo.updatedAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* update profile */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Edit profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
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

export default RiderProfile;
