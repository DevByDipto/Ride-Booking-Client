import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { IRide } from "@/types/ride.type";
import RenderLoadning from "@/components/shared/RenderLoadning";
import { useCreateRideMutation } from "@/redux/features/ride/ride.api";
import ShowErrorToast from "@/components/shared/ShowErrorToast";
import type { IError } from "@/types";
import LoadingButton from "@/components/shared/LoadingButton";
import { toast } from "sonner";
import { useState } from "react";

export function RiderAllRideHistory() {
  const { data: userData } = useUserInfoQuery();
  const [rideBooking, { data: ride, isLoading }] = useCreateRideMutation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const riderSchema = z.object({
    pickupLocation: z.string(),
    destinationLocation: z.string(),
    fare: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof riderSchema>>({
    resolver: zodResolver(riderSchema),
    defaultValues: {
      pickupLocation: "",
      destinationLocation: "",
      fare: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof riderSchema>) => {
    const rideData: IRide = {
      rider: userData?.data?.rider?._id,
      pickupLocation: {
        name: data.pickupLocation,
        lat: 23.7465,
        lon: 90.376,
      },
      destinationLocation: {
        name: data.destinationLocation,
        lat: 23.7806,
        lon: 90.42,
      },
      status: "requested",
      fare: Number(data.fare),
      timestamps: {
        requestedAt: new Date(new Date().toISOString()),
      },
    };

    try {
      const res = await rideBooking(rideData).unwrap();
      if (res.success) {
        toast.success("your ride is booked");
        setDialogOpen(false);
      }
      console.log(res);
    } catch (error) {
      console.log(error);

      ShowErrorToast(error as IError<null>);
    }
    console.log(rideData);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Ride</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Pickup Location */}
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Pickup Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Destination Location */}
            <FormField
              control={form.control}
              name="destinationLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Destination Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Fare */}
            <FormField
              control={form.control}
              name="fare"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fare</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Fare" {...field} />
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
                Book
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
