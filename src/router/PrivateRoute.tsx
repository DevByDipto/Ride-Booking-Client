import Loading from "@/components/shared/Loading";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import React, { type ReactNode } from "react";
import { Navigate } from "react-router";
type PrivateRouteProps = {
  role?: TRole;
  children: ReactNode;
};

const PrivateRoute = ({ role, children }: PrivateRouteProps) => {
  const { data, isLoading } = useUserInfoQuery();
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (!data) {
    return <Navigate to="/login" />;
  }
  if(role && role !== data?.data?.role){
return <Navigate to='/unauthorized'/>
  }
  return children
};

export default PrivateRoute;
