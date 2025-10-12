import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import getSidebarByRole from "@/utils/getSidebarByRole"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Link } from "react-router"
import Logo from "./ui/logo"
import Loading from "./shared/Loading"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {isLoading,data:userInfo} = useUserInfoQuery()
  if (isLoading) {
    return <Loading/>
  }
  
// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  // navMain: getSidebarByRole(userRole?.data?.role)
  navMain: getSidebarByRole(userInfo?.data?.role)
}

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to='/'>
        <Logo></Logo>
        </Link>
        
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item,index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item,index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild >
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
