import Loading from "@/components/shared/Loading";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import React, { type ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
type PrivateRouteProps = {
  role?: TRole;
  children: ReactNode;
};

const RiderPrivateRoute = ({ role, children }: PrivateRouteProps) => {
  const { data, isLoading } = useUserInfoQuery();
  const location = useLocation()
  // console.log(location);
  // console.log(data);
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (!data?.data.email) {
    return <Navigate to="/login" state={location.pathname}/>;
  }

  if(role && role !== data?.data?.role){
return <Navigate to='/unauthorized'/>
  }
  if(data.data?.rider?.isBlocked){ 
return <Navigate to="/blockedPage"/>
  }
  return children
};

export default RiderPrivateRoute;
