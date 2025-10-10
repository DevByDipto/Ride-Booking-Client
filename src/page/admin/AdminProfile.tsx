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
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useUpdateAdminMutation } from "@/redux/features/user/user.api";
import type { TAdminUpdate } from "@/types/admin.type";

const AdminProfile = () => {
  const { data, isLoading, refetch } = useUserInfoQuery();
  const [dialogOpen, setDialogOpen] = useState(false);
  RenderLoadning(isLoading);

  const adminInfo = data?.data;
  const [updateAdmin] = useUpdateAdminMutation();
// console.log(adminInfo);

  // ✅ Validation schema
  const adminSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phoneNumber: z
      .string()
      .refine((val) => !val || /^\d{11}$/.test(val), "Phone number must be exactly 11 digits"),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof adminSchema>>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      name: adminInfo?.name || "",
      phoneNumber: adminInfo?.phoneNumber || "",
      password: "",
    },
  });

  React.useEffect(() => {
    if (adminInfo) {
      form.reset({
        name: adminInfo.name,
        phoneNumber: adminInfo.phoneNumber,
        password: "",
      }); 
    }
  }, [adminInfo]);

  // ✅ Submit handler
  const onSubmit = async (value: z.infer<typeof adminSchema>) => {
    const adminData: TAdminUpdate = {
      id: adminInfo?._id as string,
      name: value.name || adminInfo?.name,
      phoneNumber: value.phoneNumber || adminInfo?.phoneNumber,
      password: value.password || data?.data?.password,
    };
console.log(adminData);

    try {
      const res = await updateAdmin(adminData).unwrap();
      if (res.data) {
        toast.success("Admin profile updated successfully");
        setDialogOpen(false);
        await refetch();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-base-200 rounded-2xl shadow-xl p-6">
      <div className="flex flex-col items-center gap-4">
        <img
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${adminInfo?.name}`}
          alt={adminInfo?.name}
          className="w-24 h-24 rounded-full shadow-md border-2 border-primary"
        />

        <h2 className="text-2xl font-bold text-center">{adminInfo?.name}</h2>
        <p className="text-gray-500">{adminInfo?.email}</p>

        <div className="divider my-2"></div>

        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span className="capitalize">{adminInfo?.role}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Number:</span>
            <span>{adminInfo?.phoneNumber || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Created:</span>
            <span>{new Date(adminInfo?.createdAt || "").toLocaleDateString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Last Updated:</span>
            <span>{new Date(adminInfo?.updatedAt || "").toLocaleDateString()}</span>
          </div>
        </div>

        {/* Edit Modal */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Update your admin profile details here. Click save when done.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="adminForm">
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* phone */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="11 digit number" {...field} />
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
                        <Input placeholder="**********" {...field} />
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

export default AdminProfile;
